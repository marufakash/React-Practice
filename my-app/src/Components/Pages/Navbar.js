import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './home.module.css';

const Navbar = () => {
  return (
    <nav className={style.nav}>
        <NavLink className={style.link} to="/">Home</NavLink>
        <NavLink className={style.link} to="/contact">Contact</NavLink>
        <NavLink className={style.link} to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar;