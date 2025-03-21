import React, { useEffect, useRef , useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const timelineItems = gsap.utils.toArray('.timeline-item');

    // Animate the timeline line with progress indicator
    gsap.fromTo(
      '.timeline-line',
      { height: '0%', zIndex: -1 },
      {
        height: '100%',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          markers: false,
        },
      }
    );

    // Stagger animation for timeline items
    gsap.fromTo(
      timelineItems,
      { opacity: 0, y: 100, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.3, // Adds a cascading effect
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: true,
          markers: false,
        },
      }
    );

    // Individual animations for timeline items
    timelineItems.forEach((item, index) => {
      const year = item.querySelector('.timeline-year');
      const content = item.querySelector('.timeline-content');

      // Parallax effect for the year
      gsap.fromTo(
        year,
        { opacity: 0, y: 150, scale: 0.8, filter: 'blur(10px)', zIndex: 100 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none none', // No fade-out on scroll up
            markers: false,
          },
        }
      );

      // Enhanced animation for the content
      gsap.fromTo(
        content,
        {
          opacity: 0,
          x: index % 2 === 0 ? -200 : 200,
          rotate: index % 2 === 0 ? -15 : 15,
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0)',
        },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none none', // No fade-out on scroll up
            markers: false,
          },
        }
      );
    });

    // Clean up animations and ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Your existing timelineData array remains the same
  const timelineData = [
    {
      year: '1999',
      content: 'The first and oldest US National Organic Standard without having a strong US National Market Development.'
    },
    {
      year: '2000-2003',
      content: 'We began to setting up a 250-acre Organic farmland outside of Madras to begin direct to produce sale. We set up a fertilizer standards for city compost in Madras and began to work with small farmers.'
    },
    {
      year: '2003',
      content: 'We helped sugar cane small landholders to produce and sell processed farm direct cane processing to direct distribution.'
    },
    {
      year: '2004',
      content: 'Developed small farming in clusters for the first time. Systematized and set requirements & protocols for organic farming. Started 2500 acres of organic development in organic farming. Started working with small farmers in Kerala and Karnataka (2000 Agricultural Households). We also started to 2500 farmers and officials for training in organic farming.'
    },
    {
      year: '2005',
      content: 'Was invited to speak on Organic Farming Standards in India by MAFF in Japan.'
    },
    {
      year: '2006',
      content: 'Was invited by Japanese Government to work on standardization of organic farming standards and certification of processing a pilot with the use of pesticides in agriculture.'
    },
    {
      year: '2007',
      content: 'Started converting land donated on lease premises to horticulture through organic means and helped many farmers.'
    },
    {
      year: '2008',
      content: 'Set up Clover Organic in collaboration with Clover, Denmark. Helped to train up and implement organic projects for World Bank loan for in India.'
    },
    {
      year: '2009',
      content: 'Helped to convert 5,000 tons of crop waste per day into compost directly from through various organizations.'
    },
    {
      year: '2010',
      content: 'Started working on a project of ILRI in Production and utilization of sustainable agriculture. Started working with UNDP on development projects in Karnataka and Tamil Nadu.'
    },
    {
      year: '2013',
      content: 'Was invited to attend workshops to help connect organic farming with marketing. Was invited by UNIDO International Centre for inclusive and sustainable development. Made an institutional setup.'
    },
    {
      year: '2014',
      content: 'Was awarded a project of 5,000 ha by Japanese Government.'
    },
    {
      year: '2015',
      content: 'Helped to train employees of large companies like ITC and others investing in farm to be trained.'
    },
    {
      year: '2016',
      content: 'Started implementation of inclusive organic across 400 products from horticulture to poultry helping upto to 10000 farmers help of by better returns.'
    },
    {
      year: '2017',
      content: 'Developed state of the art factory to fabricate equipment in state of practice for farming agriculture, applications, and mechanical material.'
    },
    {
      year: '2018',
      content: 'Started association with shoppers agricultural department to increase to direct farming under cluster farming development program. Started working with Walmart on sustainable farming.'
    },
    {
      year: '2019',
      content: 'Area under NPOP/PGS been increased from 2100Ha to 6100 Ha through intervention from an Clover\'s partnership.'
    },
    {
      year: '2020',
      content: 'Clover has been awarded FPO under NCDC FPO Scheme with better operations.'
    },
    {
      year: '2021',
      content: 'Clover has been awarded a FPO under NCDC FPO Scheme with better operations.'
    }
  ];

  return (
    <div className="timeline-container">
      <div className="marquee-container-heading">
        <h1>Our <span>Story</span></h1>
      </div>
      <div className="timeline" ref={timelineRef}>
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;