import React, { useState, useEffect } from "react";
import "./CareerClover.css";
import { useNavigate } from "react-router-dom";  // Import useNavigate for routing
import axios from "axios";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"

function CareerClover() {


    const images = [
        "https://img.freepik.com/free-photo/group-diverse-people-attending-startup-business-course_53876-31549.jpg?t=st=1741084458~exp=1741088058~hmac=3f47c7f6de0149d6366ef9213a513682950cef8873a855fad8d163d21877afa9&w=1060",
       "https://img.freepik.com/free-photo/group-5-indian-students-suits-posed-outdoor-having-fun-dancing_627829-1755.jpg?t=st=1741084528~exp=1741088128~hmac=553c50ab97f8980e61076f2ddc98d41f8fc9e7ba0b9f7d93736f764be34e74e7&w=1060",
        "https://img.freepik.com/free-photo/group-six-south-asian-indian-mans-traditional-casual-business-wear-walking-crosswalk-together_627829-1844.jpg?t=st=1741084543~exp=1741088143~hmac=5ef39ef120319c3da355cb6e9380ba2b5edafbed9efdd4c7b0f4ee28231ffd55&w=1060",
        "https://img.freepik.com/free-photo/happy-businesswomen-celebrating-team-success-standing-outdoors-hugging-talking-team-support-congratulation-concept_74855-7347.jpg?t=st=1741084635~exp=1741088235~hmac=7959375015063e4f28db529a6e0d05891251108b3807382b733ea8b462ae8203&w=1060",
        "https://img.freepik.com/free-photo/group-six-indian-businessman-suits-posed-outdoor-winter-day-europe-looking-laptop_627829-1420.jpg?t=st=1741084596~exp=1741088196~hmac=50726179b44bdd2621718cbc11df644b86532ec3baf17f8506ce0ac964b93feb&w=1060",
        "https://img.freepik.com/free-photo/group-six-south-asian-indian-mans-traditional-casual-business-wear-asia-tourists-looking-dslr-photo-camera_627829-1850.jpg?t=st=1741084577~exp=1741088177~hmac=5e235f98377565629d128ee8c78258f7c0ad2801a86fc440a94b14890ca6114e&w=1060"
    ];
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate(); // Initialize navigation

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = () => {
        axios.get("http://localhost:5000/api/job")
            .then(response => setJobs(response.data))
            .catch(error => console.error("Error fetching jobs:", error));
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="clover-career-main">
            <div className="clover-career-main-top">
                <div className="clover-career-main-top-image">
                    <div className="clover-career-main-top-image-career">
                        Career<p>s</p>
                    </div>
                    <a href="#">
                        <div className="clover-career-main-top-image-lets-connect">
                            Let's Connect <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="clover-career-qoutation-section">
                <div className="clover-career-qoutation-section-1">
                    <p id="clover-qoutation">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam, unde ipsum obcaecati modi, tempora incidunt velit, dolorum illo asperiores aspernatur sint iste esse eos repellendus a perferendis. Hic, nesciunt?
                    </p>
                </div>
                <a href="#" id="clover-careen-join-us-now">Join Us Now</a>
            </div>

            {/* Pinterest layout for large screens */}
            <div className="clover-career-pinterest-main-container">

                <div className="clover-career-pinterest-container">
                <div className="clover-career-1">
                    <img src={images[0]} alt="" className="clover-career-pinterest-iamge" />
                </div>
                <div className="clover-career-2">
                    <div id="clover-career-2-image-1">
                        <img src={images[1]} alt="" className="clover-career-pinterest-iamge" />
                    </div>
                    <div id="clover-career-2-image-2">
                        <img src={images[2]} alt="" className="clover-career-pinterest-iamge" />
                    </div>
                </div>
                <div className="clover-career-3">
                    <div id="clover-career-3-image-1">
                        <img src={images[3]} alt="" className="clover-career-pinterest-iamge" />
                    </div>
                    <div id="clover-career-3-image-2">
                        <img src={images[4]} alt="" className="clover-career-pinterest-iamge" />
                    </div>
                </div>
                <div className="clover-career-4">
                    <img src={images[5]} alt="" className="clover-career-pinterest-iamge" />
                </div>
                </div>
                {/* <a href="#" id="clover-careen-benefits">Benefits</a> */}
                
            </div>
            

            {/* Responsive Carousel for Small Screens */}
            <div className="career-carousel-main">
            <div className="career-carousel">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}

                 
            </div>
           
            </div>

            {/* why join us  */}
            <div className="clover-career-why-join-us-parent">
            {/* <a href="#" id="clover-careen-mobile-benefits">Benifits</a> */}
            <div className="clover-career-why-join-us-main">
                <div className="clover-career-why-join-us-heading">
                    <h1>Why Join Us?</h1>
                </div>
                <div className="clover-career-why-join-us-cards">
                    <div className="clover-career-why-join-us-card-section">
                        <img src="../../../src/assets/images/clover-career-tick.svg" alt="" />
                        <h3>Fast Growing Company</h3>
                        <p>We are at an inflection point
                        to achieve accelerated. 
                        </p>
                    </div>
                    <div className="clover-career-why-join-us-card-section">
                    <img src="../../../src/assets/images/clover-career-tick.svg" alt="" />
                        <h3>Fast Growing Company</h3>
                        <p>We are at an inflection point
                        to achieve accelerated. 
                        </p>
                    </div>
                    <div className="clover-career-why-join-us-card-section">
                    <img src="../../../src/assets/images/clover-career-tick.svg" alt="" />
                        <h3>Fast Growing Company</h3>
                        <p>We are at an inflection point
                        to achieve accelerated. 
                        </p>
                    </div>
                    <div className="clover-career-why-join-us-card-section">
                    <img src="../../../src/assets/images/clover-career-tick.svg" alt="" />
                        <h3>Fast Growing Company</h3>
                        <p>We are at an inflection point
                        to achieve accelerated. 
                        </p>
                    </div>
                    <div className="clover-career-why-join-us-card-section">
                    <img src="../../../src/assets/images/clover-career-tick.svg" alt="" />
                        <h3>Fast Growing Company</h3>
                        <p>We are at an inflection point
                        to achieve accelerated. 
                        </p>
                    </div>
                    <div className="clover-career-why-join-us-card-section">
                    <img src="../../../src/assets/images/clover-career-tick.svg" alt="" />
                        <h3>Fast Growing Company</h3>
                        <p>We are at an inflection point
                        to achieve accelerated. 
                        </p>
                    </div>
                </div>
                {/* <div className="clover-career-why-join-us-image-section">
    <div className="full-height-half-width">
        <img src="../../../src/assets/images/Closeup_of_lawn_grass.jpg" alt="Grass" />
    </div>
    <div className="right-section">
        <div className="half-height-half-width">
            <img src="../../../src/assets/images/Closeup_of_lawn_grass.jpg" alt="Grass" />
        </div>
        <div className="half-height-half-width">
            <img src="../../../src/assets/images/Closeup_of_lawn_grass.jpg" alt="Grass" />
        </div>
    </div>
                </div> */}

                
               
                
            </div>
            </div>
        {/* Want to join our Clover Organics Team? */}
             <div className="clover-career-want-to-join-us-main">
       
            <div className="clover-career-want-to-join-us-heading">
                 <a href="#" id="clover-career-why-join-us-open-position">Open Position</a>
                <h1>Want to join our Clover Organics Team?</h1>
                <p>Check out our open terms below and fill the application form</p>
            </div>
            <div className="clover-career-jobs-grid">
                {jobs.length > 0 ? (
                    jobs.map(job => (
                        <div key={job.id} className="clover-career-each-job-card">
                            <div className="clover-career-job-header">
                                <div>
                                    <h3>{job.job_name}</h3>
                                    <span className="clover-career-job-type">Full Time</span>
                                </div>
                                <a 
                                    href="#" 
                                    className="clover-career-apply-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(`/ApplyForm?jobId=${job.id}`);
                                    }}
                                >
                                    <img src="../../../src/assets/images/arrow.svg" alt="arrow" className="clover-career-apply-arrow" />
                                </a>
                            </div>
                            <div className="clover-career-job-description">
                                <h4>Description:</h4>
                                <p>{job.description}</p>
                              
                                <h4>Skills</h4>
                                <p>{job.skill}</p>
                                
                                <div className="clover-career-job-description-end-date">
                                     <h4>End Date :</h4>
                                         <p>{new Date(job.end_date).toLocaleDateString()}</p>
                                </div>
                               
                            </div>
                            
                            <div className="clover-career-job-footer">
                                <div className="clover-career-job-location">
                                <i class="fa-solid fa-location-dot"></i>
                                <p>{job.city} {job.state}</p>
                                    
                                </div>
                                <div className="clover-career-job-salary">
                                <i class="fa-solid fa-user"></i>
                                <p>{job.number_positions} Positions</p>
                                </div>
                            </div>
                            
                        </div>
                    ))
                ) : (
                    <p className="empty-text">No jobs available.</p>
                )}
                
            </div>
            {/* <div className="clover-career-view-more-container">
            <a href="#" id="clover-career-different-positions-btn">Different Positions</a>
                <button className=""></button>
            </div> */}
            </div>

        </div>
    );
}

export default CareerClover;
