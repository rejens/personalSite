import React from "react";
import Myself from "../assets/image/myself.png";

function Main() {
  return (
    <div className="main-background">
      <div className="card">
        <img
          className="myImg"
          src="https://i.pinimg.com/736x/44/d4/64/44d464090c6de8811959fa793bd73d98.jpg"
          alt=""
        />
        <div className="text">
          <div className="name">Rejens</div>
          <div className="description">
            The darker the night, the brighter the stars
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
