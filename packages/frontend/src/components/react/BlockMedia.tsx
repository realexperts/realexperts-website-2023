import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

interface Properties {
  youtubeId: string;
  children?: React.ReactNode;
}

const BlockVideo: React.FC<Properties> = ({ children, youtubeId }) => {
  // State.
  const [showVideo, setShowVideo] = useState(false);

  return showVideo ? (
    <ReactPlayer
      url={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
      className='aspect-video w-full'
      width='100%'
      height='100%'
      playing={true}
      controls={false}
    />
  ) : (
    <button
      className='group relative flex items-center justify-center'
      onClick={() => setShowVideo(true)}
    >
      {children}
    </button>
  );
};

export default BlockVideo;
