"use client";
import { useEffect, useState } from "react";
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="portfolio__title"
      >
        Projects
      </motion.h1>
      <div className="portfolio-grid">
        {data.map((project, index) => (
          <motion.div
            key={project.id}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="card__image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="card__content">
              <h3 className="card__title">{project.title}</h3>
              <p className="card__description">{project.about}</p>
              <div className="card__tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="card__tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              {project.live && (
                <a
                  href={project.live}
                  className="card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
