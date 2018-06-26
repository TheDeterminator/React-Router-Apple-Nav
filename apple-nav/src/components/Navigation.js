import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <NavLink to="/mac" className="nav-link">Mac</NavLink>
      <NavLink to="/ipad" className="nav-link">iPad</NavLink>
      <NavLink to="/iphone" className="nav-link">iPhone</NavLink>
      <NavLink to="/watch" className="nav-link">Watch</NavLink>
      <NavLink to="/tv" className="nav-link">Tv</NavLink>
      <NavLink to="/music" className="nav-link">Music</NavLink>
      <NavLink to="support" className="nav-link">Support</NavLink>
    </div>
  )
}

export default Navigation;
