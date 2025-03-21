import React, { useState, useEffect } from "react";
import "./EventClover.css";

function EventClover() {
  const media = [
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://img.freepik.com/free-photo/celebration-hall-with-full-guests_8353-10399.jpg?t=st=1740984446~exp=1740988046~hmac=133ab8baf5da94b29493c2f5f2fe0d8bccf965d7e05847150a7c86bcf9ade9e5&w=1060" },
    { type: "image", src: "https://img.freepik.com/free-photo/winner-concept-with-golden-prize-drink_23-2149059633.jpg?w=1060" },
    { type: "image", src: "https://img.freepik.com/free-photo/winner-concept-with-man-playing-game-prize_23-2149059624.jpg?w=1060" },
    { type: "image", src: "https://img.freepik.com/free-photo/winner-concept-with-football-prize_23-2149059627.jpg?w=1060" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change slides manually
  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => 
      direction === "prev" ? 
        (prevIndex === 0 ? media.length - 1 : prevIndex - 1) : 
        (prevIndex === media.length - 1 ? 0 : prevIndex + 1)
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="clover-event-main">
      <div className="clover-event-main-top">
        <div className="clover-event-main-top-image">
          <div className="clover-event-main-top-image-event">
            Event<p>s</p>
          </div>
          <a href="#">
            <div className="clover-event-main-top-image-lets-connect">
              Let's Connect <i className="fa-solid fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </div>

      <div className="clover-event-qoutation-section">
        <div className="clover-event-qoutation-section-1">
          <i className="fa-solid fa-quote-left" id="qoutation-left"></i>
          <p id="clover-qoutation">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam, unde ipsum obcaecati modi, tempora incidunt velit, dolorum illo asperiores aspernatur sint iste esse eos repellendus a perferendis. Hic, nesciunt?
          </p>
          <i className="fa-solid fa-quote-right" id="qoutation-right"></i>
        </div>
      </div>

      {/* Hero section for the event */}
      <div className="clover-event-hero-section">
        <div className="clover-event-hero-section-cards">
          <div className="clover-event-coursel-section">
            <div id="clover-event-coursel-event-name">
              <h3>Event Name Here</h3>
              <h6>Event detail Click here</h6>
            </div>

            <div className="clover-event-image-coursal">
              <div className="carousel-images">
                {media.map((item, index) => (
                  item.type === "video" ? (
                    <video
                      key={index}
                      src={item.src}
                      className={`clover-even-coursel-video ${index === currentIndex ? "active" : ""}`}
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      disablePictureInPicture
                      controlsList="nodownload nofullscreen noremoteplayback"
                    />
                  ) : (
                    <img
                      key={index}
                      src={item.src}
                      alt={`Slide ${index + 1}`}
                      className={`clover-even-coursel-images ${index === currentIndex ? "active" : ""}`}
                    />
                  )
                ))}
              </div>

              {/* Navigation Buttons */}
              <button className="prev" onClick={() => moveSlide("prev")}>&#10094;</button>
              <button className="next" onClick={() => moveSlide("next")}>&#10095;</button>
            </div>
          </div>

          <div className="clover-event-content-section">
            <div className="clover-event-content-section-image">
              <div className="clover-event-content-section-image-1">
                <img src="https://img.freepik.com/free-photo/winner-concept-with-football-prize_23-2149059627.jpg?w=1060" alt="" />
              </div>
              <div className="clover-event-content-section-image-2">
                <img src="https://img.freepik.com/free-photo/winner-concept-with-prize-bottle_23-2149059631.jpg?w=1060" alt="" />
              </div>
            </div>
            <div className="clover-event-content-section-content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quia ut perferendis quaerat illum non provident optio, vel iure voluptate inventore ducimus amet natus eveniet enim fuga debitis, aliquid esse minima corrupti. Animi consectetur illo repellat dolores eum blanditiis asperiores aliquid non ullam, pariatur ab. Consequuntur doloribus impedit itaque dignissimos?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventClover;
