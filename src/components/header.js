import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from 'react-bootstrap/Image'
import { useIntl } from "gatsby-plugin-intl"
import "./index.scss"
import Logo from "./Logo";

export default function Header({ siteTitle }) {
    const intl = useIntl();
    const locale = intl.locale;
    return (
        <header className="site-header header_area mobile-hide">
            <div className="main_header_area animated">
                <div className="container-fluid">
                    <div className="hed-flex">
                        <nav className="navigation navigation-landscape" id="navigation2">
                            <div className="nav-header">
                                <a className="nav-brand" href="/">
                                <Logo link={`/${locale}`} />
                                    <Image src="https://ajaymodi.com/images/logo.png" alt="AJAY MODI TRAVELS PVT LTD" style={{ height: `65px` }} /> </a>
                                <div className="nav-toggle"></div>
                            </div>
                            <div className="nav-menus-wrapper"><span className="nav-menus-wrapper-close-button">✕</span>
                                <ul className="nav-menu align-to-right">

                                    <li> <Link to="/"></Link></li>
                                    <li><Link to="/"> Home </Link></li>
                                    <li><Link to="/about-us"> About Us </Link></li>
                                    <li><Link to="/faq"> FAQ </Link></li>
                                    <li><Link to="/cards"> Our Story </Link></li>
                                    <li><Link to="/contactus"> Contact Us </Link></li>
                                    <li><Link to="/tour-packages"> Tour Packages </Link></li>
                                    <li><Link to="/team"> The Team </Link></li>
                                    <li><Link to="/menulist"> Menu Lists </Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

