import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

interface Props {
  youtubeId: string;
  children?: React.ReactNode;
}

const BlockVideo: React.FC<Props> = ({ children, youtubeId }) => {
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
      <button
        className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform'
        onClick={() => setShowVideo(true)}
        title='Video abspielen'
      >
        <div className='play-icon text-8xl text-white'>
          <i className='fa-solid fa-play duration-110 drop-shadow-md transition ease-in-out group-hover:scale-110' />
        </div>
      </button>
    </button>
  );
};

export default BlockVideo;
