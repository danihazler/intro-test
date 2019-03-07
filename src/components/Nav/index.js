import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        <Link to="/rules">
          <li>Rules of Entry</li>
        </Link>

        <li id="line" className="bg-black" />

        <Link to="/termsAndconditions">
          <li>Terms &amp; Conditions</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
