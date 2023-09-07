import React from 'react';
import Style from './Navbar.module.scss';
import Toggler from './home/Toggler';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { info } from '../info/Info';

const links = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About Me',
    to: '/about',
  },
  {
    name: info.initials,
    type: 'initials',
    to: '/',
  },
  {
    name: 'Portfolio',
    to: '/portfolio',
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();

  return (
    <nav className={Style.nav}>
      <ul className={Style.navList}>
        {links.map((link, index) => (
          <li key={index} className={Style.navItem}>
            <Link
              to={link.to}
              className={`${Style.link} ${
                location.pathname === link.to ? Style.active : ''
              }`}
            >
              {link.type === 'initials' ? (
                <h1>{link.name}</h1>
              ) : (
                <p>{link.name}</p>
              )}
            </Link>
          </li>
        ))}
        <li className={Style.navItem}>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </ul>
    </nav>
  );
}
