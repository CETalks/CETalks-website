import React from 'react';
import '../styles/styles.css';

const FeaturedVideo = () => {
  const latestRelease = {
    title: 'തുരന്നെടുപ്പ് 2026 | Election Exit Poll Part 1',
    releaseDate: 'Release Date',
    youtubeLink: 'https://www.youtube.com/embed/Cr9-S_Api8A', // Replace with the actual Youtube link
  };

  return (
    <div className="text-center mt-1">
      <h2 className="text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] font-inherit mt-8 text-white outfit-font mq750:gap-[5.88rem] mq1025:gap-[5.88rem] mb-7">Featured Video</h2>

      {latestRelease && (
        <div className="mx-auto mt-2 p-4 max-w-yif">
          {/* Embed YouTube video using iframe */}
          <iframe
          width="100%" 
          height="400px" 
          src={latestRelease.youtubeLink}
          title={latestRelease.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
          className="responsive-ytiframe-homepage "></iframe>
        </div>
      )}
    </div>
  );
};

export default FeaturedVideo;
