import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useAuth0 } from '@auth0/auth0-react';
import './ChatComponent.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io('http://localhost:9000');

const ChatComponent = ( ) => {
  const { user,isAuthenticated } = useAuth0();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Fetch messages from the server when the component mounts
    fetchMessages();

    // Listen for new messages from sockets
    socket.on('message', (newMessage) => {
     setMessages(prevMessages => [...prevMessages, newMessage]);

    });

  
    scroll()

    return () => {
      socket.disconnect();
    };
  }, []);


  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        user: user?.name || 'Anonymous',
        picture: user?.picture || '',
        text: message,
        sender: user?.name || 'Anonymous'
    
      };
      scrollToBottom();

      // Emit new messages to the server
      socket.emit('message', newMessage);
      setMessage('');


    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      scrollToBottom();
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };


  const scroll = () => {
      setTimeout(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000); 
  };


  const toggleChat = () => {
    setIsVisible(!isVisible);
    toast.success('Messages will be reset every week');

   };

  const minimizeChat = () => {
    setIsVisible(false);
  };


  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:9000/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };





  return (
<div>
{isAuthenticated && (



    <div className={`chat-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="chat-header">
      {isVisible && (
        <button  className="toggle-button" onClick={scrollToBottom} ><b>Scroll To Bottom</b></button>
        )}
        <button className="toggle-button"
        onClick={toggleChat}
        >
          {isVisible ? 'CLOSE' :

          <FontAwesomeIcon icon={faComment} className="fa fa-comment fa-2x" aria-hidden="true"  onClick={scroll}  />
        }
        </button>

        {/* {isVisible && (
        <button  className="toggle-button" onClick={scrollToBottom} ><b>Scroll To Bottom</b></button>
        )} */}

        {/* {isVisible && (
          <button className="minimize-button" onClick={
            minimizeChat}>
            CLOSE
          </button>
        )} */}
      </div>
      {isVisible && (
        <div className="chat-room">
          <div className="messages-container">


{messages.map((msg, index) => {
  const isUserMessage = msg.user === user?.name; 
  
  return (
    <div key={index} className={`message ${isUserMessage ? 'user-message' : ''}`}>
      {msg.sender !== 'user' && <img src={msg.picture} alt={msg.user} className="avatar" />}
      <div className={`message-content ${isUserMessage ? 'user-message-content' : 'other-message-content'}`}>
        <strong>{msg.user}:</strong> {msg.text}
      </div>
      {msg.sender === 'user' && <img src={msg.picture} alt={msg.user} className="avatar" />}
    </div>
  );
})}











            <div ref={messagesEndRef} />
          </div>
          <div className="input-box">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={handleKeyPress}
            />
            <button className='btn5' onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    
    </div>
  



  )}
    </div>
  );
};

export default ChatComponent;
