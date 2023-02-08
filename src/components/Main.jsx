import React from "react";
import Myself from "../assets/image/myself.png";
import { FaBeer } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Zoro from "../assets/image/zoro.jpg";

function Main() {
  return (
    <div className="main-background">
      <div className="card">
        <img className="myImg" src={Zoro} alt="" />
        <div className="text">
          <div className="name">Rejens</div>
          <div className="description">
            The darker the night, the brighter the stars
          </div>
          <div className="links">
            <a
              href="https://www.facebook.com/rejens.rayamajhi.73/"
              target="_blank"
            >
              {" "}
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
