import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Publish({data, setData}) {

  let [input, setInput] = useState('')

  let [count, setCount] = useState(1)

  let inputHandler = (e) => {
    setInput(e.target.value)
    if(e.keyCode === 13) {
      console.log("ishladi")
      setCount(count+1)
    }
    console.log(e.target.value)
  }

  let addPublishHandler = () => {
    setData([
      ...data, {
        id: 1,
        name: "Akbarali",
        title: input,
        text: `
        Write down your habits and make goals in Twos ✌️ (CLICK HERE)
        1. Waking up and going to bed early
        I’ve been waking up around 5 am and going to bed around 9 pm for the past 6 years.
        There are no distractions early in the morning and going to bed early keeps you out of trouble.

        “Early to bed and early to rise makes a man healthy, wealthy, and wise.” ― Benjamin Franklin.

        “Go to bed early and wake up early. The morning hours are good.” ― Jeff Bezos
        `,
        desc: `
        Write down your habits and make goals in Twos ✌️ (CLICK HERE)
        1. Waking up and going to bed early
        I’ve been waking up around 5 am and going to bed around 9 pm for the past 6 years.
        `,
        data: 'May 18',
        type: "Backend",
        read: "5 min read",
        avatar: 'https://picsum.photos/id/23/100',
        img: 'https://picsum.photos/id/23/100',
        like: "132",
          comment: "9",
          commentArr: [
            {
              id: "1",
              userAvatar:
                "https://miro.medium.com/fit/c/40/40/1*KK9NopjghPSVTnr0YlLOrw@2x.jpeg",
              commentName: "MXM",
              commentDate: "25 days ago",
              commentText:
                "I have a PhD in Cognitive Psychology with a specialty area of HCI and over 30 years of experience in the field we now call UX. I have been targeted for ageist layoffs twice in my 50s. In my last job search 3 years ago, I applied to over 100 jobs",
              commentClub: "36",
            },
        ],
      }
    ])
    console.log(data)
  }

  console.log(count)

  return(
    <div className='publish'>
      <div className='publish__main'>
        <div className='publish__header'>
          <Link to='/home'>
          <img className='publish__logo' src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="logo" />
          </Link>
          <p className='publish__desc'>Draft</p>
        </div>
        <div className='publish__info'>
            <button onClick={addPublishHandler} className='publish__link'>Publish</button>
            <button className='publish__dots'>
              <i className='bx bx-dots-horizontal-rounded' ></i>
            </button>
            <button className='publish__bell'><i className='bx bx-bell' ></i></button>
            <img className='publish__user' src="https://picsum.photos/id/23/60" alt="user" />
        </div>
      </div>

      <form className='publish__inputbox'>
        <div className="publish__boxs">
          <textarea className='publish__inputtext' onKeyUp={inputHandler} placeholder='Text' cols="90" rows="100"></textarea>
          <button className="publish__plus">
            <i class='bx bx-plus-circle'></i>
          </button>
        </div>

      </form>
    </div>
  )
}