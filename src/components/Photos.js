import React, { Component } from "react";
import './scss/Photos.scss';

class Photos extends Component {
    render() {
        return (
            <div id="photos">
                <div className="photo-container">
                    <img className="img1" alt="img1"></img>
                    <img className="img2" alt="img2"></img>
                    <img className="img3" alt="img3"></img>
                </div>
                <div className="photo-container">
                    <img className="img4" alt="img4"></img>
                    <img className="img5" alt="img5"></img>
                    <img className="img6" alt="img6"></img>
                </div>
                <div className="photo-container">
                    <img className="img7" alt="img7"></img>
                    <img className="img8" alt="img8"></img>
                </div>
                <div className="photo-container">
                    <img className="img9" alt="img9"></img>
                    <img className="img10" alt="img10"></img>
                    <img className="img11" alt="img11"></img>
                </div>
                <div className="photo-container">
                    <img className="img12" alt="img12"></img>
                    <img className="img13" alt="img13"></img>
                </div>
            </div>
        )
    }
}


export default Photos;
