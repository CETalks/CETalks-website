import React from 'react';
import spotify2 from '../assets/img/social-icons/spotify@2x.png';
import '../styles/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SpotifyHomePage = () => {
  const spotifyData = [
    {
      title: "Woman's Mind Special",
      spotifyUrl: 'https://open.spotify.com/embed/episode/7LkQjvLIrgvqx9ReOcWgYP?utm_source=generator&t=0',
    },
    {
      title: 'തുരന്നെടുപ്പ് 2026 | Ep 1',
      spotifyUrl: 'https://open.spotify.com/embed/episode/4fPb13HrTBm8P4FZhD1G1j?utm_source=generator&t=0',
    },
    {
      title: 'തുരന്നെടുപ്പ് 2026 | Ep 2',
      spotifyUrl: 'https://open.spotify.com/embed/episode/6UxwtLAcKS6gpLjOfVoGBb?utm_source=generator&t=0',
    },
    {
      title: 'Inside a Campus During Election',
      spotifyUrl: 'https://open.spotify.com/embed/episode/7xxDU55abEdDZaFCMJchrn?utm_source=generator&t=0',
    },
    {
      title: 'Unfiltered Ep.06',
      spotifyUrl: 'https://open.spotify.com/embed/show/5AGpr7Sd0kjciMAFxSuC0y?utm_source=generator',
    },
    {
      title: 'Event 1',
      spotifyUrl: 'https://open.spotify.com/embed/episode/3ABHzLmDaXjzJS9kOssVvI?utm_source=generator&t=0',
    },
    {
      title: 'Event 2',
      spotifyUrl: 'https://open.spotify.com/embed/episode/3PZebM56oHCNnsYBGlG1iZ?utm_source=generator&t=0',
    },
    {
      title: 'Event 3',
      spotifyUrl: 'https://open.spotify.com/embed/episode/6e7rsxV8uHvPicQwPMnijR?utm_source=generator&t=0',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 950, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  return (
    <div className="text-center flex flex-col items-center" style={{ overflow: 'hidden' }}>
      <h2 className="text-[1.303rem] font-inherit mt-8 text-white outfit-font mq750:gap-[5.88rem] mq1025:gap-[5.88rem] mb-7">Latest  on  <img src={spotify2} alt="Spotify Icon" className="inline-block h-[1.13rem] w-[1.13rem]" /></h2>
      <div className='sm:w-1/2 w-screen'>
        <Slider {...settings}>
          {spotifyData.map((pod, index) => (
            <div className="mx-auto mt-4 p-4 max-w-sif" key={index}>
              <iframe
                style={{ borderRadius: '12px' }}
                src={pod.spotifyUrl}
                width="100%"
                height="200"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default SpotifyHomePage;
