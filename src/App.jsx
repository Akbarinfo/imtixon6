import { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Bookmark from './components/Bookmark';
import BookmarkSaved from './components/Bookmark/Bookmark';
import Home from './components/Home';
import Left from './components/Left/';
import Main from './components/Main';
import ContentInfo from './components/Main/Content/Content';
import SignIn from './components/Sign/Signin';
import SignUp from './components/Sign/Signup';

function App() {
  let [name, setName] = useState()
  let [lastName, setLastName] = useState()
  let [phone, setPhone] = useState()
  let [mail, setMail] = useState()
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
          wishCate={wishCate}
          setClist={setClist}
          clist={clist}
          save={save}
          setSave={setSave}
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
          <Route path="/info/:id" element={<ContentInfo />} />
          <Route path="/sv" element={<BookmarkSaved
            save={save}
            setSave={setSave}
          />} />
      </Routes>
    </>

  )}

export default App;
