import Side1 from "./Side1";
import "./textside.css";
import Video from "./Video";

const TextData = (props) => {
  return (
    <div className="side_1">
      {!props.textData && <p>Null Data</p>}
      {props.textData &&
        props.textData.texts.map((each, index) => {
          return (
            <div key={index}>
              <Side1
                videoSource={props.videoSource}
                onSetvideoSource={props.onSetvideoSource}
                id={index}
                textData={each}
              />
              <div className="mob_visible">
                <Video videoSource={`main${index}`} />
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default TextData;
