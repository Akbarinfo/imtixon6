import { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Publish from './components/addPublish';
import Bookmark from './components/Bookmark';
import BookmarkSaved from './components/Bookmark/Bookmark';
import { data } from './components/data/data';
import Home from './components/Home';
import ContentInfo from './components/Main/Content/Content';
import Note from './components/Notifi';
import SignUp from './components/Sign/Signup';
import Story from './components/Story';


function App() {
  let [name, setName] = useState("Default")
  let [lastName, setLastName] = useState()
  let [phone, setPhone] = useState()
  let [mail, setMail] = useState("Default@mail.ru")
  let [pass, setPass] = useState()

  //saved
  let [wishlist, setWishlist] = useState([])

  //Create List Modal
  let [clist, setClist] = useState(false)

  //saved
  let [wishCate2, setWishCate2] = useState([])
  let [wishCate, setWishCate] = useState([])

  //save
  let [save, setSave] = useState([])

  //data
  let [dataa, setData] = useState([])

  let [story, setStory] = useState([])
  let [newStory, setNewStory] = useState('')

  ///
  let [dataBaza, setDataBaza] = useState(data)
  let [content, setContent] = useState(dataBaza)

  console.log(content)

  return(
    <>
      <Routes>
        <Route path='/' element={<SignUp
          setName={setName}
          setLastName={setLastName}
          setPhone={setPhone}
          setMail={setMail}
          setPass={setPass}
        />} />
        <Route path="/home" element={<Home
          dataBaza={dataBaza}
          content={content}
          setContent={setContent}
          name={name}
          mail={mail}
          wishCate={wishCate}
          setClist={setClist}
          clist={clist}
          save={save}
          setSave={setSave}
          setWishCate={setWishCate}
          setWishCate2={setWishCate2}
          wishCate2={wishCate2}
        />} />
        <Route path="/list" element={<Bookmark
          setClist={setClist}
          clist={clist}
          setWishCate={setWishCate}
          wishCate={wishCate}
          setWishCate2={setWishCate2}
          wishCate2={wishCate2}
        />} />
          <Route path="/cinfo" element={<ContentInfo />} />
          <Route path="/info/:id" element={<ContentInfo
            content={content}
            name={name}

          />} />
          <Route path="/sv" element={<BookmarkSaved
            save={save}
            setSave={setSave}
          />} />
          <Route path='/notifi' element={<Note />} />
          <Route path='/story' element={<Story
            story={story}
          />} />
          <Route path='/addpublish' element={<Publish
            data={dataa}
            setData={setData}
            story={story}
            setStory={setStory}
            newStory={newStory}
            setNewStory={setNewStory}
            name={name}
            content={content}
            setContent={setContent}
        />} />
      </Routes>
    </>

  )}

export default App;
