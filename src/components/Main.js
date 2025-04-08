import "./Mainstyles.css";

function Main(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="main-img" src={props.mainImg} />

        <div className = {props.textClass}>
          <h1>{props.welcome}</h1>
          <h2>{props.title}</h2>
          
          <h4>{props.features}</h4>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;

