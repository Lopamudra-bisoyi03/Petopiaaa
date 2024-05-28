import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">Petopia</Link>
          <div>
            <Link to="/share" className="text-white mx-2">Share Story</Link>
            <Link to="/login" className="text-white mx-2">Login</Link>
            <Link to="/signup" className="text-white mx-2">Signup</Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
