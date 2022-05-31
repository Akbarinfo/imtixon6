import React from "react";
import { Link } from "react-router-dom";
import Left from "../Left";
import RightPart from "../Right";

export default function BookmarkSaved({save, setSave}) {
  return(
    <div className="container d-flex justify-content-between">
      <Left />
        <section className="savedinfo">
          <div className="savedinfo__main">
            <div className="d-flex justify-content-between align-items-center mb-5">
              <div className="d-flex align-items-center">
                <div className="savedinfo__avabox">
                  <img className="savedinfo__ava" src="https://picsum.photos/id/4/50" alt="ava" />
                </div>
                <div className="ms-2">
                  <h2 className="savedinfo__name">Akbarali Tengelov</h2>
                  <p className="savedinfo__data">May31 4 stores</p>
                </div>
              </div>
              <div>
                <i className='d-block savedinfo__dot bx bx-dots-horizontal-rounded'></i>
              </div>
            </div>
            <h3 className="savedinfo__title">Reading list</h3>
            <ul className="savedinfo__list">

              {
                save.map((item, index) => {
                  return(
                    <li className="savedinfo__item">
                    <div className="savedinfo__input ps-3">
                      Write a brief description
                    </div>
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
                              <button className="content__mbtn">
                                <i className='bx bx-bookmark-plus content__bookmark'></i>
                              </button>
                              <div className='content__modal'>
                                <ul className="content__modal-list">
                                  <li className="content__modal-item">
                                    <label className="d-flex align-items-center" htmlFor="savedcheck">
                                      <input className="me-2" type="checkbox" name="save" id="savedcheck"
                                      defaultChecked={true} /> Reading list
                                    </label>
                                  </li>
                                  {
                                    save.map((save, index) => {
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
                                  <button className="content__modal-mopen">Create new list</button>
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
          </div>
        </section>
      <RightPart />
    </div>
  )
}