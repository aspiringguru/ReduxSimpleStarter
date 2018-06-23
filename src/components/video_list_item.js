import React from 'react';

//const VideoListItem = (props) => {
//  const video = props.video;
//new object to pull video from props object
//next line is ES6 version of above 2 lines.
const VideoListItem = ({video, onVideoSelect}) => {
  console.log(video)
  const imageUrl = video.snippet.thumbnails.default.url;
  //get this tree from chrome > devtools > network > search > expand the tree
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src = {imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem;
