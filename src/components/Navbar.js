import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="nav">
            <h1>CHURCH OF IRON</h1>
            <a href="/"><button>FREE PASS</button></a>
            <a href="/join"><button>JOIN NOW</button></a>
            {/* create hamburger menu */}
            <div className="hamburger">
                <Link to="/">GYM HOME</Link>
                <Link to="/amenities">AMENITIES</Link>
                <Link to="/schedule">SCHEDULE</Link>
                <Link to="/join">JOIN NOW</Link>
            </div>
        </div>
    )
}

export default Navbar;