import React, { Component } from "react";
import './scss/Footer.scss';
import { faPenSquare, } from "@fortawesome/free-solid-svg-icons";
import { faYoutubeSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <footer id='footer'>
        <div className="footer-container-sns">
          <div className="footer-sns-btn">
            <a href="http://naver.me/x5Wk5jjh" target="_blank" rel="noreferrer" role="button">
              <FontAwesomeIcon icon={faPenSquare} />
            </a>
          </div>
          <div className="footer-sns-btn">
            <a href="https://www.youtube.com/user/ladysong1111" target="_blank" rel="noreferrer" role="button">
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          </div>
          <div className="footer-sns-btn">
            <a href="https://www.instagram.com/soprano_minjung_kim" target="_blank" rel="noreferrer" role="button">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </div>
        </div>
        <div className="footer-container2">
          <div className="footer-text2">
            소프라노 김민정 | 공식홈페이지
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
