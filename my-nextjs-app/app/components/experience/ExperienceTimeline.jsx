import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./ExperienceTimeline.scss";

const ExperienceItem = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="content">
        <h4>{experience.title}</h4>
        <p className="location-duration">
          {experience.location} | {experience.duration}
        </p>
        <ul>
          {experience.details.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
            >
              {detail}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Frontend Developer - Pazago Technologies",
      location: "Bengaluru, India",
      duration: "01/2022 - present",
      details: [
        "Crafted highly interactive web apps and websites optimized for various browsers using Next.js, Tailwind CSS, and Chakra UI.",
        "Spearheaded comprehensive LLD sessions to meticulously analyze new feature requirements, delivering constructive feedback to enhance code quality and optimize team productivity.",
        "Implemented real-time chat with WebSocket technology for enhanced user engagement and interaction; dynamically updated UI elements, ensuring seamless responsiveness to events.",
        "Enabled push notifications in the web application to keep users engaged and informed about relevant updates.",
        "Integrated Firebase Analytics to track user behavior and gather insights for informed decision-making.",
        // "Implemented DataDog for monitoring and optimizing the performance of WebSocket connections and overall system health.",
        // "Boosted Lighthouse score to 94% and SEO score to 98%, significantly enhancing user experience and organic discoverability through strategic technical improvements.",
        // "Utilized IndexedDB for efficient client-side storage, enhancing offline capabilities and vastly improving user experience.",
        // "Leveraged Context API and Redux reducers for state management, ensuring consistency and scalability across the application.",
        // "Developed a story feature similar to social media platforms within a mobile app, enhancing user engagement and interactivity.",
        // "Involved in the entire product development process from ideation to development and improvement of features.",
      ],
    },
    {
      title: "Frontend Developer - Precize (Unlisted Share Investing Platform)",
      location: "Bengaluru, India",
      duration: "2022 - 2024",
      details: [
        "Created a robust wallet system for users to add/withdraw funds from bank accounts via bank transfer or UPI integration.",
        "Developed a user verification method to rectify bank account, demat account, and signature to process an order.",
        "Designed a user-centric Admin Dashboard enabling comprehensive tracking and visually captivating graph representations of vital user data.",
        "Revitalized desktop website with a mobile-responsive redesign, expanding accessibility to a significant portion of our user base who primarily engage via mobile devices.",
        "Solely handled and resolved all critical production issues reported by clients, ensuring rapid response times and maintaining system reliability and customer satisfaction.",
      ],
    },
    {
      title: "Education",
      location: "Karnataka, India",
      duration: "",
      details: [
        "Full Stack Web Development - Masai School, Bengaluru (2020-2021)",
        "B.Tech - S.G.Balekundri Institute Of Technology, Belgaum",
      ],
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">My Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
