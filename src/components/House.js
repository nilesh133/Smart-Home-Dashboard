import React from 'react'
import {IoFingerPrint, BsArrowRightCircleFill} from "react-icons/all";
const House = () => {
    return (
        <div className = "house_container">
            <div className = "house_container_labels">
                <div className = "house_container_labels_left">
                    <span className = "house_container_labels_left_icon"><IoFingerPrint/></span>
                    <div className = "house_container_labels_left_labels">
                        <h3>Control your favorite</h3>
                        <h3>room <span>in-app with a tap</span></h3>
                        <p>Discover our support benefits with one tap</p>
                    </div>
                </div>
                <div className = "house_container_labels_right">
                    <span><BsArrowRightCircleFill/></span>
                </div>
            </div>
        </div>
    )
}

export default House
