
const VideoListItem = (props) => {
  const video = props.video;
  const imageURL = video.snippet.thumbnails.high.url;
  const title = video.snippet.title;
  const description = video.snippet.description;
  const videoURL = `https://www.youtube.com/watch?v=${props.video.id.videoId}`;

  console.log(video);
  return (
    <li className="videoItem">
      <a href={videoURL} target="_blank" title="Click to open on a New Tab">
        <img src={imageURL}/>
        <h3 className="title">{title}</h3>
      </a>
      <hr/>
      <p className="description">{description}</p>
    </li>
  );
};

export default VideoListItem;
