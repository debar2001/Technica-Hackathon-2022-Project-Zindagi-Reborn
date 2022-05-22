import React from 'react';
import Navbarr from '../Navbarr';

const Profile = () => {
  return <><Navbarr /><div className='mycard'>
    <div className='card auth-card'>
      <h2>Name</h2>
      <input
        type="text"
        placeholder="username"
        readOnly />
      <input
        type="password"
        placeholder="password"
        readOnly />
    </div>
  </div></>;
};

export default Profile;
