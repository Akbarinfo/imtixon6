import React from "react";
import Content from "./Content";
import ContentAdd from "./Header";

export default function Main({
  databaza,
  content,
  setContent,
  wishCate,
  setClist,
  clist,
  save,
  setSave
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
      />
    </main>
  )
}