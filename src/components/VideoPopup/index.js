import ReactPlayer from 'react-player'
import './index.css'

const VideoPlayer = props => {
  const {videoId} = props
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        width="100%"
        height="100%"
        playing
      />
    </div>
  )
}

export default VideoPlayer
