import React, { Component } from "react";
import './scss/Header.scss';

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="header-text-container">
          <div className="intro-features">
            <div className="header-logo-container">
              <img className="header-logo"></img>
            </div>
            <hr></hr>
            <ul>
              <li>
                프라이빗 예술, 문화 공유 공간
              </li>
              <li>
                야마하 G5 그랜드 피아노
              </li>
              <li>
                홀 내부 울림이 좋아요!
              </li>
              <li>
                23석 규모 + 이동식 의자
              </li>
            </ul>
            <hr></hr>
            소규모 연주홀 대관, 연습실 대여. 소규모음악회, 향상음악회, 하우스콘서트, 동아리연주회, 정기연주회, 제자음악회, 입시평가회, 독주회, 독창회, 리허설, 마스터클래스, 개인레슨, 소모임, 세미나, 워크샵, 방송촬영, 토크콘서트, 작품전시회, 연습실, 공연장
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
