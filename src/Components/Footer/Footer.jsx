import React from 'react';
import './Footer.css'; // Assuming the CSS file remains the same

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src="../../src/assets/cloverlogocolor.png" alt="Clover Organic" className="footer-logo" />
                </div>

                <div className="footer-all-links-content">
                    <div className="footer-all-links-content-first-column">

                        <div className="footer-section social-links">
                            <a href="https://www.facebook.com/cloverorganic" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.instagram.com/cloverorganic" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/company/cloverorganic" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://www.youtube.com/cloverorganic" target="_blank" rel="noopener noreferrer">YouTube</a>
                            <a href="https://www.twitter.com/cloverorganic" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                        <div className="footer-section connect-section">
                            <p className='connect-section-tagline'>Utilizing nature's wisdom, implemented through fruitful partnerships.</p>
                            <div className="footer-lets-connect-section">
                                <p className='footer-lets-connect-section-text'>Let's Connect</p>
                                <a href="https://www.cloverorganics.com/contact" className="footer-lets-connect-arrow"><i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                            <a href="www.cloverorganics.com" className='footer-website-link'>www.cloverorganics.com</a>
                        </div>

                    </div>


                    <div className="footer-section quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="https://www.cloverorganics.com/about" target="_blank" rel="noopener noreferrer">Who We Are</a></li>
                            <li><a href="https://www.cloverorganics.com/resources" target="_blank" rel="noopener noreferrer">Resources</a></li>
                            <li><a href="https://www.cloverorganics.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
                            <li><a href="https://www.cloverorganics.com/organic-farming" target="_blank" rel="noopener noreferrer">Organic Farming</a></li>
                            <li><a href="https://www.cloverorganics.com/aqua-culture" target="_blank" rel="noopener noreferrer">Aqua Culture</a></li>
                            <li><a href="https://www.cloverorganics.com/events" target="_blank" rel="noopener noreferrer">Events</a></li>
                            <li><a href="https://www.cloverorganics.com/rewards" target="_blank" rel="noopener noreferrer">Rewards</a></li>
                            <li><a href="https://www.cloverorganics.com/trainings" target="_blank" rel="noopener noreferrer">Trainings</a></li>
                            <li><a href="https://www.cloverorganics.com/impact" target="_blank" rel="noopener noreferrer">Our Impact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section footer-section-our-locations">
                        <h3>Our Locations</h3>
                        <ul>
                            <li>Uttarakhand</li>
                            <li>Mizoram</li>
                            <li>Uttar Pradesh</li>
                            <li>Meghalaya</li>
                        </ul>
                    </div>
                </div>



                <div className="footer-bottom-all-content">
                    <p>© 2020 Lift Media. All rights reserved</p>
                    <div className="footer-legal-content">
                        <a href="https://www.cloverorganics.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        <a href="https://www.cloverorganics.com/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;