const VideoDetail = (props) => {
  const video = props.video;

  if(!video){
    return (<div> Loading... </div>);
  }


  const videoID = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoID}`;
  console.log(video);



  return (
    <div className="videoDetail">
      <div className="video">
        <iframe src={videoURL}>
        </iframe>
      </div>
      <div className="details">
        <h2>
          {video.snippet.title}
        </h2>
        <hr/>
        <p>
          {video.snippet.description}
        </p>
      </div>

    </div>
  );
};

export default VideoDetail;
