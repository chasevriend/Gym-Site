import React from "react";

function FreePassForm() {
    return (
        <div className="freepass">
            <h2>GET A FREE PASS</h2>
            <p>Start Your Journey with a Free Pass.</p>
            <div className="form">
                <form>
                    {/* add red dot to show each is required */}
                    <div>
                        <p>First Name</p>
                        <input placeholder="First Name" required></input>
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input placeholder="Last Name" required></input>
                    </div>
                    <div>
                        <p>Email Address</p>
                        <input placeholder="Email Address" required></input>
                    </div>
                    <div>
                        <p>Phone Number</p>
                        <input placeholder="Phone Number" required></input>
                    </div>
                    <div>
                        <p>Zip Code</p>
                        <input placeholder="Zip Code" required></input>
                    </div>
                </form>
            </div>
            <button>SIGN UP</button>
        </div>
    )
}

export default FreePassForm;