import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/styles.css';

// Import podcast posters
import womens_day from '../assets/event_posters/womens_day.jpg';
import sfi_manifesto from '../assets/event_posters/sfi_manifesto.jpg';
import ksu_manifesto from '../assets/event_posters/ksu_manifesto.jpg';
import election_campus from '../assets/event_posters/election_campus.jpg';
import unfiltered_ep6 from '../assets/event_posters/unfiltered_ep6.jpg';

const OurPodcastsMedia = () => {
  const podcasts = [
    {
      title: "How it's actually inside of a woman's mind",
      host: "RJ Gauri & RJ Aarsha",
      description: "This Women's Day, CETalks goes beyond the usual wishes and celebrations to explore the thoughts, emotions, struggles, and silent strengths that shape a woman's world.",
      releaseDate: "Mar 08, 2026",
      thumbnail: womens_day,
      spotifyLink: "https://open.spotify.com/episode/7LkQjvLIrgvqx9ReOcWgYP?si=8fd82b0bab5f4908",
    },
    {
      title: "തുരന്നെടുപ്പ് 2026 | Episode 1 : The Election Manifesto - CELESTION PANEL",
      host: "SFI (RJ Sisira)",
      description: "Tune in to listen to the visions for a better CET, put forward by SFI during this election season.",
      releaseDate: "Feb 23, 2026",
      thumbnail: sfi_manifesto,
      spotifyLink: "https://open.spotify.com/episode/4fPb13HrTBm8P4FZhD1G1j?si=d85325324d344fdd",
    },
    {
      title: "തുരന്നെടുപ്പ് 2026 | Episode 2 : The Election Manifesto - ALETHIUS PANEL",
      host: "KSU (RJ Mariam)",
      description: "Tune in to listen to the visions for a better CET, put forward by KSU during this election season.",
      releaseDate: "Feb 23, 2026",
      thumbnail: ksu_manifesto,
      spotifyLink: "https://open.spotify.com/episode/6UxwtLAcKS6gpLjOfVoGBb?si=3fc590c653504053",
    },
    {
      title: "Inside a Campus During Election",
      host: "RJ Swathi",
      description: "Posters going up. Voices getting louder. Friendships tested. Opinions divided. Beyond the rallies and results, there's a campus alive with conversations.",
      releaseDate: "Feb 15, 2026",
      thumbnail: election_campus,
      spotifyLink: "https://open.spotify.com/episode/7xxDU55abEdDZaFCMJchrn?si=ca6af4bd4ab24932",
    },
    {
      title: "Unfiltered Ep.06: Beyond the Verdict",
      host: "RJ Aarsha",
      description: "An unfiltered, deep-dive discussion in the sixth episode of the CETalks Unfiltered podcast series, exploring insights beyond the verdict.",
      releaseDate: "Dec 10, 2025",
      thumbnail: unfiltered_ep6,
      spotifyLink: "https://open.spotify.com/show/5AGpr7Sd0kjciMAFxSuC0y",
    },
    {
      title: "തുരന്നെടുപ്പ് 2023 | Ep 3: THE WRAP-UP",
      host: "RJ Nandana",
      description: "",
      releaseDate: "Oct 21, 2023",
      thumbnail: "https://d2a9bkgsuxmqe2.cloudfront.net/production/podcast_uploaded_episode400/4990600/4990600-1697907481423-dacad420c6db9.jpg",
      spotifyLink: "https://open.spotify.com/episode/2npayuoKczPJUc604fL1zs?si=deb3549e1c12413d",
    },
    {
      title: "EUPHONY FINALS",
      host: "RJ Anhajul",
      description: "",
      releaseDate: "Sep 07, 2023",
      thumbnail: "https://d2a9bkgsuxmqe2.cloudfront.net/production/podcast_uploaded_episode400/4990600/4990600-1694102237896-75e8479470de5.jpg",
      spotifyLink: "https://open.spotify.com/episode/6baKVaKQW7knMr5miDy8rZ?si=eaAqR6B6Q-Sbovlm0BKpdw",
    },
    {
      title: "KURUP | CETALKIES -Movie Review",
      host: "",
      description: "",
      releaseDate: "Nov 14, 2021",
      thumbnail: "https://d2a9bkgsuxmqe2.cloudfront.net/production/podcast_uploaded400/4990600/4990600-1587754590066-f131f5b84812f.jpg",
      spotifyLink: "https://open.spotify.com/episode/1xW1lgYszsblEKw3nzCzvh?si=a0473e4bc6c44bf8",
    },
    {
      title: "ലേശം ഉളുപ്പ് | EPISODE 2",
      host: "RJ Anver, RJ Keerthana",
      description: "",
      releaseDate: "Nov 26, 2020",
      thumbnail: "https://d2a9bkgsuxmqe2.cloudfront.net/production/podcast_uploaded_episode400/4990600/4990600-1606364194597-e7d79c3b33ce2.jpg",
      spotifyLink: "https://open.spotify.com/episode/0BqaUfEuSz69VdicVOdEBn?si=5X2rILGyQxG4WQJyx2Cdmg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    speed: 2000,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="max-w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12"> 
      
    <div className="max-w-5xl mx-auto relative">
    <div className="mb-4 text-white outfit-font">
        <div className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] leading-5">Our</div> 
        <div className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-r from-[#E8E034] to-[#C83134] bg-clip-text text-transparent inline-block">Podcasts</div>
        <button
            onClick={() => window.location.href = "https://open.spotify.com/show/5AGpr7Sd0kjciMAFxSuC0y"}
            className="rounded-md text-white text-sm md:text-base lg:text-lg font-semibold absolute top-0 right-0 mt-2 mr-4 px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black focus:outline-none"
        >
        Explore More
        </button>
    </div>

        <Slider {...settings}>
          {podcasts.map((podcast, index) => (
            <div key={index} className="flex flex-col items-start p-4">
              <a href={podcast.spotifyLink} target="_blank" rel="noopener noreferrer">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={podcast.thumbnail}
                    alt={`Podcast Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
              <div className="text-white">
                <p className="font-semibold text-[0.9rem] md:text-[1.08rem]">{podcast.title}</p>
                <p className="font-normal text-[0.8rem] md:text-[1.05rem]">{podcast.host}</p>
                <p className="font-normal text-[0.8rem] md:text-[1.05rem]">{podcast.releaseDate}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurPodcastsMedia;