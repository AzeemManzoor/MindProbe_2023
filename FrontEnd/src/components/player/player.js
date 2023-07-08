import React from 'react';
import video from '../../Assets/bsdk.mp4'
import player from '../player/player.css'

function VideoPlayer() {
  return (
    <div>
      <video className='player' src={video} controls  autoplay muted/>
    </div>
  );
}

export default VideoPlayer;