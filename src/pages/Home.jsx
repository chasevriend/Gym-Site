import React from "react";
import Navbar from "../components/Navbar";
import GuestPassForm from "../components/Form"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { render } from "@testing-library/react";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="banner">
                {/* <img src="./images/chrisbanner.webp"></img> */}
            </div>
            <div id="content">
                <div id="about">
                    <h2>ABOUT CHURCH OF IRON</h2>
                    <p>In comparison of all Orange County gyms, Church of Iron checks all the boxes. This gym is well-equipped with top notch
                    classes, Olympic platforms, weight area, cardio, outdoor pool, Functional Turf with slid lanes but of course we are always
                    striving for perfection.</p>
                </div>
                <div id="contact">
                    <h2>CONTACT INFO</h2>
                    <ul>
                        <li>12345 Beach Blvd.</li>
                        <li>Huntington Beach, CA 98765</li>
                        <hr></hr>
                        <li>(714) 321-0089</li>
                        <hr></hr>
                        <li>hbgm@churchofiron.com</li>
                    </ul>
                </div>
                <div id="amenities">
                    <h2>AMENITIES</h2>
                    <ul>
                        <li>Pool</li>
                        <li>Group Exercise</li>
                        <li>Apparel Shop</li>
                        <li>Cardio Equipment</li>
                        <li>Personal Training</li>
                        <li><a href="/amenities">See More</a></li>
                    </ul>
                </div>
                <div id="hours">
                    <h2>HOURS</h2>
                    <p>Everyday: 6AM - 10PM</p>
                    <h2>CONNECT WITH OUR COMMUNITY</h2>
                    <div id="socials">

                    </div>
                </div>
                <div id="photos">
                    <div id="photo1"></div>
                    <div id="photo2"></div>
                    <div id="photo3"></div>
                </div>
            </div>
            <GuestPassForm />
            <Footer />
        </div>
    );
}

// function Home() {
//     return (
//         <div>
//         <Navbar />
//             <div className="banner">
//                 {/* <img src="fitbanner.jpeg" alt="jacked dude"></img> */}
//             </div>
//             <div className="content">
//                 <div className="about">
//                     <h2>ABOUT CHURCH OF IRON, HUNTINGTON BEACH</h2>
//                     <p>Welcome to the best gym in all of Orange County. This gym is well-equipped with top notch classes, Olympic platforms,
//                     Weight area, Cardio, Outdoor pool, Functional Turf with slid lanes but of course we always strive for the best.</p>
//                     <h2>Gym Photos</h2>
//                     <div className="gym-photos">
//                         <div className="gym-photo1">
//                             {/* gym photo #1 */}
//                         </div>
//                         <div className="gym-photo2">
//                             {/* gym photo #2 */}
//                         </div>
//                         <div className="gym-photo3">
//                             {/* gym photo #3 */}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="contact-info">
//                     <h2>CONTACT INFO</h2>
//                     {/* add svgs here */}
//                     <div id="cells">
//                         <div id="cell1">
//                             <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Zm0-472Z"/></svg>
//                             <p>12345 Beach Blvd. <br></br>Huntington Beach, CA 92649</p>
//                         </div>
//                         <br></br>
//                         <div id="cell2">
//                             <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z"/></svg>
//                             <p>(714) 123-4567</p>
//                         </div>
//                         <br></br>
//                         <div id="cell3">
//                             <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z"/></svg>
//                             <p>hbgm@churchofiron.com</p>
//                         </div>
//                         <br></br>
//                         {/* <p><a href="#">Contact Us</a></p> */}
//                         <h2>HOURS</h2>
//                         {/* add svg button that lowers and shows hours for all days of week */}
//                         <div id="cell4">
//                             <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m627 769 45-45-159-160V363h-60v225l174 181ZM480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-82 31.5-155t86-127.5Q252 239 325 207.5T480 176q82 0 155 31.5t127.5 86Q817 348 848.5 421T880 576q0 82-31.5 155t-86 127.5Q708 913 635 944.5T480 976Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480 236q-140 0-240 100T140 576q0 140 100 240t240 100Z"/></svg>
//                             <p>Open Now: 6AM - 11PM</p>
//                             {/* <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M480 712 240 472l43-43 197 197 197-197 43 43-240 240Z"/></svg> */}
//                         </div>
//                     </div>
//                     {/* <div className="hours">
//                         <p className="weekday-hours">Weekdays: 6:00AM - 11:00PM</p>
//                         <p className="weekend-hours">Weekends: 7:00AM - 7:00PM</p>
//                 \`  /lkffs</div> */}
//                     <h2>CONNECT WITH OUR COMMUNITY</h2>
//                     <div id="socials">
//                         <svg viewBox="0 0 512 512" height="30"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg>
//                         <svg viewBox="0 0 512 512" height="30"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g></svg>
//                         <svg viewBox="0 0 512 512" height="30"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg>
//                         <svg viewBox="0 0 512 512" height="30"><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"/></svg>
//                     </div>
//                     {/* add svgs for socials here: facebook, twitter, insta, youtube */}
//                 </div>
//             </div>
//             <GuestPassForm />
//             <Footer />
//         </div>
//     );
// }

export default Home;