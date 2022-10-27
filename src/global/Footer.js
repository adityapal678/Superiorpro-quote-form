import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import VillaIcon from '@mui/icons-material/Villa';

import './global.css';

const Footer = () => {

    return (
        <>
            <Container maxWidth="lg">
                <div id="gallery-1" class="gallery galleryid-664 gallery-columns-4 gallery-size-medium">
                    <figure class="gallery-item">
                        <div class="gallery-icon landscape">
                            <a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="f5b1ca3" data-elementor-lightbox-title="trustt-dale-logo" href="https://www.superiorpro.com/wp-content/uploads/2021/09/trustt-dale-logo-1.jpg">
                                <img width="140" height="140" src="https://www.superiorpro.com/wp-content/uploads/2021/09/trustt-dale-logo-1.jpg" class="attachment-medium size-medium" alt="Home renovations in Kennesaw | Exterior renovation - SuperiorPRO" loading="lazy" /></a>
                        </div>
                    </figure>
                    <figure class="gallery-item">
                        <div class="gallery-icon landscape">
                            <a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="f5b1ca3" data-elementor-lightbox-title="guildmaster-1" href="https://www.superiorpro.com/wp-content/uploads/2021/09/guildmaster-1-1.jpg"><img width="151" height="140" src="https://www.superiorpro.com/wp-content/uploads/2021/09/guildmaster-1-1.jpg" class="attachment-medium size-medium" alt="Home renovations in Kennesaw | Exterior renovation - SuperiorPRO" loading="lazy" /></a>
                        </div>
                    </figure>
                    <figure class="gallery-item">
                        <div class="gallery-icon landscape">
                            <a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="f5b1ca3" data-elementor-lightbox-title="angies-list-logo-300x52-1" href="https://www.superiorpro.com/wp-content/uploads/2021/09/angies-list-logo-300x52-1-1.jpg"><img width="300" height="140" src="https://www.superiorpro.com/wp-content/uploads/2021/09/angies-list-logo-300x52-1-1.jpg" class="attachment-medium size-medium" alt="Home renovations in Kennesaw | Exterior renovation - SuperiorPRO" loading="lazy" /></a>
                        </div>
                    </figure>
                    <figure class="gallery-item">
                        <div class="gallery-icon portrait">
                            <a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="f5b1ca3" data-elementor-lightbox-title="ribbon" href="https://www.superiorpro.com/wp-content/uploads/2021/09/ribbon-1.jpg"><img width="85" height="140" src="https://www.superiorpro.com/wp-content/uploads/2021/09/ribbon-1.jpg" class="attachment-medium size-medium" alt="Home renovations in Kennesaw | Exterior renovation - SuperiorPRO" loading="lazy" /></a>
                        </div>
                    </figure>
                </div>
            </Container>
            <div id="footer">
                <div className='first-row'>
                    <div className='first-row1'><h3 style={{ paddingTop: '0px' }}>Get Your Free Quote!</h3></div>
                    <div className='first-row2'>
                        <a href='tel:7702030165'>
                            <Button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    backgroundColor: 'white',
                                    fontWeight: 'bold',
                                    padding: '9px 17px'

                                }}
                                type="button"
                                variant="contained"
                            >
                                <SmartphoneIcon style={{ marginRight: '5px' }} />Call Now
                            </Button>
                        </a>
                        <a href='https://www.superiorpro.com/contact-us/'>
                            <Button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    backgroundColor: 'white',
                                    fontWeight: 'bold',
                                    padding: '9px 17px'
                                }}
                                type="button"
                                variant="contained"
                            >
                                <MailOutlineIcon style={{ marginRight: '5px' }} />Email Us
                            </Button>
                        </a>
                    </div>
                </div>

                <div className='second-row'>
                    <div className='second-row1'>
                        <a href='tel:7702030165'>
                            <h2 style={{ paddingTop: '0px', color: 'black' }}>(770) 203-0165</h2>
                        </a>
                        <div className='divider'></div>
                        <div className='address'>
                            <p>1955 Vaughn Road NW Suite 108</p>
                            <p>Kennesaw, GA 30144</p>
                            <p>Monday – Friday: 8am – 5pm</p>
                            <p><a href="https://www.superiorpro.com/locations/">Service Area</a></p>
                            <p>*Some exclusions apply.</p>
                        </div>

                        <div className='Social-icon'>
                            <a href='https://www.facebook.com/Superiorpro/'><span><FacebookIcon style={{ fontSize: '50px', padding: '35px 35px 0 35px', color: '#0964B4' }} /></span></a>
                            <a href='https://twitter.com/superiorproatl'><span><TwitterIcon style={{ fontSize: '50px', padding: '35px 35px 0 35px', color: '#0964B4' }} /></span></a>
                            <a href='https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGNpN-z11HUAAAAAYNxvJ1QKHT7cmKIw2bpwTEvXqlCzLMr9LNlEMQJdk1281hP5nQMuJWsE4jA4oTnNeyzP1NhNYToKYnE3gVs92_833xqaTJWTM1luWdmU426G5Aqju2qAGo=&original_referer=https://www.superiorpro.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsuperiorpro%2F'><span><LinkedInIcon style={{ fontSize: '50px', padding: '35px 35px 0 35px', color: '#0964B4' }} /></span></a>
                            <a href='https://in.pinterest.com/superiorpro/'><span><PinterestIcon style={{ fontSize: '50px', padding: '35px 35px 0 35px', color: '#0964B4' }} /></span></a>
                            <a href='https://www.guildquality.com/pro/superiorpro'><span><VillaIcon style={{ fontSize: '50px', padding: '35px 35px 0 35px', color: '#0964B4' }} /></span></a>
                        </div>

                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2021  SuperiorPro. All Right Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer;