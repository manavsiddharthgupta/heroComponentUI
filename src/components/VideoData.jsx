import Video from "./Video";
import "./videodata.css";
const VideoData = (props) => {
  return (
    <div className="side_2">
      <Video videoSource={props.videoSource} />
    </div>
  );
};
export default VideoData;
