import React from 'react';
import {AiFillDingtalkCircle, BsFillEyeFill, GiAbstract013, GrBitcoin, SiApacheopenoffice, WiMoonAltWaningCrescent4, TiChartArea} from "react-icons/all"

const Navbar = () => {
    return (
        <div className = "navbar">
            <span style = {{color: "white", fontSize: "1.5rem", marginTop: "1.5rem"}}><AiFillDingtalkCircle class = "navbar__glow__icon"/></span>
            <span style = {{color: "white", fontSize: "1.5rem", marginTop: "1.5rem"}}><BsFillEyeFill/></span>
            <span><GiAbstract013 style = {{color: "white", fontSize: "1.5rem", marginTop: "1.5rem"}}/></span>
            <span style = {{color: "white", fontSize: "1.5rem", marginTop: "1.5rem"}}><GrBitcoin/></span>
            <div className = "navbar__bottom">
                <SiApacheopenoffice style = {{color: "white", fontSize: "1.5rem", marginTop: "1rem", padding: "0.5rem"}}/>
                <WiMoonAltWaningCrescent4 style = {{color: "white", fontSize: "1.5rem", marginTop: "1rem", padding: "0.5rem"}}/>
                <TiChartArea style = {{color: "white", fontSize: "1.5rem", marginTop: "1.5rem", padding: "0.5rem"}}/>
            </div>
        </div>
    )
}

export default Navbar
