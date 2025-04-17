import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mainstyles.css";

function Main(props) {
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault(); 
    navigate("/services"); // this is your Services route
  };

  return (
    <>
      <div className={props.cName}>
        {props.mainImg && <img className={props.imgClass} src={props.mainImg} alt="Main" />}

        <div className = {props.textClass}>
          <h1>{props.welcome}</h1>
          <h2>{props.title}</h2>
          
          <h4>{props.features}</h4>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass} onClick={handleButtonClick}>
            {props.btnText}
          </a>
        </div>

        <div className="searchbar-container">
        {props.children} 
      </div>
      
      </div>

      
    </>
  );
}

export default Main;

