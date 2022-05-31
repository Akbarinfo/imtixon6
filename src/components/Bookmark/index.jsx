import React from "react";
import { Link } from "react-router-dom";
import Left from "../Left";
import RightPart from "../Right";
import BookMoadal from "./modal";

export default function Bookmark({setClist, clist, setWishCate, wishCate, setWishCate2, wishCate2}) {

  let openHandler = () => {
    setClist(!clist)
  }

  return(
    <div className="container d-flex">
      <BookMoadal
        setClist={setClist}
        clist={clist}
        setWishCate={setWishCate}
        wishCate={wishCate}
        setWishCate2={setWishCate2}
        wishCate2={wishCate2}
      />
      <Left />
      <section className="bookmark">
      <div className="bookmark__header d-flex">
        <h2 className="bookmark__your">Your List</h2>
        <button onClick={openHandler} className="bookmark__header-btn">New list</button>
      </div>
      <div className="bookmark__saved">
        <button className="bookmark__saved-btn bookmark__saved-activ">Saved</button>
        <button className="bookmark__saved-btn">Highlights</button>
      </div>

      <div className="bookmark__main">
        <div className="bookmark__box">
          <p className="bookmark__desc">Create a list to easily organize and share stories</p>
          <button className="bookmark__btn-create">Start a list</button>
        </div>
        <div className="bookmark__circle">
        <svg width={283} height={174} viewBox="0 0 283 174" fill="none">
          <circle
            opacity="0.15"
            cx="141.5"
            cy="87.5"
            r="141.5"
            fill="#E8F3E8"
          />
          <circle cx="141.5" cy="87.5" r="29.5" fill="#fff" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M148.71 74.32a.66.66 0 0 1 1.31.07v3.28h3.28a.66.66 0 1 1 0 1.3h-3.28v3.29a.66.66 0 1 1-1.3 0v-3.28h-3.29a.66.66 0 0 1 0-1.31h3.28v-3.28-.07zm-13.77 4c-.72 0-1.3.59-1.3 1.31v17.68l7.46-5.74a.66.66 0 0 1 .8 0l7.47 5.74V87.5a.66.66 0 1 1 1.3 0v11.14a.66.66 0 0 1-1.05.52l-8.12-6.24-8.12 6.24a.65.65 0 0 1-1.06-.52v-19a2.62 2.62 0 0 1 2.62-2.63h5.25a.66.66 0 0 1 0 1.31h-5.25z"
            fill="#0F730C"
          />
          </svg>
        </div>
      </div>

      <Link className="bookmark__link" to='/sv'>
      <div className="bookmark__reading">
            <div className="bookmark__reading-box">
              <h2 className="bookmark__reading-title">Reading</h2>
              <div className="d-flex">
                <button className="bookmark__reading-wiew">View list</button>
              </div>
            </div>
            <div className="bookmark__reading-right">
              <div className="bookmark__reading-imgbox">
                <span className="bookmark__reading-span"></span>
              </div>
              <div className="bookmark__reading-boxs zindex"><span className="bookmark__reading-span"></span></div>
              <div className="bookmark__reading-boxs"><span className="bookmark__reading-span"></span></div>
            </div>
          </div>
      </ Link>

      {wishCate.map((item, index) => {
        return(
          <Link key={546+index} className="bookmark__link" to='/sv'>
          <div className="bookmark__reading">
            <div className="bookmark__reading-box">
              <h2 className="bookmark__reading-title">{item.name}</h2>
              <div className="d-flex">
                <button className="bookmark__reading-wiew">View list</button>
              </div>
            </div>
            <div className="bookmark__reading-right">
              <div className="bookmark__reading-imgbox">
                <span className="bookmark__reading-span"></span>
              </div>
              <div className="bookmark__reading-boxs zindex"><span className="bookmark__reading-span"></span></div>
              <div className="bookmark__reading-boxs"><span className="bookmark__reading-span"></span></div>
            </div>
          </div>
          </Link>
        )
      })

      }
    </section>
    <RightPart />
    </div>
  )
}