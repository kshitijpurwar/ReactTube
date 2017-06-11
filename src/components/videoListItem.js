
const VideoListItem = (props) => {
  const video = props.video;
  const onVideoSelect = props.onVideoSelect;
  const imageURL = video.snippet.thumbnails.high.url;
  const title = video.snippet.title;
  const description = video.snippet.description;
  const videoURL = `https://www.youtube.com/watch?v=${props.video.id.videoId}`;

  console.log(video);
  return (
    <li onClick = { () => onVideoSelect(video) }  className="videoItem">
      <div className="thumbnail">
        <img src={imageURL}/>
        <h3 className="title">
          {title}
        </h3>
      </div>
    </li>
  );
};

// <p className="description">{description}</p>

// <p>
//   <a href={videoURL} target="_blank" title="Click to open on a New Tab">
//   Open in youTube
//   </a>
// </p>

export default VideoListItem;
