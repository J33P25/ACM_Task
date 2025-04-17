import { Component } from "react";
import "./navstyles.css";
import logo from '../assets/logo.png';
import { Menuitems } from "./Menuitems";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    clicked: false,
    username: null
  };

  componentDidMount() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.setState({ username: storedUsername });
    }
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLogout = () => {
    localStorage.removeItem('username');
    window.location.href = '/login'; // redirect to login
  };

  render() {
    const { clicked, username } = this.state;

    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" style={{ height: '175px' }} />

        <div className="menu-items" onClick={this.handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={`nav-menu ${clicked ? "active" : ""}`}>
          {Menuitems.map((item, index) => {
            // Hide "Log In/Sign Up" if user is logged in
            if (item.title === "Log In/Sign Up" && username) return null;

            return (
              <li key={index}>
                <Link className={item.cName} to={item.link}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}

          {username && (
            <>
              <li className="greeting">Hi, {username}</li>
              <li>
                <button className="logout-btn" onClick={this.handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
