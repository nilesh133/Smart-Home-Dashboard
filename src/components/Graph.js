import React from 'react'
import { BsThreeDots, MdOutlineKeyboardArrowDown, BsFillPrinterFill, AiFillSound, BsFillCloudLightningRainFill, BsLightbulbFill } from "react-icons/all";
import {Bar} from 'react-chartjs-2';
const Graph = () => {
    return (
        <div className="graph">
            <div className="graph_first_line">
                <h4>Energy <span>Saving</span></h4>
                <span><BsThreeDots /></span>
            </div>
            <div className="graph_second_line">
                <span>November<MdOutlineKeyboardArrowDown className="graph_second_line_icon" /></span>
                <span>Device<MdOutlineKeyboardArrowDown className="graph_second_line_icon" /></span>
            </div>
            <div className="graph_part">
                {/* <Bar
                data = {{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]

                }}
                height=  {300}
                width= {400}
                /> */}
            </div>
            <div className="graph_last">
                <div className="graph_last_individual graph_last_air">
                    <span className="graph_last_individual_icons"><BsFillPrinterFill /></span>
                    <div className="graph_last_individual_details">
                        <h4>Air Conditions <span>($216)</span></h4>
                        <div className="graph_last_individual_details_outer_box">
                            <div className="graph_last_individual_details_inner_box">
                                <span></span>
                            </div>
                            <div className="graph_last_individual_details_percentage">
                                70%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="graph_last_individual graph_last_sound">
                    <span className="graph_last_individual_icons"><AiFillSound /></span>
                    <div className="graph_last_individual_details">
                        <h4>Sound Conditions <span>($173)</span></h4>
                        <div className="graph_last_individual_details_outer_box">
                            <div className="graph_last_individual_details_inner_box"><span></span></div>
                            <div className="graph_last_individual_details_percentage">
                                58%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="graph_last_individual graph_last_climate">
                    <span className="graph_last_individual_icons"><BsFillCloudLightningRainFill /></span>
                    <div className="graph_last_individual_details">
                        <h4>Climate <span>($86)</span></h4>
                        <div className="graph_last_individual_details_outer_box">
                            <div className="graph_last_individual_details_inner_box"><span></span></div>
                            <div className="graph_last_individual_details_percentage">
                                30%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="graph_last_individual graph_last_light">
                    <span className="graph_last_individual_icons"><BsLightbulbFill /></span>
                    <div className="graph_last_individual_details">
                        <h4>Light <span>($72)</span></h4>
                        <div className="graph_last_individual_details_outer_box">
                            <div className="graph_last_individual_details_inner_box"><span></span></div>
                            <div className="graph_last_individual_details_percentage">
                                15%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Graph