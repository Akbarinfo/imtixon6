import React, { useState } from "react";
//images
import Logo from '../../assets/images/logo.png'
import Nav from "./navbar";
import UsersInfo from "./users";

export default function Navbar({name, mail}) {
  let [isClicked, setClick] = useState(false)

  return(
    <section className="navbar">
      <div className="navbar__main">
        <div className="navbar__logobox">
          <a href="/home"><img className="navbar__logo" src={Logo} alt="logo" /></a>
        </div>
          <Nav />
        <div className="navbar__users">
          <button onClick={() => setClick(!isClicked)} className="navbar__users-btn"><img className="navbar__users-ava" src="https://picsum.photos/id/23/60" alt="" /></button>
        </div>
      </div>
      <UsersInfo
        isClicked={isClicked}
        name={name}
        mail={mail}
      />
    </section>
  )
}