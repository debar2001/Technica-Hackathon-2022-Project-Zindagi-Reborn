import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const LogIn = () => {
  return <><Navbar /><div className='mycard'>
    <div className='card auth-card'>
      <h3> Zindagi Reborn</h3>
      <input
        type="text"
        placeholder="username"
        style={{ color: "white" }} />
      <input
        type="password"
        placeholder="password"
        style={{ color: "white" }} />
      <Link to="/posts"><button className="btn waves-effect waves-light">LogIn</button></Link>
      <h6>
        <Link to="/signup">Don't have an account?</Link>
      </h6>
    </div>
  </div></>;
};

export default LogIn;
