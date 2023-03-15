import React, { useEffect, useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import Zoro from "../assets/image/zoro.jpg";
import Loading from "../assets/image/spinner.gif";

function Main() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState();

  const fetchData = async () => {
    let value = await fetch("https://api.quotable.io/random");
    value = await value.json();
    setQuote(value.content);
    setAuthor("~ " + value.author);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
      // console.log("display");
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // let spinner = isLoading ? <img width="50px" src={Loading} alt="" /> : "";
  return (
    <div className="main-background">
      <div className="card">
        <img className="myImg" src={Zoro} alt="" />
        <div className="text">
          <div className="name">Rejens</div>
          {isLoading && <img width="50px" src={Loading} alt="" />}
          {/* {spinner} */}

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
