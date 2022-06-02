import React from "react";
import Main from "../Main";
import EndPart from "../EndPart";
import Navbar from "../Navbar";

export default function Home({
    wishCate,
    setWishCate,
    setWishCate2,
    wishCate2,
    clist,
    setClist,
    save,
    setSave,
    name,
    mail,
    dataBaza,
    content,
    setContent
  }) {

  return(
    <div className='container d-flex justify-content-between'>
      <Navbar
        name={name}
        mail={mail}
      />
      <Main
        databaza={dataBaza}
        content={content}
        setContent={setContent}
        wishCate={wishCate}
        setClist={setClist}
        clist={clist}
        save={save}
        setSave={setSave}
        setWishCate2={setWishCate2}
        wishCate2={wishCate2}
        setWishCate={setWishCate}
      />
      <EndPart />
    </div>
  )
}