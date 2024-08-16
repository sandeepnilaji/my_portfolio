"use client";
import "./contact.scss";
import va from "@vercel/analytics";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="right">
        <h1 className="animate-title">Contact</h1>
        <img src="assets/shake.svg" alt="" className="animate-image" />
      </div>
      <div className="left">
        <div className="box2">
          {[
            { src: "contact/contact.png", text: "+91 8747870060" },
            { src: "contact/gmail.png", text: "snilaji@gmail.com" },
            {
              src: "contact/github.svg",
              text: "https://github.com/sandeepnilaji",
              link: "https://github.com/sandeepnilaji",
              onClick: () => va.track("Clicked Github"),
            },
            {
              src: "contact/linkedin.svg",
              text: "www.linkedin.com/in/sandeep-nilaji",
              link: "https://www.linkedin.com/in/sandeep-nilaji",
              onClick: () => va.track("Clicked LinkedIn"),
            },
            { src: "contact/location.png", text: "Bengaluru, Karnataka" },
          ].map((item, index) => (
            <div key={index} className="box1 animate-box">
              <img
                src={item.src}
                alt="contact"
                style={{ width: "25px", height: "25px" }}
              />
              <div>
                {item.link ? (
                  <a
                    rel="noreferrer"
                    href={item.link}
                    target="_blank"
                    style={{ color: "aliceblue" }}
                    onClick={item.onClick}
                  >
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
