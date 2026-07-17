import React from 'react';
import '../styles/styles.css';

const YoutubeVideoHomePage = () => {
  const latestReleases = [
    {
      id: 'exit-poll-part-1',
      title: "തുരന്നെടുപ്പ് '26 Exit Poll Part 1: Main Panel",
      youtubeLink: 'https://www.youtube.com/embed/Cr9-S_Api8A',
    },
    {
      id: 'exit-poll-part-2',
      title: "തുരന്നെടുപ്പ് '26 Exit Poll Part 2: UG Dept Reps",
      youtubeLink: 'https://www.youtube.com/embed/1OhQy9Ok7Nw',
    },
  ];

  return (
    <div className="text-center mt-12 px-4 max-w-7xl mx-auto w-full relative z-10">
      <h2 className="text-[1.8rem] lg:text-[2rem] font-bold text-white outfit-font mb-2">
        Featured Videos
      </h2>
      <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8">
        Watch our latest coverage, exit polls, and discussions from the Union Election 2026.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 p-2">
        {latestReleases.map((video) => (
          <div 
            key={video.id} 
            className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-md hover:border-[#E8E034]/30 transition-all duration-300 shadow-xl"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                width="100%"
                height="100%"
                src={video.youtubeLink}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-white text-base font-bold mt-4 text-left line-clamp-1">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideoHomePage;
