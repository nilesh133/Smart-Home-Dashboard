import React from 'react'
import {AiFillClockCircle, AiFillFire, IoIosFlower} from "react-icons/all"
const Wheel = () => {
    return (
        <div className = "wheel">
            <div className = "wheel_first">
                <h4>Temperature</h4>
                <div className = "wheel_first_icons">
                    <AiFillFire className = "wheel_first_icons_first"/>
                    <IoIosFlower className = "wheel_first_icons_second"/>
                </div>
            </div>
            <div className = "wheel_temp">
                <div className = "wheel_temp_inner">
                    {/* <div className = "wheel_temp_inner_details">
                    <h4>20<sup>o</sup></h4>
                    <h5>Temperature</h5>
                    </div>   */}
                </div>
            </div>
            {/* <div className = "wheel_timing">
                <h4 className = "wheel_timing_detail">10:30 PM</h4>
                <h4>to</h4>
                <h4 className = "wheel_timing_detail">02:30 PM</h4>
            </div> */}
            {/* <div className = "wheel_last">
                <div className = "wheel_last_num">
                    <h4>69m<sup>2</sup></h4>
                    <h5>First floor</h5>
                </div>
                <div className = "wheel_last_border"></div>
                <div className = "wheel_last_num">
                    <h4>46m</h4>
                    <h5>Time</h5>
                </div>
            </div> */}
        </div>
    )
}

export default Wheel
