import React from "react";
import { Link } from "react-router-dom";
import EndPart from "../EndPart";
import Navbar from "../Navbar";

export default function Story({ story }) {
  return(
    <div className="d-flex justify-content-between">
      <Navbar />
      <section className="story">
        <div className="story__main">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h1 className="story__title">Your stories</h1>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/addpublish">
                <button className="story__addbtn">Write a story</button>
              </Link>
              <button className="story__ibtn">Import a story</button>
            </div>
          </div>
          <div className='stories__dbox d-flex align-items-center'>
            <p className='stories__text mb-3'>Drafts</p>
          </div>

          <ul className="story__list">
            {story.map((item, key) => {
              if(item.text !== ''){
                return(
                  <li key={key+564} className="story__item">
                    <Link className="content__link" to={`/info/${item.id}`}>
                     <h3 className="story__name">{item.title}</h3>
                     </Link>
                     <div className="story__box d-flex align-items-center">
                       <p className="story__publish me-2">Published less than a minute ago</p>
                       <span className="story__publish me-2">1 min read</span>
                       <button className="story__icon"><i className='bx bx-upload me-2'></i></button>
                       <button className="story__icon"><i className='bx bx-dots-horizontal-rounded' ></i></button>
                     </div>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </section>
      <EndPart />
    </div>
  );
}
