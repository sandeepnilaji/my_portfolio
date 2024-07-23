"use client";
import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import File from "../resumefile/File.jsx";

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
      <div className="left">
        <div className="imgContainer">
          <img src="assets/about.png" alt="" style={{ objectFit: "contain" }} />
        </div>
        <div
          className="icondiv"
          style={{
            display: "flex",
            gap: "40px",
            marginLeft: "260px",
            marginTop: "25px",
          }}
        >
          <div>
            <a
              rel="noreferrer"
              href="https://github.com/sandeepnilaji"
              target="_blank"
            >
              {" "}
              <img
                style={{
                  width: "35px",
                  height: "35px",
                }}
                src="contact\github.svg"
                alt="github"
              />
            </a>
          </div>
          <div id="icondiv1">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/sandeep-nilaji/"
              target="_blank"
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src="contact\linkedin.svg"
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I&apos;m</h2>
          <h1>Sandeep Nilaji</h1>
          <h3 style={{ marginTop: "30px" }}>
            Frontend Web <span ref={textRef}></span>
          </h3>
          <p style={{ fontSize: "20px", textAlign: "justify" }}>
            A result-driven, self-motivated and resourceful engineer with a
            proven ability to develop websites, web applications, and
            cross-platform applications. Worked with a team of web designers,
            back-end developers and UX designers to meet project goals and
            create compelling user experiences with digital products
            incorporating a range of technologies. Use skills in debugging to
            check code, improve code and enhance the functionality and user
            experience of web applications and computer programs.
          </p>
          <File />
        </div>
        <a href="#projects">
          <img
            src="assets/arrow.png"
            alt=""
            style={{ transform: "rotate(90deg)" }}
          />
        </a>
      </div>
    </div>
  );
}
