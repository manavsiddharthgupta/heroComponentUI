import { useCallback, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import TextData from "./components/TextData";
import VideoData from "./components/VideoData";
import "./App.css";

function App() {
  const [textData, setTextData] = useState(null);
  const [videoSourceId, setVideoSourceId] = useState("main0");

  const onChangeVideoSource = useCallback((id) => {
    setVideoSourceId(id);
  }, []);

  useEffect(() => {
    const fetchingData = () => {
      fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setTextData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchingData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="main_section">
        <TextData
          videoSource={videoSourceId}
          onSetvideoSource={onChangeVideoSource}
          textData={textData}
        />
        <VideoData videoSource={videoSourceId} />
      </div>
    </>
  );
}

export default App;
