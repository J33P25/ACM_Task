import "./Mainstyles.css";

function Main(props) {
  return (
    <>
      <div className={props.cName}>
        {props.mainImg && <img className={props.imgClass} src={props.mainImg} alt="Main" />}

        <div className = {props.textClass}>
          <h1>{props.welcome}</h1>
          <h2>{props.title}</h2>
          
          <h4>{props.features}</h4>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
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

