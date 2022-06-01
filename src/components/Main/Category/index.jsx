import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../../data/data";

export default function ContentAdd({databaza, content, setContent}) {

  let type = []
  let type2 = []
  databaza.map((item) => {
    type2.push(item.type)
  })
  type = [...new Set(type2)]

  let cateHandler = (e) => {
    setContent(databaza.filter(item => item.type === e.target.id))
    if(e.target.id === "all") {
      setContent(databaza.filter(item => item.type !== e.target.id))
    }
  }

  return(
    <section className="main d-flex flex-column">
    <div className="main__addbox">
      <NavLink className="main__addlink d-flex align-items-center" to='/'>
        <span className="main__addspan d-flex justify-content-center align-items-center">+</span>
        Keep up with the latest in any topic
      </NavLink>
    </div>
    <ul className="main__catelist d-flex list-unstyled">
    <li className="main__cateitem">
      <button onClick={cateHandler} id="all" className="main__catebtn">All</button>
    </li>
      {type.map((item, key) => {
        return(
          <li key={key+333} className="main__cateitem">
            <button onClick={cateHandler} id={item} className="main__catebtn">{item}</button>
          </li>
        )
      })
      }
    </ul>
  </section>
  )
}