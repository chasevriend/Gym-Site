//Schedule page
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Amenities() {
    return (
        <div>
            <Navbar />
            <div id="contentAmenities">
                <div id="amenities">
                    <h1>AMENITIES</h1>
                    <p>This gym includes:</p>
                    <ul>
                        <li>Pool</li>
                        <li>Group Exercise</li>
                        <li>Apparel Shop</li>
                        <li>Sauna</li>
                        <li>Resistance Machines</li>
                        <li>Nutrition Counseling</li>
                        <li>Free Weights</li>
                        <li>Cardio Equipment</li>
                        <li>Personal Training</li>
                        <li>Olympic Platforms</li>
                        <li>Cycling Room</li>
                        <li>Functional Training</li>
                        <li>Locker Rooms</li>
                        <li>Turf</li>
                    </ul>
                </div>
                <div id="photoAmenities">

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Amenities;