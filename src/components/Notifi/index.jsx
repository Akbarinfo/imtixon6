import React from "react";
import EndPart from "../EndPart";
import Navbar from "../Navbar";

export default function Notifi() {
  return (
    <div className="d-flex justify-content-between">
      <Navbar />
      <section className="notifi">
        <h1 className="notifi__title">Notifications</h1>
        <div className="notifi__box">
          <p className="notifi__text">All</p>
          <p className="notifi__texting">Responses</p>
        </div>
        <div className="notifi__inner">
          <p className="notifi__texting">You're all caught up.</p>
          <p className="notifi__stat">Your stats</p>
        </div>
      </section>
      <EndPart />
    </div>
  );
}
