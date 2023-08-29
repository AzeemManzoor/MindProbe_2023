// UserProfile.js

import React from 'react';
import './UserProfile.css'; // Import your CSS file

const UserProfile = () => {
  // You can replace these with actual user data from your application
  const user = {
    name: 'Sarmad Waheed',
    email: 'sarmadwaheed157@gmail.com',
    profilePicture: '/src//Assets/sarmad.jpeg',
  };

  return (
    <div className="user-profile">
      <img
        className="profile-picture"
        src={user.profilePicture}
        alt="Profile Picture"
      />
      <div className="user-details">
        <h2 className="user-name">{user.name}</h2>
        <p className="user-email">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
