import React from "react";
import Navbar from "../components/Navbar";
import GuestPassForm from "../components/Form"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="content">
        <Navbar />
            <div className="banner">
                {/* add big bannner image here */}
            </div>
            <div className="about">
                <h2>ABOUT CHURCH OF IRON, HUNTINGTON BEACH</h2>
                <p>Welcome to the best gym in all of Orange County. This gym is well-equipped with top notch classes, Olympic platforms,
                Weight area, Cardio, Outdoor pool, Functional Turf with slid lanes but of course we always strive for the best.</p>
                <h2>AMENITIES</h2>
                <ul>
                {/* add svgs here */}
                    <li>Pool</li>
                    <li>Group Exercise</li>
                    <li>Apparel Shop</li>
                    <li>Cardio Equipment</li>
                    <li>Personal Training</li>
                    <li><Link to="/amenities">See More</Link></li>
                </ul>
                <h2>Gym Photos</h2>
                {/* add photos of gym here */}
            </div>
            <div className="contact-info">
                <h2>CONTACT INFO</h2>
                {/* add svgs here */}
                <p>12345 Beach Blvd. Huntington Beach, CA 92649</p>
                <p>(714) 123-4567</p>
                <p>huntingtonbeachgm@churchofiron.com</p>
                {/* <p><a href="#">Contact Us</a></p> */}
                <h2>HOURS</h2>
                {/* add svg button that lowers and shows hours for all days of week */}
                <p>Open Now: 6AM - 11PM</p>
                <div className="hours">
                    <p className="weekday-hours">Weekdays: 6:00AM - 11:00PM</p>
                    <p className="weekend-hours">Weekends: 7:00AM - 7:00PM</p>
                </div>
                <h2>CONNECT WITH OUR COMMUNITY</h2>
                {/* add svgs for socials here: facebook, twitter, insta, youtube */}
            </div>
            <GuestPassForm />
            <Footer />
        </div>
    );
}

export default Home;