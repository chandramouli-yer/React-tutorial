import './VideoItem.css'
import React from 'react'

const VideoItem=({ video,onSelectedVideo })=>{
    return(
        <div onClick={()=>onSelectedVideo(video)} className="item video-item">
            <img alt="youtube video" className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="ui content">
          <div className="header">
          {video.snippet.title}
              </div>  
            </div>
            
        </div>

    )
}

export default VideoItem