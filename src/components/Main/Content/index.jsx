import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookMoadal from "../../Bookmark/modal";

export default function Content({
  databaza,
  content,
  wishCate,
  setClist,
  clist,
  save,
  setSave
}) {

  let [mopen, setMopen] = useState(false)

  let openHandler = () => {
    setClist(true)
  }

  const saveCotegories = (obj) => {
    mopen !== obj.id ? setMopen(obj.id): setMopen("")
    if (save.indexOf(obj) !== -1) return
    setSave([...save,obj])
  }

  return(
    <section className="content">
        <div className="content__header d-flex">
          <button className="content__header-btn">Following</button>
          <button className="content__header-btn">Recommended</button>
        </div>
        <ul className="content__list">
          {
            content.map((item, index) => {
              return(
                <li key={index +88} className="content__item">
                  <div className="content__list-header d-flex align-items-center">
                    <img className="content__list-avatar" src={item.avatar} alt={item.name} />
                    <h3 className="content__list-name">{item.name}</h3>
                    <span className="content__list-data">{item.data}</span>
                  </div>

                  <div className="content__main d-flex">
                    <div className="content__box">

                      <Link className="content__link" to={`/info/${item.id}`}>
                        <h2 className="content__title">{item.title}</h2>
                        <p className="content__desc">{item.desc}</p>
                      </Link>

                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <span className="content__type">{item.type}</span>
                          <span className="content__read">{item.read}</span>
                          <span className="content__select">Selected for you</span>
                        </div>
                        <div className="content__btnbox d-flex">
                          <button id={'btn'+item.id} onClick={()=> saveCotegories(item)} className="content__mbtn">
                            <i className='bx bx-bookmark-plus content__bookmark'></i>
                          </button>
                          <div id={'modal'+item.id}
                          style={{display: mopen === item.id ? "block" : "none",}}
                          className={`content__modal`}
                          >
                            <ul className="content__modal-list">
                              <li className="content__modal-item">
                                <label className="d-flex align-items-center" htmlFor="savedcheck">
                                  <input className="me-2" type="checkbox" name="save" id="savedcheck"
                                  defaultChecked={true} /> Reading list
                                </label>
                              </li>
                              {
                                wishCate.map((save, index) => {
                                  return(
                                    <li key={index+771} className="content__modal-item">
                                      <label className="d-flex align-items-center" htmlFor={save.name + "id"}>
                                        <input className="me-2" type="checkbox" name="save" id={save.name + "id"}
                                        defaultChecked={false} /> {save.name}
                                      </label>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                              <button onClick={openHandler} className="content__modal-mopen">Create new list</button>
                          </div>
                          <i className='bx bx-dots-horizontal-rounded content__dot'></i>
                        </div>
                      </div>
                    </div>

                    <div className="content__imgbox">
                      <img className="content__img" src={item.img} alt={item.name} />
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <BookMoadal
          setClist={setClist}
          clist={clist}
        />
      </section>

  )
}