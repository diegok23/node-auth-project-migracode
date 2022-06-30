import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/Landing" className="logo">HOME</Link>
      <Link to="/SignUpForm">SIGN UP</Link>
      <Link to="/SignInForm">SIGN IN</Link>
    </nav>
  );
};
export default Header;
