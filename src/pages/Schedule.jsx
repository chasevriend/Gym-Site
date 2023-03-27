//Schedule page
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GuestPassForm from "../components/Form";

function Schedule() {
    return (
        <div>
            <Navbar />
            <div id="contentSchedule">
                <div id="aboutSchedule">
                    <h2>FITNESS CLASSES</h2>
                    <p>Group exercise classes are a great way to make sure you don't fall into a fitness pickle.
                    Whether you want classes for weight loss, building muscle, or building cardio output, our gym offers something for 
                    everyone. Our certified instructors keep the energy level high so your workout is over before you know it! You'll leave
                    stress behind at every fitness class and walk out knowing you're one step closer to your goals.</p>
                </div>
                <div id="classes">
                    {/* make these all links for the specific class in the modals bar */}
                    <p>INDOOR CYCLING</p>
                    <p>CADIO CLASSES</p>
                    <p>CLASSES FOR SENIORS</p>
                    <p>STRENGTH BUILDING</p>
                    <p>WEIGHT LOSS</p>
                </div>
                <div id="modals">
                    {/* add classes with modals and buttons to switch between  */}
                </div>
            </div>
            <GuestPassForm />
            <Footer />
        </div>
    );
}

export default Schedule;