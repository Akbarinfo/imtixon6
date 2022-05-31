import React, { useState } from "react";

export default function BookMoadal({setClist, clist, wishCate, setWishCate, wishCate2, setWishCate2}) {

  let cancelHandler = () => {
    setClist(false)
  }

  let [counts, setCount] = useState(0)

  let inputHandler = (e) => {
    setCount(e.target.value)
    setWishCate2({
      name: e.target.value,
    })
  }

  let formHandler = (e) => {
    e.preventDefault()
    setWishCate([...wishCate, wishCate2])
    setClist(false)
    e.target.reset()
  }

  return(
    <section
    className={`bookmodal ${clist ? 'openflex' : ''}`}>
      <div className="bookmodal__main">
          <div className="d-flex justify-content-end">
            <button onClick={cancelHandler} className="bookmodal__xbtn"><i className='bx bx-x'></i></button>
          </div>
        <div className="bookmodal__box">
          <h2 className="bookmodal__title">Create new list</h2>
          <form onSubmit={formHandler} className="bookmodal__form" action="">
            <label htmlFor="listinput">
              <input onChange={inputHandler} className="bookmodal__input" id="listinput" type="text" max={60} placeholder="Give it a name" />
              <div className="d-flex justify-content-end">
                <span className="bookmodal__count">{counts.length} / 60</span>
              </div>
            </label>
            <span className="bookmodal__desc">Add a description</span>
            <label className="bookmodal__check" htmlFor="listcheck">
            <input className="" type="checkbox" name="check" id="listcheck" /> Make it private
            </label>
            <div className="d-flex justify-content-center">
              <button onClick={cancelHandler} type="button" className="bookmodal__cancel">Cancel</button>
                <button type="sumbit" className="bookmodal__btn">Create</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}