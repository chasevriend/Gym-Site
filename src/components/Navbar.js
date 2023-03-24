import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="nav">
            <div>
            <h1 id="name">CHURCH OF IRON</h1>
            </div>
            <div className="btns">
                <button id="free">FREE PASS</button>
                <a href="/join"><button id="join">JOIN NOW</button></a>
            {/* </div> */}
            {/* create hamburger menu */}
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" id="hamburger"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
            </div>
            {/* <div className="hamburger">
                <Link to="/">GYM HOME</Link>
                <Link to="/amenities">AMENITIES</Link>
                <Link to="/schedule">SCHEDULE</Link>
                <Link to="/join">JOIN NOW</Link>
            </div> */}
        </div>
    )
}

export default Navbar;