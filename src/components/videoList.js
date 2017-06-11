import VideoListItem from "./videoListItem";

const VideoList = (props) => {


  const videoItems = props.videos.map( (video) => {
    return (<VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key={video.etag}
      video = {video} />
    );
  });
  return (
    <ul className="videoListing">
    {videoItems}
    </ul>
  );
};

export default VideoList;
