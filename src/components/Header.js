import React, { Component } from "react";
import './scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="header-back-container">
          <div className="header-text-container">
            <div className="header-text-title1">
              Soprano
              Minjung Kim
            </div>
            President of <a href="https://jthentic.com" target="_blank" rel="noreferrer">Jthentic LLC.</a><br></br>
            <br></br>
            <div className="header-text-title2">
              소프라노 김민정
            </div>
            <a href="https://jthentic.com" target="_blank" rel="noreferrer">제이센틱 유한책임회사</a> 대표 <br></br>
            이태리 코모 베르디 국립음악원 졸업 <br></br>
            국립오페라단 아카데미 수료 <br></br>
            서울대학교 성악과 졸업 <br></br>
            <a href="mailto:staff@arthallj.com">E-MAIL</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
