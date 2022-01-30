import React, { Component } from "react";
import './scss/Location.scss';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Location extends Component {
    render() {
        return (
            <div id="location">
                <div className="location-container">
                    <img className="map-image"></img>
                    <div className="location-container-sub">
                        <div className="location-map-btn-container">
                            <a href="http://naver.me/F5u3d1Oe" target="_blank" className="map-btn" role="button">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                네이버지도
                            </a>
                        </div>
                        <div className="location-map-btn-container">
                            <a href="http://kko.to/B7atex_0p" target="_blank" className="map-btn" role="button">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                카카오지도
                            </a>
                        </div>
                    </div>
                </div>
                <div className="location-container">
                    <div className="loc-text-title1">위치 안내</div>
                    <div className="loc-text1">
                        서울특별시 송파구 위례성대로 18 (방이동 45-2) 금복빌딩 지하1층
                    </div>
                    <div className="loc-text-title2">지하철</div>
                    <div className="loc-text1">
                        <span style={{ color: '#bd9f00' }}>9호선</span> 한성백제역 <strong>1번</strong> 출구 1분<br></br><span style={{ color: '#dc4b88' }}>8호선</span> 몽촌토성역 <strong>2번</strong> 출구 2분
                    </div>
                    <div className="loc-text-title2">버스</div>
                    <div className="loc-text1">
                        30, 30-5, 330, 340, 3412, 3413
                    </div>
                    <div className="loc-text-title2">주차</div>
                    <div className="loc-text1">
                        1. 건물 내 주차 - 시간당 2천원
                        <br></br>2. 건물 앞 노상 공영주차장 – 5분당 250원 (9~21시, 시간외 무료)
                        <br></br>3. 올림픽 공원 남4문 주차장 – 최초60분 1,000원 추가 10분당 500원
                    </div>
                </div>
            </div>
        );
    }
}

export default Location;
