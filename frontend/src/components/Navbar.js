import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
    <div className="nav-wrapper" style={{backgroundColor: "#603bbb"}}>
      <Link to="/" className="brand-logo left">Zindagi Reborn</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">LogIn</Link></li>
        <li><Link to="/signup" >SignUp</Link></li>
      </ul>
    </div>
  </nav>

    )
};

export default Navbar;
