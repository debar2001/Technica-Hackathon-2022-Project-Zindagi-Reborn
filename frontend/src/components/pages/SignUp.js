import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const SignUp = () => {
  return <><Navbar /><div className='mycard1'>
    <div className='card auth-card'>
      <h4> Zindagi Reborn</h4>
      <input
        type="text"
        placeholder="first name"
        style={{ color: "white" }} />
      <input
        type="text"
        placeholder="last name"
        style={{ color: "white" }} />
      <input
        type="text"
        placeholder="email"
        style={{ color: "white" }} />
      <input
        type="password"
        placeholder="password"
        style={{ color: "white" }} />
      <input
        type="text"
        placeholder="phone no."
        style={{ color: "white" }} />
      <input
        type="text"
        placeholder="guardian email"
        style={{ color: "white" }} />
      <input
        type="text"
        placeholder="Pin Code / Zip Code of your locality"
        style={{ color: "white" }} />
      <Link to="/login"><button className="btn waves-effect waves-light">SignUp</button></Link>
      <h6>
        <Link to="/login">Already have an Account?</Link>
      </h6>
    </div>
  </div></>;
};

export default SignUp;
