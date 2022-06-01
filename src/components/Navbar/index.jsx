import React from "react";
//images
import Logo from '../../assets/images/logo.png'
import Navbar from "./navbar";

export default function Left() {
  return(
    <section className="left">
        <div className="left__main">
        <div className="left__logobox">
          <a href="/"><img className="left__logo" src={Logo} alt="logo" /></a>
        </div>
          <Navbar />
        <div className="left__users">
          <button className="left__users-btn">A</button>
        </div>
        </div>
    </section>
  )
}