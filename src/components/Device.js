import React from 'react'
import { BsFillLightbulbFill, FaTemperatureHigh, BsPrinterFill, AiFillSound, HiOutlineDotsCircleHorizontal } from "react-icons/all"
const Device = () => {
    return (
        <div className="device_container">
            <div className = "device_container_heading">
                <h4>My device</h4>
                <span><HiOutlineDotsCircleHorizontal/></span>
            </div>
            <div className = "device">
            <div className="device_single device_light">
                <div className="device_single_first">
                    <h5>OFF</h5>
                    <div className="device_single_first_right">
                        <div className="device_single_first_right_circle"></div>
                    </div>
                </div>
                <div className="device_single_second">
                    <span><BsFillLightbulbFill /></span>
                </div>
                <div className="device_single_third">
                    <h4>Light</h4>
                    <h5>2hr19min</h5>
                </div>
            </div>
            <div className="device_single device_climate">
                <div className="device_single_first">
                    <h5>OFF</h5>
                    <div className="device_single_first_right">
                        <div className="device_single_first_right_circle"></div>
                    </div>
                </div>
                <div className="device_single_second">
                    <span><FaTemperatureHigh /></span>
                </div>
                <div className="device_single_third">
                    <h4>Climate</h4>
                    <h5>3hr13min</h5>
                </div>
            </div>
            <div className="device_single device_ac">
                <div className="device_single_first">
                    <h5>OFF</h5>
                    <div className="device_single_first_right">
                        <div className="device_single_first_right_circle"></div>
                    </div>
                </div>
                <div className="device_single_second">
                    <span><BsPrinterFill /></span>
                </div>
                <div className="device_single_third">
                    <h4>AC</h4>
                    <h5>1hr29min</h5>
                </div>
            </div>
            <div className="device_single device_sound">
                <div className="device_single_first">
                    <h5>OFF</h5>
                    <div className="device_single_first_right">
                        <div className="device_single_first_right_circle"></div>
                    </div>
                </div>
                <div className="device_single_second">
                    <span><AiFillSound /></span>
                </div>
                <div className="device_single_third">
                    <h4>Sound</h4>
                    <h5>4hr02min</h5>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Device
