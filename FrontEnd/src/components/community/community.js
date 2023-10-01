import React,{useState ,useEffect} from 'react'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import community from '../community/community.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Community = () => {
    const [loading, setLoading] = useState(false);
 const { user, isAuthenticated } = useAuth0();
 const [showRemoveButton, setShowRemoveButton] = useState(false);

    const removeData = async () => {
        setLoading(true);
        try {
          const userId = sessionStorage.getItem('userId');
      
          if (userId) {
            // Call the backend API to remove data
            const response = await axios.post('http://localhost:5005/deleteData', { userId });
      
            if (response.data.removed) {
              // Remove deleted userId's data from the state
              setData(prevData => prevData.filter(item => item.userId !== userId));
              // alert('Your Report has been removed from the Community');
              toast.success('Your Report has been removed from the Community');
              setShowRemoveButton(false);
            } else {
              toast.success('Report is not shared or already removed');
            }
          } else {
            toast.success('User ID not found');
          }
        } catch (error) {
          console.error('Error removing data:', error);
        } finally {
          setLoading(false);
        }
      };


      const [data, setData] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            // Call the backend API to fetch data
            const response = await axios.get('http://localhost:5005/fetchData');
        
            if (response.data.length > 0) {
              setData(response.data);


              const userId = sessionStorage.getItem('userId');
              if (userId && response.data.some(item => item.userId === userId)) {
                setShowRemoveButton(true);
              }


            } else {
              console.log('No data found in shares collection');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
        
        fetchData();
      }, []); // Empty dependency array ensures the effect runs only once when the component mounts
    










  return (
    <div>

<ToastContainer />

<div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className='table-h1' >MindProbe Community</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Personality Type</th>
                  <th>Emotion</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>User {index + 1}</td>
                    <td><img src={item.Picture} alt={`User ${index + 1}`} className="user-image" /></td>
                    <td>{item.Name}</td>
                    <td>{item.userId}</td>
                    <td>{item.PERSONALITY_TYPE}</td>
                    <td>{item.average_emotion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showRemoveButton && <button class='button-89 gapp' onClick={removeData}>Remove My Report</button>}
        </div>

      )}
    </div>







    </div>
  )
}

export default Community