import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Twist from './Twist';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Instagram from './Instagram';
import Nav from '../Nav';
import './Header.css';

const Header = () => {
  return (
    <header className="flex f-col jc-start">
      <Link to="/">
        <Logo color="dark" />
      </Link>
      <Twist color="dark" />
      <div className="social flex f-col">
        <a
          href="https://www.facebook.com/Brave-147791791925436/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Facebook color="dark" />
        </a>
        <a
          href="https://twitter.com/BraveCreativity"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter color="dark" />
        </a>
        <a
          href="https://www.instagram.com/wearebrave/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram color="dark" />
        </a>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
