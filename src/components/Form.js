import React from "react";

function FreePassForm() {
    return (
        <div className="freepass">
            <h2>GET A FREE PASS</h2>
            <p>Start Your Journey with a Free Pass.</p>
            <div className="form">
                <form>
                    {/* add red dot to show each is required */}
                    <p>First Name</p>
                    <input placeholder="First Name" required></input>
                    <p>Last Name</p>
                    <input placeholder="Last Name" required></input>
                    <p>Email Address</p>
                    <input placeholder="Email Address" required></input>
                    <p>Phone Number</p>
                    <input placeholder="Phone Number" required></input>
                    <p>Zip Code</p>
                    <input placeholder="Zip Code" required></input>
                </form>
                <button>SIGN UP</button>
            </div>
        </div>
    )
}

export default FreePassForm;