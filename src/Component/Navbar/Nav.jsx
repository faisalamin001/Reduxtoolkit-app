import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className='navBox'>
      <p>
        <Link to='/'>Home</Link>
      </p>
      <p>
        <Link to='/cart'>Cart</Link>
      </p>
    </div>
  );
}

export default Nav;
