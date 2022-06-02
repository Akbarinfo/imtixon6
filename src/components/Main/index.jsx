import React from "react";
import Content from "./Content";
import ContentAdd from "./Category";

export default function Main({
  databaza,
  content,
  setContent,
  wishCate,
  setClist,
  setWishCate,
  clist,
  save,
  setSave,
  setWishCate2,
  wishCate2,
}) {
  return(
    <main>
      <ContentAdd
        databaza={databaza}
        content={content}
        setContent={setContent}
      />
      <Content
        databaza={databaza}
        content={content}
        wishCate={wishCate}
        setClist={setClist}
        clist={clist}
        save={save}
        setSave={setSave}
        setWishCate2={setWishCate2}
        wishCate2={wishCate2}
        setWishCate={setWishCate}
      />
    </main>
  )
}