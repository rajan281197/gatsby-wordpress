import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.css"
import Image from 'react-bootstrap/Image'

const Footer = (props) => (
<footer className="site-footer">
    <div className="container">
        <div className="footer-row">
            <div className="foot-col-sm">

                <div className="foot-logo white">
                    <Image src="https://ajaymodi.com/images/pin.png" className="map" alt="AJAY MODI TRAVELS" />
                    ADDRESS
                </div>
                <div className="fot-about">A-404, Ratnaakar Nine Square Opp. Keshavbaug Party Plot, Vastrapur,
                    Ahmedabad, Gujarat 380015
                </div>
                <div className="for-about white mt-20">
                    <Image src="https://ajaymodi.com/images/mob-new.png" className="map" alt="AJAY MODI TRAVELS" />
                    Domestic: +91-81418 01456
                </div>
                <div className="for-about white mt-20">
                    <Image src="https://ajaymodi.com/images/mob-new.png" className="map" alt="AJAY MODI TRAVELS" />
                    International: +91-82005 84741
                </div>
                <div className="for-about white mt-20">
                    <Image src="https://ajaymodi.com/images/email.png" className="map" alt="AJAY MODI TRAVELS" />
                    rajan.panchal51196@gmail.com
                </div>

            </div>
            <div className="foot-col-xl">

                <div className="elebr">
                    <h2>#TOURS&TRAVELS</h2>
                    <p>Earning trust and blessings is what matters to us.</p>
                </div>


                <div className="quck-links">
                    <div className="foot-nav">
                        <h2 className="wgt-titel">Company</h2>
                        <ul>
                            <li>
                                <Link to="#">Site Map </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="foot-nav">
                        <h2 className="wgt-titel">Contact</h2>
                        <ul>
                            <li>
                                <Link to="/contactus/">Contact us </Link>
                            </li>

                            <li>
                                <Link to="/tour-packages/">Tours Package </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="foot-nav">
                        <h2 className="wgt-titel">More</h2>
                        <ul>
                            <li>
                                <Link to="/faq/">FAQ</Link>
                            </li>

                            <li>
                                <Link to="/cards/">Our Story</Link>
                            </li>                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div className="footer-btm">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <p className="copyrt">© {(new Date().getFullYear())} Tours & Travels PVT LTD. All Rights Reserved.
                    </p>
                </div>
                <div className="col-md-4">



                </div>
            </div>
        </div>
    </div>
</footer>
)

export default Footer