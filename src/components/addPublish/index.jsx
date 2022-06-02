import React, { useState } from "react";
import { Link } from "react-router-dom";
//logo
import logo from '../../assets/images/logo.png'

let count = 731;

export default function Publish({
  story,
  setStory,
  newStory,
  setNewStory,
  name,
  content,
  setContent

}) {

  let [title, setTitle] = useState('')
  let [text, setText] = useState('')

  let textAreaHandle = (e) =>{
    setNewStory(e.target.value)
    setText(e.target.value)
  }

  let titleHandler = (e) => {
    setTitle(e.target.value)
  }

  let random = Math.floor((Math.random() * 100) + 1)

  let publishHandler = () =>{
    setStory([
      ...story,
      {
        id: +count,
        name: name,
        title: title,
        text: text,
      }
    ])
    setContent([
      {
        id: +count,
        name: name,
        title: title,
        text: text,
        desc: `
        Write down your habits and make goals in Twos ✌️ (CLICK HERE)
        `,
        data: '',
        type: "Java",
        read: "5 min read",
        avatar: 'https://picsum.photos/id/23/100',
        img: `https://picsum.photos/id/${random}/500/400/`,
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
          {
            id: "2",
            userAvatar:
              "https://miro.medium.com/fit/c/40/40/1*40uVS-9JquYZTHKx0YVGvQ.jpeg",
            commentName: "Soungbogbo Omotayo",
            commentDate: "29 days ago",
            commentText: `I’m happy for you 👏🏻👏🏻
            Tapping from your grace would help when I start applying for jobs in UX 😫😫😫`,
            commentClub: "1",
          },
      ],
        replayArr: [
          {
            id: "1",
            userAvatar:
            "https://miro.medium.com/fit/c/40/40/1*KK9NopjghPSVTnr0YlLOrw@2x.jpeg",
            commentName: "John",
            commentDate: "1 day ago",
            commentText:
              "Have you ever tried improving yourself, but ended up being lazy and tired again?",
            commentClub: "36",
          }
        ]
      },
      ...content
    ])
    setNewStory('')
    count++

  }

  return(
    <section className='publish'>
      <div className='publish__main'>
        <div className='publish__header'>
          <Link to='/home'>
          <img className='publish__logo' src={logo} alt="logo" />
          </Link>
          <p className='publish__desc'>Draft</p>
        </div>
        <div className='publish__info'>
            <Link to='/story'>
            <button onClick={publishHandler} className='publish__link'>Publish</button>
            </Link>
            <button className='publish__dotbtn'>
              <i className='bx bx-dots-horizontal-rounded'></i>
            </button>
            <button className='publish__bell'><i className='bx bx-bell'></i></button>
            <img className='publish__user' src="https://picsum.photos/id/23/60" alt="user" />
        </div>
      </div>

      <form className='publish__inputbox'>
          <input onChange={titleHandler} className="publish__input" type="text" placeholder="Title" />
          <textarea className='publish__inputtext' onChange={textAreaHandle} placeholder='Text' cols="90" rows="100"></textarea>
          <button className="publish__plus">
            <i className='bx bx-plus-circle'></i>
          </button>
      </form>
    </section>
  )
}