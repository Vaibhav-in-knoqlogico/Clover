import React from 'react'
import './Impact.css'

const impactData = [
    {
        id: 1,
        image: "../../src/assets/first.jpg",
        title: "Organics",
        description: "We are committed to creating a sustainable future for our planet and our community. We are working to reduce our carbon footprint and promote sustainable practices in our daily lives."
    },
    {
        id: 2,
        image: "../../src/assets/second.jpg",
        title: "Sustainability",
        description: "Our commitment to sustainable farming practices ensures we maintain soil health and biodiversity while producing nutritious organic food."
    },
    {
        id: 3,
        image: "../../src/assets/third.jpg",
        title: "Community",
        description: "We believe in building strong relationships with local communities and supporting sustainable agricultural practices that benefit everyone."
    }
];

const Impact = () => {
  return (
   <>
    <div className="clover-impact-main-outer-container">
        <div className="clover-all-impact-section">
            {impactData.map((impact) => (
                <div key={impact.id} className="clover-organics-impact-card-main">
                    <div className="clover-impact-card-img">
                        <img src={impact.image} alt={`Impact ${impact.title}`} />
                    </div>
                    <div className="clover-impact-card-text">
                        <h2>{impact.title}</h2>
                        <p>{impact.description}</p>
                    </div>
                    <div className="clover-impact-rectangle-for-design"></div>
                </div>
            ))}
        </div>
    </div>
   </>
  )
}

export default Impact