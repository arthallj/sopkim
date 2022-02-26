import React, { Component } from "react";
import './scss/Rent.scss';

class Rent extends Component {
    render() {
        return (
            <div id="rent">
                <div className="rent-card-container">
                    <div className="rent-card-logo-container">
                        <img className="rent-logo1" alt="logo1"></img>
                    </div>
                    <div className="rent-card-contents"></div>
                </div>
                <div className="rent-card-container">
                    <div className="rent-card-logo-container">
                        <img className="rent-logo2" alt="logo2"></img>
                    </div>
                    <div className="rent-card-contents">
                        <li>프라이빗 예술, 문화 공유 공간</li>
                        <li>야마하 G5 그랜드 피아노</li>
                        <li>홀 내부 울림이 좋아요!</li>
                        <li>23석 규모 + 이동식 의자</li>

                        소규모 연주홀 대관, 연습실 대여. 소규모음악회, 향상음악회, 하우스콘서트, 동아리연주회, 정기연주회, 제자음악회, 입시평가회, 독주회, 독창회, 리허설, 마스터클래스, 개인레슨, 소모임, 세미나, 워크샵, 방송촬영, 토크콘서트, 작품전시회, 연습실, 공연장
                    </div>

                </div>
                <div className="rent-card-container">
                    <div className="rent-card-logo-container">
                        <img className="rent-logo3" alt="logo3"></img>
                    </div>
                    <div className="rent-card-contents">사르모레 오페라 연구회는 이탈리아 본토 오페라 감성을 추구합니다. 선발된 성실하고 의욕 있는 청년 성악가들이 오페라를 함께 공부하고 직접 공연하게 됩니다.
                        오페라를 하고 싶지만 아직 기회가 없었던 성악유망주들을 찾습니다.
                        나중에 큰 무대에 서게 될 여러분,
                        오페라 한 작품을 마스터 하고 싶은 여러분,
                        도전하세요!
                    </div>
                </div>
                <div className="rent-card-container">
                    <div className="rent-card-logo-container">
                        <img className="rent-logo4" alt="logo4"></img>
                    </div>
                    <div className="rent-card-contents">아트홀제이는 총23석 규모의 아담한 공연장으로서, 관객과 더 가까이에서 호흡하고 소통하는 소극장입니다.
                        피아노 반주로 오페라가 진행되며 소극장 특성 상 오페라 배우들 한 명 한 명의 표정에 더욱 집중하게 됩니다. 원작 오페라 극 전개상 지루할 수 있는 부분을 스토리텔링으로 쉽고 빠르게 진행시켜 관객의 이해도가 높으며
                        배우, 관객 모두가 더욱 만족하는 오페라 공연입니다.
                    </div>

                </div>
            </div>
        );
    }
}

export default Rent;
