import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import unfiltered_ep6 from '../assets/event_posters/unfiltered_ep6.jpg';
import election_campus from '../assets/event_posters/election_campus.jpg';
import sfi_manifesto from '../assets/event_posters/sfi_manifesto.jpg';
import ksu_manifesto from '../assets/event_posters/ksu_manifesto.jpg';
import womens_day from '../assets/event_posters/womens_day.jpg';
import euphony_round3 from '../assets/event_posters/euphony_round3.jpg';

// Custom arrow components
const CustomPrevArrow = (props) => (
  <div {...props} className="custom-arrow custom-prev-arrow">
    &#60;
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="custom-arrow custom-next-arrow">
    &#62;
  </div>
);

const Pastevents = () => {
  const eventsData = [
    {
      title: 'Euphony Round 3: Duet & Unplugged',
      date: 'April 1, 2026',
      imageUrl: euphony_round3,
    },
    {
      title: "Happy Women's Day Special",
      date: 'March 8, 2026',
      imageUrl: womens_day,
    },
    {
      title: 'തുരന്നെടുപ്പ് 2026 | KSU Manifesto',
      date: 'February 23, 2026',
      imageUrl: ksu_manifesto,
    },
    {
      title: 'തുരന്നെടുപ്പ് 2026 | SFI Manifesto',
      date: 'February 23, 2026',
      imageUrl: sfi_manifesto,
    },
    {
      title: 'Inside a Campus During Election',
      date: 'February 15, 2026',
      imageUrl: election_campus,
    },
    {
      title: 'Unfiltered Ep.06: Beyond the Verdict',
      date: 'December 10, 2025',
      imageUrl: unfiltered_ep6,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:2000,
    autoplay: true,
    autoplaySpeed: 4000, 
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <div className="text-center  sm:mt-1 lg:mt-10" style={{ overflow: 'hidden' }}>
      <h2 className="text-[1.303rem] font-inherit mt-8 text-white outfit-font mb-7">Past Events</h2>

      <Slider {...settings}>
        {eventsData.map((event, index) => (
          <div key={index} className="event-item">
            <img
              src={event.imageUrl}
              alt={`Event ${index + 1}`}
              className="mx-auto mb-4 rounded-md max-h-[28rem]" // Adjust max height as needed
              style={{ maxWidth: '100%', height: '300px' }} // Make images responsive
            />

            <p className="text-gray-500 mb-2">{event.date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Pastevents;
