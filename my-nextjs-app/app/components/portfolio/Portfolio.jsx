"use client";
import { useEffect, useState } from "react";
import "./portfolio.scss";

import { featuredPortfolio } from "../../data";

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
    <div>
      <div className="portfolio" id="projects">
        <h1
          style={{
            marginBottom: "40px",
            fontSize: "48px",
            textAlign: "center",
          }}
        >
          Projects
        </h1>
        <div className="portfolio-grid">
          {data.map((project) => (
            <div className="card" key={project.id}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
