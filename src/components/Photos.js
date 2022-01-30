import React, { Component } from "react";
import './scss/Photos.scss';

class Photos extends Component {
    render() {
        return (
            <div id="photos">
                <div className="photo-container">
                    <img className="img1"></img>
                    <img className="img2"></img>
                    <img className="img3"></img>
                </div>
                <div className="photo-container">
                    <img className="img4"></img>
                    <img className="img5"></img>
                    <img className="img6"></img>
                </div>
                <div className="photo-container">
                    <img className="img7"></img>
                    <img className="img8"></img>
                </div>
                <div className="photo-container">
                    <img className="img9"></img>
                    <img className="img10"></img>
                    <img className="img11"></img>
                </div>
                <div className="photo-container">
                    <img className="img12"></img>
                    <img className="img13"></img>
                </div>
            </div>
        )
    }
}


export default Photos;
