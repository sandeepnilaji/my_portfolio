import "./works.scss";
import { Fade } from "react-awesome-reveal";

export default function Works() {
  return (
    <>
      <div className="skillsSide" id="skills">
        <Fade direction="down">
          <h1 className="skillsTitle">Skills And Interest</h1>
        </Fade>

        <div className="works">
          <div className="img_cont">
            <Fade direction="up" cascade>
              <div className="skill">
                <img src="/skills/react_icon.svg" alt="React" />
                <p>React</p>
              </div>
              <div className="skill">
                <img src="assets/nextjs.svg" alt="Next.JS" />
                <p>Next.JS</p>
              </div>
              <div className="skill">
                <img src="/skills/tailwind_icon.svg" alt="Tailwind CSS" />
                <p>Tailwind</p>
              </div>
              <div className="skill">
                <img src="/skills/html_icon.svg" alt="HTML" />
                <p>HTML</p>
              </div>
              <div className="skill">
                <img src="/skills/css_icon.svg" alt="CSS" />
                <p>CSS</p>
              </div>
              <div className="skill">
                <img src="/skills/JS_icon.svg" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className="skill">
                <img src="/skills/material_ui_icon.svg" alt="Material_UI" />
                <p>Material_UI</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
