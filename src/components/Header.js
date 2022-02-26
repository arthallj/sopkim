import React, { Component } from "react";
import './scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="header-text-container">
          <div className="header-logo-container">
            <img className="header-logo" alt="아트홀제이"></img>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
