import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isNavbar }) {
  return (
    isNavbar && (
      <nav className="flex justify-around">
        <Link to="/menu">
          <div className="">Menu</div>
        </Link>
        <Link to="/clients">
          <div className="">Clients</div>
        </Link>
        <Link to="/orders">
          <div className="">Orders</div>
        </Link>
      </nav>
    )
  );
}

export default Navbar;
