import React, { useRef, useState } from "react";
import "./video.css";
//import cat from "../videos/brecker2.mp4";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        autoPlay
        controls
        loop
        // src={cat}
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;

/* Link fornecido pelo instrutor retorna erro de quota excedida no FireBase:

{

    "error": {
        "code": 402,
        "message": "Quota has been exceeded for this project. Please visit the Firebase pricing page to learn more."
    }
}

Usando arquivo estático para testes: {cat}. */
