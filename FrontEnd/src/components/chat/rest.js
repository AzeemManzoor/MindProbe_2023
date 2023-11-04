// // Chat.js
// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:9000'); // Replace with your backend port

// const ChatComponent = ({ user }) => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     console.log('Socket connected'); // Check if socket is connected
//     socket.on('message', (message) => {
//       setMessages(prevMessages => [...prevMessages, message]);
//     });

//     return () => {
//       console.log('Socket disconnected'); // Check if socket is disconnected
//       socket.disconnect();
//     };
//   }, []); // Empty dependency array ensures this effect runs once when component mounts

//   const sendMessage = () => {
//     console.log('Sending message:', message); // Check if send message function is triggered
//     if (message.trim() !== '') {
//       const newMessage = {
//         user: user?.name || 'Anonymous',
//         picture: user?.picture || '',
//         text: message,
//       };
//       socket.emit('message', newMessage);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="chat-room">
//       {/* Messages display */}
//       <div className="messages">
//         {messages.map((msg, index) => (
//           <div key={index} className="message">
//             <img src={msg.picture} alt={msg.user} className="avatar" />
//             <div className="message-content">
//               <strong>{msg.user}:</strong> {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>
//             {/* Message input and send button */}
//       <div className="input-box">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//         {/* console.log({message}) */}
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;



































// ChatComponent.js
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useAuth0 } from '@auth0/auth0-react';
import './ChatComponent.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';


const socket = io('http://localhost:9000');

const ChatComponent = () => {
  const { user } = useAuth0();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const minimizeChat = () => {
    setIsVisible(false);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        user: user?.name || 'Anonymous',
        picture: user?.picture || '',
        text: message,
        sender: 'user',
      };
      socket.emit('message', newMessage);
      setMessage('');
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  return (
    <div className={`chat-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="chat-header">
        <button className="toggle-button" onClick={toggleChat}>
          {isVisible ? 'MINDPROBE' :
          <FontAwesomeIcon icon={faComment} className="fa fa-comment fa-2x" aria-hidden="true" />
          }
        </button>
        {isVisible && (
          <button className="minimize-button" onClick={minimizeChat}>
            MINIMIZE
          </button>
        )}
      </div>
      {isVisible && (
        <div className="chat-room">
          <div className="messages-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'user' ? 'own-message' : 'receiver-message'}`}
              >
                {msg.sender !== 'user' && (
                  <img src={msg.picture} alt={msg.user} className="avatar" />
                )}
                <div className="message-content">
                  <strong>{msg.user}:</strong> {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <img src={msg.picture} alt={msg.user} className="avatar" />
                )}
              </div>
            ))}
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

  );
};

export default ChatComponent;
