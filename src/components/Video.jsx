import "./video.css";
import video1 from "../Assets/Video1.mp4";
import video2 from "../Assets/Video2.mp4";
import video3 from "../Assets/Video3.mp4";

const allVideo = [video1, video2, video3];

const Video = (props) => {
  const ind = +props.videoSource[4];
  // console.log(ind);
  return (
    <article className="main-box">
      <video key={ind} muted autoPlay loop className="videos">
        <source src={allVideo[ind]} type="video/mp4" />
      </video>
    </article>
  );
};
export default Video;
