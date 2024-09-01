import React, { useEffect, useRef } from 'react';
import '../components/lawpassport.css';

function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          videoRef.current.play().catch((error) => {
            // Handle autoplay errors gracefully
            console.error('Error autoplaying video:', error);
          });
        } else {
          videoRef.current.pause();
        }
      }, { threshold: 0.9 });
  
      observer.observe(videoRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);

  return (
    <div>
      <video ref={videoRef} controls autoPlay playsinline className='video'>
        <source src={require('../media/ryder-video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;