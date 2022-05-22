import React from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <nav>
    <div className="nav-wrapper" style={{backgroundColor: "#603bbb"}}>
      <Link to="/profile" className="brand-logo left">Zindagi Reborn</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/posts">Feed</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/" >Logout</Link></li>
      </ul>
    </div>
  </nav>

    )
};

export default Navbarr;
