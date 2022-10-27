import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';

import './global.css';

const Header = () => {

    const [window, setWindow] = useState(false);
    const [siding, setSiding] = useState(false);
    const [doors, setDoors] = useState(false);
    const [services, setServices] = useState(false);
    const [about, setAbout] = useState(false);
    const [isdrawer, setIsdrawer] = useState(false);

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month_name = month[d.getMonth()];

    return (
        <>
            <div id="top-header">
                <div class="top-header-container"><div class="top-column top-column1">
                    Click Here For {month_name} Savings!
                </div>
                    <div class="top-column top-column2">
                        <button><a href="https://www.superiorpro.com/specials">More Information</a></button>&nbsp;
                        {/* <button className='configurator-button'>Configurator Quote</button> */}
                    </div>
                </div>
            </div>
            <div id="header">

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" className='header-container'>
                        <Toolbar className='main-container'>
                            <div className='left-container'>
                                <a href='https://www.superiorpro.com'>
                                    <img className='header-logo' src='https://www.superiorpro.com/wp-content/uploads/2021/09/SPE-Logo-Transparent-e1496844963354-1-1-1__1_-removebg-preview.png' />
                                </a>
                            </div>
                            <div className='middle-container'>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    {/* Desktop menu */}

                                    {isdrawer ?
                                        // Mobile view
                                        <ul className='mobile-view middle-menu'>
                                            <span className='close-drawer' onClick={() => setIsdrawer(false)}><CancelIcon /></span>

                                            {/* window */}
                                            <li className='menuItem' id='window-menu'
                                                onMouseEnter={() => setWindow(true)} onMouseLeave={() => setWindow(false)}>
                                                <a className='menuLink' href="#">
                                                    Windows
                                                </a>
                                                {window ? <ul className='sub-menu' id='windows-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/replacement-windows/">Replacement Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/picture-window/">Picture Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/awning-window/">Awning Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/double-hung-window/">Double Hung Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/slider-window/">Slider Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/casement-window/">Casement Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/geometric-window/">Geometric Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/garden-window/">Garden Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/bow-window/">Bow Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/bay-window/">Bay Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/patio-door/">Patio Door</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/garden-door/">Garden Door</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* siding */}
                                            <li className='menuItem' id='siding-menu'
                                                onMouseEnter={() => setSiding(true)} onMouseLeave={() => setSiding(false)}>
                                                <a className='menuLink' href="#">
                                                    Siding
                                                </a>
                                                {siding ? <ul className='sub-menu' id='siding-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/james-hardie-siding/">James Hardie Siding</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/trim/">Trim</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/kennesaw-soffits/">Kennesaw Soffits</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* doors */}
                                            <li className='menuItem' id='doors-menu'
                                                onMouseEnter={() => setDoors(true)} onMouseLeave={() => setDoors(false)}>
                                                <a className='menuLink' href="#">
                                                    Doors
                                                </a>
                                                {doors ? <ul className='sub-menu' id='doors-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/entry-door/">Entry Door</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/patio-door/">Gliding Doors</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/garden-door/">French Doors</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* services */}
                                            <li className='menuItem' id='services-menu'
                                                onMouseEnter={() => setServices(true)} onMouseLeave={() => setServices(false)}>
                                                <a className='menuLink' href="#">
                                                    Other Services
                                                </a>
                                                {services ? <ul className='sub-menu' id='services-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/painting/">Painting</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/kennesaw-roofing/">Kennesaw Roofing</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/garden-door/">Gutters</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/stucco/">Stucco</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/attic-insulation/">Attic Insulation</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/commercial/">Commercial</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* about */}
                                            <li className='menuItem' id='about-menu'
                                                onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}>
                                                <a className='menuLink' href="#">
                                                    About
                                                </a>
                                                {about ? <ul className='sub-menu' id='about-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/documentation/">Documentation</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/accreditations/">Accreditations</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/portfolio/">Portfolio</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/safety/">Safety</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/promise/">Promise</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/our-team/">Our Team</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/blog/">Blog</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/financing/">Financing</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* contact us */}
                                            <li className='menuItem'><a className='menuLink' href="https://www.superiorpro.com/contact-us/">Contact Us</a></li>
                                        </ul> :

                                        // desktop view
                                        <ul className='desktop-view middle-menu'>

                                            {/* window */}
                                            <li className='menuItem' id='window-menu'
                                                onMouseEnter={() => setWindow(true)} onMouseLeave={() => setWindow(false)}>
                                                <a className='menuLink' href="#">
                                                    Windows
                                                </a>
                                                {window ? <ul className='sub-menu' id='windows-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/replacement-windows/">Replacement Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/picture-window/">Picture Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/awning-window/">Awning Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/double-hung-window/">Double Hung Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/slider-window/">Slider Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/casement-window/">Casement Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/geometric-window/">Geometric Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/garden-window/">Garden Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/bow-window/">Bow Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/bay-window/">Bay Windows</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/patio-door/">Patio Door</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/garden-door/">Garden Door</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* siding */}
                                            <li className='menuItem' id='siding-menu'
                                                onMouseEnter={() => setSiding(true)} onMouseLeave={() => setSiding(false)}>
                                                <a className='menuLink' href="#">
                                                    Siding
                                                </a>
                                                {siding ? <ul className='sub-menu' id='siding-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/james-hardie-siding/">James Hardie Siding</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/trim/">Trim</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/kennesaw-soffits/">Kennesaw Soffits</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* doors */}
                                            <li className='menuItem' id='doors-menu'
                                                onMouseEnter={() => setDoors(true)} onMouseLeave={() => setDoors(false)}>
                                                <a className='menuLink' href="#">
                                                    Doors
                                                </a>
                                                {doors ? <ul className='sub-menu' id='doors-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/entry-door/">Entry Door</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/patio-door/">Gliding Doors</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/garden-door/">French Doors</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* services */}
                                            <li className='menuItem' id='services-menu'
                                                onMouseEnter={() => setServices(true)} onMouseLeave={() => setServices(false)}>
                                                <a className='menuLink' href="#">
                                                    Other Services
                                                </a>
                                                {services ? <ul className='sub-menu' id='services-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/painting/">Painting</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/kennesaw-roofing/">Kennesaw Roofing</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/garden-door/">Gutters</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/stucco/">Stucco</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/attic-insulation/">Attic Insulation</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/commercial/">Commercial</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* about */}
                                            <li className='menuItem' id='about-menu'
                                                onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}>
                                                <a className='menuLink' href="#">
                                                    About
                                                </a>
                                                {about ? <ul className='sub-menu' id='about-sub'>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/documentation/">Documentation</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/accreditations/">Accreditations</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/portfolio/">Portfolio</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/safety/">Safety</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/promise/">Promise</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/our-team/">Our Team</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/blog/">Blog</a></li>
                                                    <li className='menuItem-sub'><a href="https://www.superiorpro.com/financing/">Financing</a></li>
                                                </ul> : <ul></ul>}
                                            </li>

                                            {/* contact us */}
                                            <li className='menuItem'><a className='menuLink' href="https://www.superiorpro.com/contact-us/">Contact Us</a></li>
                                        </ul>
                                    }
                                    {/* end of menu */}

                                    {/* Burger Menu */}
                                    <ul className='mobile' onClick={() => setIsdrawer(true)}>
                                        <span className='mobile-menu'><MenuIcon /></span>
                                    </ul>

                                </Typography>
                            </div>
                            <div className='right-container'>
                                <div className='getFreeQuote'>Get Your Free Quote!</div>
                                <div className='callNumber'><a href='tel:7702030165'>(770) 203-0165</a></div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>

            </div>
        </>
    )
}

export default Header;