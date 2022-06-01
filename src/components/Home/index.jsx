import React, { useState } from "react";
import { data } from "../data/data";
import Left from "../Navbar";
import Main from "../Main";

export default function Home({wishCate, setClist, clist, save, setSave}) {

  let [dataBaza, setDataBaza] = useState(data)
  let [content, setContent] = useState(dataBaza)

  return(
    <div className='container'>
      <div className='d-flex'>
        <Left />
        <Main
          databaza={dataBaza}
          content={content}
          setContent={setContent}
          wishCate={wishCate}
          setClist={setClist}
          clist={clist}
          save={save}
          setSave={setSave}
        />
      </div>
    </div>
  )
}