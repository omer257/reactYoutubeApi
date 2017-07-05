import React, {Component} from 'react';
import VideoListItem from './VideoListItem';
const VideoList = (props) => {
    const videos = props.videos;
    const videosList = videos.map((video, index) => {
        return <VideoListItem onVideoSelect={props.onVideoSelect} video={video} key={video.etag}/>
    });
    return (
        <ul className="list-group col-md-4">{videosList}</ul>
    )
}

export default VideoList;