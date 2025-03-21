import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Landing_page.css';
// import Timeline from '../Timeline/Timeline';
import { Link } from 'react-router-dom';  // Add this import


const Hero_section = () => {
    const slides = [
        {
            image: "/src/assets/first.jpg",
            heading: "Organic Farming",
            spanText: "Farming",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti obcaecati cupiditate et repudiandae ipsum temporibus placeat iusto laudantium."
        },
        {
            image: "/src/assets/second.jpg",
            heading: "Sustainable Future",
            spanText: "Future",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti obcaecati cupiditate et repudiandae ipsum temporibus placeat iusto laudantium."
        },
        {
            image: "/src/assets/third.jpg",
            heading: "Natural Growth",
            spanText: "Growth",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti obcaecati cupiditate et repudiandae ipsum temporibus placeat iusto laudantium."
        },
        {
            image: "/src/assets/second.jpg",
            heading: "Sustainable Future",
            spanText: "Future",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti obcaecati cupiditate et repudiandae ipsum temporibus placeat iusto laudantium."
        },
        {
            image: "/src/assets/third.jpg",
            heading: "Organic Farming",
            spanText: "Farming",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti obcaecati cupiditate et repudiandae ipsum temporibus placeat iusto laudantium."
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const imageRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const prevSlideRef = useRef(currentSlide);
    const marqueeRef = useRef(null);

    useEffect(() => {
        if (prevSlideRef.current !== currentSlide) {
            const tl = gsap.timeline();

            tl.fromTo(
                imageRef.current,
                {
                    x: prevSlideRef.current < currentSlide ? -80 : 80,
                    opacity: 0,
                    scale: 0.95,
                    rotation: prevSlideRef.current < currentSlide ? -2 : 2
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.8)"
                }
            );

            tl.fromTo(
                headingRef.current,
                {
                    x: prevSlideRef.current < currentSlide ? 60 : -60,
                    opacity: 0,
                    y: 30,
                    skewY: prevSlideRef.current < currentSlide ? 5 : -5
                },
                {
                    x: 0,
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    duration: 1,
                    stagger: 0.2
                },
                "-=1"
            );

            tl.fromTo(
                paragraphRef.current,
                {
                    y: 40,
                    opacity: 0,
                    scale: 0.9,
                    filter: "blur(2px)"
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: {
                        amount: 0.3,
                        from: "start"
                    }
                },
                "-=0.8"
            );

            prevSlideRef.current = currentSlide;
        }
    }, [currentSlide]);

    useEffect(() => {
        const marqueeTrack = marqueeRef.current.querySelector('.marquee-track');
        const marqueeAnimation = gsap.to(marqueeTrack, {
            x: '-50%',
            duration: 100,
            ease: 'none',
            repeat: -1
        });

        marqueeRef.current.addEventListener('mouseenter', () => marqueeAnimation.pause());
        marqueeRef.current.addEventListener('mouseleave', () => marqueeAnimation.play());

        return () => {
            marqueeAnimation.kill();
        };
    }, []);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handleImageHover = (target) => {
        gsap.to(target, {
            duration: 0.4,
            ease: 'power2.out'
        });
    };

    // ---------------------------------------


    return (
        <>
            {/* ---------HERO SECTION--------- */}

            <div className="main-section-container">
                <div className="hero-section-container-images-text-content">
                    <div className="hero-section-container-images">
                        <img
                            ref={imageRef}
                            src={slides[currentSlide].image}
                            alt=""
                        />
                    </div>
                    <div className="hero-section-container-text">
                        <div
                            ref={headingRef}
                            className="hero-section-container-heading"
                        >
                            <h1>
                                {slides[currentSlide].heading.split(' ')[0]} <span>{slides[currentSlide].spanText}</span>
                            </h1>
                        </div>
                        <div
                            ref={paragraphRef}
                            className="hero-section-container-paragraph"
                        >
                            <p>{slides[currentSlide].paragraph}</p>
                        </div>
                        <div className="hero-section-container-button">
                            <div
                                className="hero-section-container-button-prev"
                                onClick={handlePrevSlide}
                            >
                                <i className="fa-solid fa-arrow-left"></i>
                            </div>
                            <div
                                className="hero-section-container-button-next"
                                onClick={handleNextSlide}
                            >
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------OUR IMPACT SECTION--------- */}
            
            <div className="our-impact-section-container">
                <div className="marquee-container-heading">
                    <h1>Our <span>Impact</span></h1>
                </div>
                <div className="our-impact-section-content-events">
                    <div className="our-impact-event-one">
                        <div className="our-impact-event-one-image">
                            <img src="/src/assets/first.jpg" alt="Event One" />
                        </div>
                        <div className="our-impact-one-text-content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <Link className="our-impact-link" to="/impact">Explore More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="our-impact-event-one">
                        <div className="our-impact-event-one-image">
                            <img src="/src/assets/first.jpg" alt="Event One" />
                        </div>
                        <div className="our-impact-one-text-content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod.   </p>
                            <Link className="our-impact-link" to="/impact">Explore More <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------OUR ASSOCIATIONS SECTION--------- */}

            <div className="our-associations-section-container">
                <div className="marquee-container" ref={marqueeRef}>
                    <div className="marquee-container-heading">
                        <h1>Our <span>Associations</span></h1>
                    </div>
                    <div className="marquee-track">
                        {/* First set of images */}
                        {[...Array(37)].map((_, index) => (
                            <div key={`image-${index}`} className="marquee-item">
                                <img
                                    src={`/src/assets/a${index + 1}.png`}
                                    alt={`Association ${index + 1}`}
                                    className="association-image"
                                    onMouseEnter={(e) => handleImageHover(e.target, true)}
                                    onMouseLeave={(e) => handleImageHover(e.target, false)}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {[...Array(37)].map((_, index) => (
                            <div key={`image-duplicate-${index}`} className="marquee-item">
                                <img
                                    src={`/src/assets/a${index + 1}.png`}
                                    alt={`Association ${index + 1}`}
                                    className="association-image"
                                    onMouseEnter={(e) => handleImageHover(e.target, true)}
                                    onMouseLeave={(e) => handleImageHover(e.target, false)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------WHY CLOVER ORGANICS SECTION--------- */}
            <div className="why-clover-organics-container">
                <div className="marquee-container-heading">
                    <h1>Why <span>Clover Organics</span></h1>
                </div>
                <div className="why-clover-organics-cards-section">
                    <div className="why-clover-organics-card-1">
                        <div className="why-clover-organics-card-heading">
                            <h1>Multiple Functional Areas</h1>
                        </div>
                        <div className="why-clover-organics-card-para">
                            <ul>
                                <li>6+ years of experience as a service provider.</li>
                                <li>Technical expertise in organic production and certification.</li>
                                <li>Familiarity with governmental processes and regulatory frameworks.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="why-clover-organics-card-2">
                        <div className="why-clover-organics-card-heading">
                            <h1 style={{ backgroundColor: '#e87550' }}>Experience and Expertise</h1>
                        </div>
                        <div className="why-clover-organics-card-para">
                            <ul>
                                <li>Over 15 years of experience in organic agriculture and allied sectors.</li>
                                <li>Proven track record in implementing organic farming initiatives.</li>
                                <li>Deep connects in grassroots networks & local community.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="why-clover-organics-card-3">
                        <div className="why-clover-organics-card-heading">
                            <h1 style={{ backgroundColor: '#b7545c' }}>Prior Sales Experience</h1>
                        </div>
                        <div className="why-clover-organics-card-para">
                            <ul>
                                <li>Forward linkages with companies like Zomato (BlinkIt), Reliance Fresh, processing plants, etc.</li>
                                <li>Multiple instances of successful execution of post-harvest management based on quality parameters.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="why-clover-organics-card-4">
                        <div className="why-clover-organics-card-heading">
                            <h1 style={{ backgroundColor: '#5b5b5b' }}>Extensive On-Ground Presence</h1>
                        </div>
                        <div className="why-clover-organics-card-para">
                            <ul>
                                <li>Team of 200+ across 7 states in India.</li>
                                <li>Head Office in Dehradun, with regional offices in Uttar Pradesh, Mizoram, Manipur, Meghalaya, Tripura, Andhra Pradesh.</li>
                                <li>Team includes technical experts, FPO Managers, Post harvest management experts.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------FPO'S SECTION--------- */}
            <div className="clover-fpo-section">
                <h1>We have more than <span>200+</span> FPO's</h1>
                <Link className="fpo-page-link" to="/fpo">Explore more  <i className="fa-solid fa-arrow-right"></i></Link>
            </div>

            {/* ---------OUR STORY SECTION--------- */}
            {/* <Timeline /> */}

            {/* ---------EVENTS SECTION--------- */}
            <div className="clover-organics-events-section-conatiner">
                <div className="marquee-container-heading">
                    <h1>Events</h1>
                </div>
                <div className="events-all-cards-section">
                    <div className="events-card">
                        <div className="events-card-image">
                            <img src="/src/assets/first.jpg" alt="Event One" />
                        </div>
                        <div className="events-card-text-content">
                            <h1>Event Name Here</h1>
                            <p>Event Date Here</p>
                        </div>
                    </div>
                    <div className="events-card">
                        <div className="events-card-image">
                            <img src="/src/assets/second.jpg" alt="Event One" />
                        </div>
                        <div className="events-card-text-content">
                            <h1>Event Name Here</h1>
                            <p>Event Date Here</p>
                        </div>
                    </div>
                    <div className="events-card">
                        <div className="events-card-image">
                            <img src="/src/assets/third.jpg" alt="Event One" />
                        </div>
                        <div className="events-card-text-content">
                            <h1>Event Name Here</h1>
                            <p>Event Date Here</p>
                        </div>
                    </div>
                </div>
                <div className="clover-organics-events-section-conatiner-explore-more-btn">
                    <Link to="/events">Explore More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>

            {/* ---------AWARDS SECTION--------- */}
            <div className="clover-organics-awards-section-conatiner">
                <div className="marquee-container-heading">
                    <h1>Awards</h1>
                </div>
                <div className="awards-all-cards-section">
                    <div className="awards-card">
                        <div className="awards-card-image">
                            <img src="/src/assets/first.jpg" alt="Event One" />
                        </div>
                        <div className="awards-card-text-content">
                            <h1>awards Name Here</h1>
                            <p>awards Date Here</p>
                        </div>
                    </div>
                    <div className="awards-card">
                        <div className="awards-card-image">
                            <img src="/src/assets/second.jpg" alt="awards One" />
                        </div>
                        <div className="awards-card-text-content">
                            <h1>awards Name Here</h1>
                            <p>awards Date Here</p>
                        </div>
                    </div>
                    <div className="awards-card">
                        <div className="awards-card-image">
                            <img src="/src/assets/third.jpg" alt="awards One" />
                        </div>
                        <div className="awards-card-text-content">
                            <h1>awards Name Here</h1>
                            <p>awards Date Here</p>
                        </div>
                    </div>
                </div>
                <div className="clover-organics-awards-section-conatiner-explore-more-btn">
                    <Link to="/awards">Explore More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>

            {/* ---------TRAININGS SECTION--------- */}
            <div className="clover-organics-trainings-section-conatiner">
                <div className="marquee-container-heading">
                    <h1>Trainings</h1>
                </div>
                <div className="trainings-all-cards-section">
                    <div className="trainings-card">
                        <div className="trainings-card-image">
                            <img src="/src/assets/first.jpg" alt="trainings One" />
                        </div>
                        <div className="trainings-card-text-content">
                            <h1>trainings Name Here</h1>
                            <p>trainings Date Here</p>
                        </div>
                    </div>
                    <div className="trainings-card">
                        <div className="trainings-card-image">
                            <img src="/src/assets/second.jpg" alt="trainings One" />
                        </div>
                        <div className="trainings-card-text-content">
                            <h1>trainings Name Here</h1>
                            <p>trainings Date Here</p>
                        </div>
                    </div>
                    <div className="trainings-card">
                        <div className="trainings-card-image">
                            <img src="/src/assets/third.jpg" alt="trainings One" />
                        </div>
                        <div className="trainings-card-text-content">
                            <h1>trainings Name Here</h1>
                            <p>trainings Date Here</p>
                        </div>
                    </div>
                </div>
                <div className="clover-organics-trainings-section-conatiner-explore-more-btn">
                    <Link to="/trainings">Explore More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>

        </>
    );
};

export default Hero_section;