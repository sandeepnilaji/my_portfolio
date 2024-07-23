import React from "react";
import va from "@vercel/analytics";

function File() {
  const saveFile = async () => {
    if (window !== undefined) {
      window.open(
        "https://drive.google.com/file/d/15OAo39Dc-6BcWPDp0JWFwcRLhOQPdONI/view?usp=sharing"
      );
    }
  };
  return (
    <div>
      <button
        style={{
          border: "none",
          height: "50px",
          width: "150px",
          borderRadius: "3px",
          marginTop: "35px",
          fontWeight: "600",
          fontSize: "1.5rem",
          cursor: "pointer",
          background: "#c573e6e1",
          color: "white",
        }}
        onClick={() => {
          va.track("Clicked Resume");
          saveFile();
        }}
      >
        Resume
      </button>
    </div>
  );
}
export default File;
