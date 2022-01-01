import React from 'react'
import { BsThreeDots, BsCloudRainHeavyFill, IoThunderstormSharp, MdKeyboardArrowDown } from "react-icons/all";
const Weather = () => {
    return (
        <div className="weather">
            <div className="weather_date">
                <h4>Today(02.11.21)</h4>
                <span><BsThreeDots /></span>
            </div>
            <div className = "weather_today">
                <div className = "weather_today_image">

                </div>
                <div className = "weather_today_details">
                    <h3>23<span>/13</span></h3>
                    <div className = "weather_today_details_line"></div>
                    <div className = "weather_today_details_text">A sun with a cool</div>
                </div>
            </div>
            <div className="weather_upcoming">
                <div className="weather_upcoming_single" style ={{paddingTop: 0}}>
                    <div className="weather_upcoming_single_left">
                        <span><BsCloudRainHeavyFill /></span>
                        <div className="weather_upcoming_single_left_day">
                            <h5>Tomorrow</h5>
                            <h4>Rain</h4>
                        </div>
                    </div>
                    <div className="weather_upcoming_single_right">
                        <h4>20<span>/18</span></h4>
                    </div>
                </div>
                <div className="weather_upcoming_single">
                    <div className="weather_upcoming_single_left">
                        <span><IoThunderstormSharp /></span>
                        <div className="weather_upcoming_single_left_day">
                            <h5>Wednesday</h5>
                            <h4>Storm</h4>
                        </div>
                    </div>
                    <div className="weather_upcoming_single_right">
                        <h4>16<span>/10</span></h4>
                    </div>
                </div>
                <div className="weather_upcoming_single">
                    <div className="weather_upcoming_single_left">
                        <span><BsCloudRainHeavyFill /></span>
                        <div className="weather_upcoming_single_left_day">
                            <h5>Thursday</h5>
                            <h4>Rain</h4>
                        </div>
                    </div>
                    <div className="weather_upcoming_single_right">
                        <h4>17<span>/13</span></h4>
                    </div>
                </div>
                <div className = "weather_down_arrow">
                    <MdKeyboardArrowDown style = {{color: "white", marginLeft: "10rem", fontSize: "1.7rem"}}/>
                </div>
            </div>
        </div>
    )
}

export default Weather
