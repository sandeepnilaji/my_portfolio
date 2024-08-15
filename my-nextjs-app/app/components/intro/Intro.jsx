"use client";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import File from "../resumefile/File.jsx";
import { motion } from "framer-motion";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textRef.current) {
        try {
          init(textRef.current, {
            showCursor: true,
            backDelay: 1000,
            backSpeed: 60,
            strings: ["Developer"],
          });
        } catch (error) {
          console.error("Error initializing ityped:", error);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro" id="intro">
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="imgContainer">
          <img src="assets/about.png" alt="" style={{ objectFit: "contain" }} />
        </div>
        <div className="icondiv">
          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              rel="noreferrer"
              href="https://github.com/sandeepnilaji"
              target="_blank"
            >
              <img src="contact/github.svg" alt="github" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/sandeep-nilaji/"
              target="_blank"
            >
              <img src="contact/linkedin.svg" alt="linkedin" />
            </a>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="wrapper md:px-[44px]">
          <h2>Hi There, I&apos;m</h2>
          <h1>Sandeep Nilaji</h1>
          <h3>
            Frontend Web <span ref={textRef}></span>
          </h3>
          <p>
            Frontend Developer with 2+ years of experience specializing in
            Next.js and React.js. Passionate about crafting optimized,
            interactive web applications. Skilled in performance enhancement,
            real-time features, and responsive design. Committed to delivering
            user-centric solutions that drive engagement and business growth.
          </p>
          <File />
        </div>
        <motion.a
          href="#projects"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <img src="assets/arrow.png" alt="" />
        </motion.a>
      </motion.div>
    </div>
  );
}
