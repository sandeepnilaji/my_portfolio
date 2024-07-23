"use client";
import "./contact.scss";
import va from "@vercel/analytics";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="right">
        <h1>Contact</h1>

        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="left">
        <div className="box2">
          <div className="box1">
            <img
              src="contact/contact.png"
              alt="contact"
              style={{ width: "25px", height: "25px" }}
            />
            <div>+91 8747870060</div>
          </div>
          <div className="box1">
            <img
              src="contact/gmail.png"
              alt="contact"
              style={{ width: "25px", height: "25px" }}
            />
            <div>snilaji@gmail.com</div>
          </div>
          <div className="box1">
            <img
              src="contact/github.svg"
              alt="contact"
              style={{ width: "30px", height: "30px" }}
            />
            <div>
              <a
                rel="noreferrer"
                href="https://github.com/sandeepnilaji"
                target="_blank"
                style={{ color: "aliceblue" }}
                onClick={() => va.track("Clicked Github")}
              >
                https://github.com/sandeepnilaji
              </a>
            </div>
          </div>
          <div className="box1">
            <img
              src="contact/linkedin.svg"
              alt="contact"
              style={{ width: "25px", height: "25px" }}
            />
            <div>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/sandeep-nilaji"
                target="_blank"
                style={{ color: "aliceblue" }}
                onClick={() => va.track("Clicked LinkedIn")}
              >
                www.linkedin.com/in/sandeep-nilaji
              </a>
            </div>
          </div>
          <div className="box1">
            <img
              src="contact/location.png"
              alt="contact"
              style={{ width: "25px", height: "25px" }}
            />
            <div>Bengaluru ,Karnataka</div>
          </div>
        </div>
      </div>
    </div>
  );
}
