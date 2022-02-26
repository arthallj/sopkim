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
          <div className="footer-text-title">History</div>
          <div className="footer-text1">
            2022 사르모레 오페라 연구회 2기<br></br>
            2022 2월 제이센틱 유한책임회사 법인명 변경<br></br>
            2021 사르모레 오페라 연구회 1기<br></br>
            2021 살롱음악회 2회 기획 공연<br></br>
            2020 스토리텔링 오페라 2회 기획 공연<br></br>
            2019 스토리텔링 오페라 2회 기획 공연<br></br>
            2019 살롱음악회 7회 기획 공연<br></br>
            2018 스토리텔링 오페라 3회 기획 공연<br></br>
            2018 살롱음악회 10회 기획 공연<br></br>
            2017 살롱음악회 12회 기획 공연<br></br>
            2017 4월 아트홀제이 유한책임회사 법인 설립<br></br>
            2016 살롱음악회 6회 기획 공연<br></br>
            2016 3월 아트홀제이 공연장 착공
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-text-title">Contact us</div>
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
