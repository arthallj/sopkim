import React, { Component } from "react";
import './scss/Footer.scss';
import { faPenSquare, } from "@fortawesome/free-solid-svg-icons";
import { faYoutubeSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <footer id='footer'>
        <div className="footer-container">
          <div className="footer-text-title">문의 하기</div>
          <div className="footer-text1"><li><a href="mailto:staff@arthallj.com">staff@arthallj.com</a></li><li><a href="tel:010-4947-7748">010-4947-7748</a></li></div>
        </div>
        <div className="footer-container-sns">
          <div className="footer-sns-btn">
            <a href="https://blog.naver.com/arthall_j" target="_blank" rel="noreferrer" role="button">
              <FontAwesomeIcon icon={faPenSquare} />
            </a>
          </div>
          <div className="footer-sns-btn">
            <a href="https://www.youtube.com/channel/UCji2Fwva72nVuYewD7MFWPg" target="_blank" rel="noreferrer" role="button">
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          </div>
          <div className="footer-sns-btn">
            <a href="https://www.instagram.com/arthallj/" target="_blank" rel="noreferrer" role="button">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </div>
        </div>
        <div className="footer-container2">
          <div className="footer-text2">
            제이센틱 유한책임회사 Jthentic LLC. | since 2017 | 사업자등록번호 373-88-00814 | 통신판매업신고 제2018-서울송파0268호| 공연장등록번호 2019-000001 | 계좌번호 신한은행 140-011-743707 | staff@arthallj.com
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
