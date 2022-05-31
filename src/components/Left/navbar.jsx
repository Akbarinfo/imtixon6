import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return(
    <nav className="left__nav">
    <ul className="left__list">
      <li className="left__item">
        <NavLink className="left__link" to='/home' >
        <i className='left__icon bx bxs-home'></i>
        </NavLink>
      </li>
      <li className="left__item">
        <NavLink className="left__link" to='/sv' >
          <i className='left__icon bx bx-bell'></i>
        </NavLink>
      </li>
      <li className="left__item">
        <NavLink className="left__link" to='/list' >
          <i className='left__icon bx bx-bookmarks'></i>
        </NavLink>
      </li>
      <li className="left__item">
        <NavLink className="left__link" to='/' >
         <i className='left__icon bx bx-list-ul'></i>
        </NavLink>
      </li>
      <li className="left__item">
        <NavLink className="left__link" to='/cinfo' >
          <i className='left__icon bx bx-list-plus'></i>
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}