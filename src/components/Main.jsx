import React, { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import Zoro from "../assets/image/zoro.jpg";

function Main() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    (async function fetchData() {
      let value = await fetch("https://api.quotable.io/random");
      value = await value.json();

      setQuote(value.content);
      setAuthor("~ " + value.author);
    })();
  }, []);

  return (
    <div className="main-background">
      <div className="card">
        <img className="myImg" src={Zoro} alt="" />
        <div className="text">
          <div className="name">Rejens</div>
          <div className="description">{quote}</div>
          <div className="author">{author}</div>
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
