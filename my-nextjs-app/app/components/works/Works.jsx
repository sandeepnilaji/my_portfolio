import "./works.scss";

export default function Works() {
  return (
    <>
      <div className="skillsSide" id="skills">
        <h1
          style={{
            textAlign: "centre",
            marginLeft: "35%",
            marginBottom: "3%",
            marginTop: "2%",
            fontSize: "50px",
            color: "aliceblue",
          }}
        >
          Skills And Interest
        </h1>

        <div className="works" style={{ height: "430px" }}>
          <div className="img_cont">
            <div>
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                alt="some"
              />
              <p
                style={{
                  textAlign: "center",
                  color: "aliceblue",
                  fontWeight: "bolder",
                }}
              >
                React
              </p>
            </div>
            <div>
              <img src="assets/nextjs.svg" />

              <p
                style={{
                  textAlign: "center",
                  color: "aliceblue",
                  fontWeight: "bolder",
                }}
              >
                Next.JS
              </p>
            </div>
            <div>
              <img src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png" />

              <p
                style={{
                  textAlign: "center",
                  color: "aliceblue",
                  fontWeight: "bolder",
                }}
              >
                Tailwind CSS
              </p>
            </div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                alt="some"
              />
              <p
                style={{
                  textAlign: "center",
                  color: "aliceblue",
                  fontWeight: "bolder",
                }}
              >
                HTML
              </p>
            </div>

            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                alt="some"
              />{" "}
              <p
                style={{
                  textAlign: "center",
                  color: "aliceblue",
                  fontWeight: "bolder",
                }}
              >
                CSS
              </p>
            </div>

            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="some"
              />
              <p
                style={{
                  textAlign: "center",
                  color: "aliceblue",
                  fontWeight: "bolder",
                }}
              >
                JavaScript
              </p>
            </div>

            <div>
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                alt="some"
              />
              <p
                style={{
                  textAlign: "center",
                  color: "aliceblue",
                  fontWeight: "bolder",
                }}
              >
                NodeJs
              </p>
            </div>

            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg"
                alt="some"
              />
              <p
                style={{
                  textAlign: "center",
                  color: "aliceblue",
                  fontWeight: "bolder",
                }}
              >
                Material_UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
