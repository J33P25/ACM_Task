import { Component } from "react";
import "./navstyles.css";
import logo from '../assets/logo.png';
import { Menuitems } from "./Menuitems";



class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" style={{ height: '175px' , cursor: 'pointer' }} />
        
        <div className="menu-items" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>


        <ul className={`nav-menu ${this.state.clicked ? "active" : ""}`}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>{item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
