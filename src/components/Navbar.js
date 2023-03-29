import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" id="logo" href="/">CHURCH OF IRON</a>
            <div class="navBtns">
                <button class="navBtn btn-danger" id="freeBtn">FREE PASS</button>
                <button class="navBtn btn-dark" id="joinBtn"><a href="/join">JOIN NOW</a></button>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup navItems">
                <div class="navbar-nav" id="navItems">
                <a class="nav-item nav-link active" href="/">HOME <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="/amenities">AMENITIES</a>
                <a class="nav-item nav-link" href="/schedule">CLASS SCHEDULE</a>
                <a class="nav-item nav-link" href="/join">JOIN NOW</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;