import React from 'react'
import { BsFillPlayFill, BiSkipPrevious, BiSkipNext } from "react-icons/all";
const Music = () => {
    return (
        <div className="music">
            <div className="music_first">
                <div className="music_first_left">
                    <div className="music_first_left_img">
                    </div>
                    <div className="music_first_left_details">
                        <h4>Tequila Shots</h4>
                        <h5>Kid Cudi</h5>
                    </div>
                </div>
                <div className="music_first_right">
                    <span className = "music_first_right_prevnextbtn"><i class="fas fa-fast-backward"></i></span>
                    <span className = "music_first_right_playbtn"><i class="fas fa-play"></i></span>
                    <span className = "music_first_right_prevnextbtn"><i class="fas fa-fast-forward"></i></span>
                </div>
            </div>
            <div className = "music_second">
                <div className = "music_second_outer">
                    <div className = "music_second_inner">
                        <div className = "music_second_inner_circle"></div>
                    </div>
                </div>
                <div className = "music_second_timing">
                    <h5>02:16</h5>
                    <h5>04:17</h5>
                </div>
            </div>
        </div>
    )
}

export default Music
