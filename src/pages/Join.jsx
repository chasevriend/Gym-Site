//Schedule page
import React from "react";

function Join() {
    return (
        <div>
            <h1>Join page</h1>
            <div id="joinProcess">
                <div>
                    <p>My Info</p>
                </div>
                <div>
                    <p>My Plan</p>
                </div>
                <div>
                    <p>Payment</p>
                </div>
                <div>
                    <p>Confirm</p>
                </div>
            </div>
            <JoinNowForm />
        </div>
    );
}

function JoinNowForm() {
    return (
        <div className="JoinNowForm">
            <form>
                <div id="names">
                    <div>
                        <p>FIRST NAME</p>
                        <input type="text" placeholder="First Name" required></input>
                    </div>
                    <div>
                        <p>LAST NAME</p>
                        <input type="text" placeholder="Last Name" required></input>
                    </div>
                </div>
                <div>
                    <p>EMAIL ADDRESS</p>
                    <input type="email" placeholder="Email Address" required></input>
                </div>
                <div>
                    <p>PRIMARY PHONE</p>
                    <input type="text" placeholder="Primary Phone" required></input>
                </div>
            </form>
        </div>
    )
}

export default Join;