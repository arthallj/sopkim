import React, { Component } from "react";
import './scss/Rent.scss';

class Rent extends Component {
    render() {
        return (
            <div id="rent">
                <div className="rent-card-container">
                    <div className="rent-card-container-sub">
                        <div className="rent-card-container-child">
                            <img className="rent-logo1" alt="logo1"></img>
                            <div className="rent-card-title">실시간 예약</div>
                            <div className="rent-card-contents">실시간 예약을 통해 원하는 날짜와 시간을 직접 선택하여 대관 일정을 잡을 수 있습니다.  원활한 연락을 위해 반드시 당일 이용하시는 분께서 직접 예약 부탁드립니다.</div>
                        </div>
                        <div className="rent-card-container-child">
                            <img className="rent-logo2" alt="logo2"></img>
                            <div className="rent-card-title">무인 아트홀</div>
                            <div className="rent-card-contents">상주 운영 인원이 없습니다. 이용안내를 숙지하시고 이용하시길 부탁드립니다. 프라이빗한 공간을 원하시는 분에게 추천드립니다.</div>
                        </div>
                    </div>
                    <div className="rent-card-container-sub">
                        <div className="rent-card-container-child">
                            <img className="rent-logo3" alt="logo3"></img>
                            <div className="rent-card-title">시간제 운영</div>
                            <div className="rent-card-contents">30분 단위 시간제로 운영됩니다. 미리 입실하거나 퇴실 시간이 늦어질 경우 추가 요금이 발생합니다.</div>
                        </div>
                        <div className="rent-card-container-child">
                            <img className="rent-logo4" alt="logo4"></img>
                            <div className="rent-card-title">음식물 반입 금지</div>
                            <div className="rent-card-contents">쾌적한 연주공간을 공유하기 위해 음식물 반입은 절대 금지하고 있습니다. 양해 부탁드립니다.</div>
                        </div>
                    </div>
                </div>
                <div className="rent-card-container">
                    <div className="rent-text-title">대관 안내</div>
                    <div className="rent-text1">
                        <ul>
                            <li>
                                최소 예약 시간 2시간
                            </li>
                            <li>
                                월~목: 시간당 5만원
                            </li>
                            <li>
                                금~일/공휴일: 시간당 6만원
                            </li>
                            <li>
                                운영시간: 09~23시
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div className="rent-text2">
                        <ol>
                            <li>
                                예약하기 버튼을 눌러 예약합니다.
                            </li>
                            <li>
                                결제가 완료되면 1~2시간 이내로 이용약관 동의서가 문자로 발송됩니다.
                            </li>
                            <li>
                                “동의 합니다.”  문자로 답장 주셔야 예약이 최종 확정됩니다.
                            </li>
                            <li>
                                이용안내에 따라서 예약일시에 이용하시면 됩니다.
                            </li>
                        </ol>
                        <br></br>
                        <ul>
                            <li>
                                입실 제한 최대 인원은 30명입니다. (연주자 포함)
                            </li>
                            <li>
                                이용일 2일전 취소 환불 100%
                            </li>
                            <li>
                                이용일 1일전 환불 50%, 당일 환불 불가
                            </li>
                        </ul>
                    </div>
                    <div className="rent-book-btn">
                        <a href="http://booking.arthallj.com/" target="_blank" className="rent-btn" role="button" rel="noreferrer">예약하기</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rent;
