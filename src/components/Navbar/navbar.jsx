import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(mail, name) {
  return(
    <nav className="navbar__nav">
    <ul className="navbar__list">
      <li className="navbar__item">
        <NavLink className="navbar__link" to='/home' >
        <i className='navbar__icon bx bxs-home'></i>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" to='/notifi' >
          <i className='navbar__icon bx bx-bell'></i>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" to='/list' >
          <i className='navbar__icon bx bx-bookmarks'></i>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" to='/story' >
         <i className='navbar__icon bx bx-list-ul'></i>
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" to='/addpublish' >
          <i className='navbar__icon bx bx-list-plus'></i>
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}