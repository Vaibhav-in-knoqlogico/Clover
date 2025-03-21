import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="clover-organics-contact-us-page-main-container">
                <div className="clover-organics-all-content-section">
                    <div className="clover-contact-hero-section">
                        <img src="../../src/assets/second.jpg" />
                    </div>
                        <div className="clover-contact-contact">
                            {/* <div className="clover-contact-graphic">
                                <img src="../../src/assets/contact-design.svg" alt="" />
                            </div> */}
                            <p>
                                We are here to help and answer any questions you might have. We look forward to hearing from you.
                            </p>
                        </div>
                    <div className="clover-contact-form-email-number-container">
                        <div className="clover-contact-email-number-container">
                            <div className="clover-contact-for-sale-careers">
                                <h2>For Sales</h2>
                                <div className="clover-contact-number-email-for-sale-careers">
                                    <p>
                                        <span>
                                            <i className="fa-solid fa-phone"></i>
                                        </span>
                                        <span>
                                            +91-7060014447
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <i className="fa-solid fa-envelope"></i>
                                        </span>
                                        <span>
                                            info@cloverorganic.com
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="clover-contact-for-sale-careers">
                                <h2>For Careers</h2>
                                <div className="clover-contact-number-email-for-sale-careers">
                                    <p>
                                        <span>
                                            <i className="fa-solid fa-phone"></i>
                                        </span>
                                        <span>
                                            +91-8979584444
                                        </span>
                                    </p>
                                    <p>
                                        <span>
                                            <i className="fa-solid fa-envelope"></i>
                                        </span>
                                        <span>
                                            admin@cloverorganic.com
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="clover-contact-form-container">
                            <form>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="number" placeholder="Phone" />
                                <textarea placeholder="Message"></textarea>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;