import React, { useState, useEffect } from "react";
import "./trainingClover.css";

function TrainingClover() {
  const media = [
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://img.freepik.com/free-photo/daily-life-business-people-office_53876-47111.jpg?t=st=1740996953~exp=1741000553~hmac=742012c76ef5204c4cd5e0923daf78b0a2e0db8713c20b7c17d128f1ea93b03e&w=996" },
    { type: "image", src: "https://img.freepik.com/free-photo/spreadsheet-document-information-financial-startup-concept_53876-123758.jpg?t=st=1740996995~exp=1741000595~hmac=b7cb7d0b7be0413ce35475d34165b495d205d5414968ca9c299f0d6e66cc7758&w=996" },
    { type: "image", src: "https://img.freepik.com/free-photo/development-performance-self-improvement-ratings-icon_53876-122739.jpg?t=st=1740997019~exp=1741000619~hmac=b8f2c994cdba4e3afa94ba8892e0763d93a1fa41e6e721735403e4c61a2bb031&w=996" }
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
        <div className="clover-training-main-top-image">
          <div className="clover-event-main-top-image-event">
            Training<p>s</p>
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
              <h3>Training Name Here</h3>
              <a href="#"><h6>Training detail Click here</h6></a>
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
                <img src="https://img.freepik.com/free-photo/development-performance-self-improvement-ratings-icon_53876-122739.jpg?t=st=1740997019~exp=1741000619~hmac=b8f2c994cdba4e3afa94ba8892e0763d93a1fa41e6e721735403e4c61a2bb031&w=996" alt="" />
              </div>
              <div className="clover-event-content-section-image-2">
                <img src="https://img.freepik.com/free-photo/daily-life-business-people-office_53876-47111.jpg?t=st=1740996953~exp=1741000553~hmac=742012c76ef5204c4cd5e0923daf78b0a2e0db8713c20b7c17d128f1ea93b03e&w=996" alt="" />
              </div>
            </div>
            <div className="clover-event-content-section-content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quia ut perferendis quaerat illum non provident optio, vel iure voluptate inventore ducimus amet natus eveniet enim fuga debitis, aliquid esse minima corrupti. Animi consectetur illo repellat dolores eum blanditiis asperiores aliquid non ullam, pariatur ab. Consequuntur doloribus impedit itaque dignissimos?
              Consequuntur doloribus impedit itaque dignissimos? Consequuntur doloribus impedit itaque dignissimos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingClover;
