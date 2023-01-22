import { useEffect, useMemo } from "react";
import "./Side1.css";

function Side1({ videoSource, textData, id: key, onSetvideoSource }) {
  const id = useMemo(() => key, [key]);

  useEffect(() => {
    const element = document.querySelectorAll(`#main${id}`);

    window.addEventListener("scroll", function (event) {
      if (
        typeof element[0] === "object" &&
        element[0] !== null &&
        "getBoundingClientRect" in element[0]
      ) {
        var bounding = element[0].getBoundingClientRect();
        if (
          bounding.top < 105 &&
          bounding.top > -499 &&
          bounding.bottom > 180 &&
          bounding.bottom < 783
        ) {
          if (videoSource !== element[0].id) {
            onSetvideoSource(element[0].id);
          }
        }
      }
    });
  }, [id, videoSource, onSetvideoSource]);

  return (
    <div id={`main${id}`} className="main">
      <div>
        <span className="text-heading">{textData.heading}</span>
      </div>
      <br />
      <div className="margin-bottom margin-small">
        <h2 className="text-subhead">{textData.subHeading}</h2>
      </div>
      <p className="text-size-medium-2 text-desc">{textData.description}</p>
      <br />
    </div>
  );
}

export default Side1;
