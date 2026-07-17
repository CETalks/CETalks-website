// EventsList.jsx
import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importing posters
import spotlight_2024 from '../assets/event_posters/spotlight_2024.jpg';
import detox from '../assets/event_posters/detox.jpeg';
import easter_egg_hunt from '../assets/event_posters/easter_egg_hunt.jpg';
import Thuranneduppu from '../assets/event_posters/thuranneduppu.jpeg';
import spotlight_2018 from '../assets/event_posters/spot_light_2018.jpeg';
import spotlight_2 from '../assets/event_posters/spotlight2.jpeg';
import euphony_round3 from '../assets/event_posters/euphony_round3.jpg';
import euphony_judges from '../assets/event_posters/euphony_judges.jpg';
import unfiltered_ep6 from '../assets/event_posters/unfiltered_ep6.jpg';
import election_campus from '../assets/event_posters/election_campus.jpg';
import sfi_manifesto from '../assets/event_posters/sfi_manifesto.jpg';
import ksu_manifesto from '../assets/event_posters/ksu_manifesto.jpg';
import womens_day from '../assets/event_posters/womens_day.jpg';

const EventsList = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTabs, setActiveTabs] = useState({});

  const getActiveTab = (eventId) => activeTabs[eventId] || 'poster';
  const setActiveTab = (eventId, tab) => {
    setActiveTabs(prev => ({ ...prev, [eventId]: tab }));
  };

  const categories = ['All', 'Flagship', 'Competition', 'Open Mic', 'Podcast Series'];

  const allEvents = [
    {
      id: 'euphony-2026',
      title: 'Euphony Round 3: Duet & Unplugged',
      category: 'Competition',
      date: 'April 1, 2026',
      time: '4:00 PM',
      venue: 'Gazebo',
      poster: euphony_round3,
      judgesPoster: euphony_judges,
      description: 'A mesmerizing acoustic journey celebrating raw vocals, unplugged instrumentation, and harmonious duets. Come join us at the Gazebo for an afternoon of raw acoustic magic, soulful harmonies, and college music talent at its finest.',
      judges: {
        eastern: ['Navaneeth Reshmi Sunil', 'Rahul Ramachandran'],
        western: ['Aanjith Sanoshya', 'Joel Pat David']
      },
      isInteractive: true,
    },
    {
      id: 'womens-day-2026',
      title: "Happy Women's Day Special",
      category: 'Podcast Series',
      date: 'March 8, 2026',
      time: 'On-Demand',
      venue: 'Spotify',
      poster: womens_day,
      description: '“What’s really going on in a woman’s mind?” This Women’s Day, CETalks goes beyond the usual wishes and celebrations to explore the thoughts, emotions, struggles, and silent strengths that shape a woman’s world. Hosted by RJ Gauri & RJ Aarsha.',
    },
    {
      id: 'exit-poll-part-2',
      title: "തുരന്നെടുപ്പ് '26 Exit Poll Part 2: UG Dept Reps",
      category: 'Podcast Series',
      date: 'February 25, 2026',
      time: 'On-Demand',
      venue: 'YouTube',
      poster: election_campus,
      youtubeUrl: 'https://www.youtube.com/embed/1OhQy9Ok7Nw',
      description: 'Part 2 of the CETalks Union Election exit poll series, highlighting the debates, reviews, and forecast for the Undergraduate Department Representatives.',
      isInteractive: true,
      hasVideo: true,
    },
    {
      id: 'exit-poll-part-1',
      title: "തുരന്നെടുപ്പ് '26 Exit Poll Part 1: Main Panel",
      category: 'Podcast Series',
      date: 'February 24, 2026',
      time: 'On-Demand',
      venue: 'YouTube',
      poster: election_campus,
      youtubeUrl: 'https://www.youtube.com/embed/Cr9-S_Api8A',
      description: 'The highly anticipated CETalks exit poll for the College Union Elections 2026. Part 1 features the Main Panel debate, analysis, and student predictions.',
      isInteractive: true,
      hasVideo: true,
    },
    {
      id: 'ksu-manifesto-2026',
      title: 'തുരന്നെടുപ്പ് 2026 | KSU Manifesto',
      category: 'Podcast Series',
      date: 'February 23, 2026',
      time: 'On-Demand',
      venue: 'Spotify',
      poster: ksu_manifesto,
      description: 'Episode 2: The Election Manifesto - Alethius Panel. Tune in to listen to the visions for a better CET, put forward by KSU during this election season. Hosted by RJ Mariam.',
    },
    {
      id: 'sfi-manifesto-2026',
      title: 'തുരന്നെടുപ്പ് 2026 | SFI Manifesto',
      category: 'Podcast Series',
      date: 'February 23, 2026',
      time: 'On-Demand',
      venue: 'Spotify',
      poster: sfi_manifesto,
      description: 'Episode 1: The Election Manifesto - Celestion Panel. Tune in to listen to the visions for a better CET, put forward by SFI during this election season. Hosted by RJ Sisira.',
    },
    {
      id: 'election-campus-2026',
      title: 'Inside a Campus During Election',
      category: 'Podcast Series',
      date: 'February 15, 2026',
      time: 'On-Demand',
      venue: 'Spotify',
      poster: election_campus,
      description: 'Posters going up. Voices getting louder. Friendships tested. Opinions divided. Beyond the rallies and results, there’s a campus alive with conversations. Hosted by RJ Swathi.',
    },
    {
      id: 'spotlight-2024',
      title: 'Spotlight 2024',
      category: 'Flagship',
      date: 'March 15, 2024',
      time: '6:00 PM',
      venue: 'Main Auditorium',
      poster: spotlight_2024,
      description: 'Spotlight, the dynamic talent showcase curated by CETALKS, brings you an unforgettable evening of entertainment! From seasoned professionals to fresh faces, this is your chance to witness a lineup of incredible artists who will leave you spellbound. With performances ranging from soulful melodies to rib-tickling humor, get set for a night of laughter, music, and endless entertainment!',
    },
    {
      id: 'detox-2024',
      title: 'Detox Open Mic',
      category: 'Open Mic',
      date: 'February 20, 2024',
      time: '3:30 PM',
      venue: 'Drishti Open Stage',
      poster: detox,
      description: 'As part of the technical fest Drishti, CETalks collaborated with Drishti under the banner of DTalks to host an open mic event called Detox. Detox ran throughout the entire duration of the fest, offering a platform for participants to share their thoughts, poetry, music, and stand-up acts.',
    },
    {
      id: 'easter-egg-2024',
      title: 'Easter Egg Hunt',
      category: 'Competition',
      date: 'March 26, 2024',
      time: '10:00 AM',
      venue: 'CET Campus Grounds',
      poster: easter_egg_hunt,
      description: 'An egg-citing campus-wide Easter egg hunt competition. Teams raced across historic campus landmarks solving riddles to locate hidden tokens. The winning team was awarded a special prize and bragging rights.',
    },
    {
      id: 'unfiltered-ep6',
      title: 'Unfiltered Ep.06: Beyond the Verdict',
      category: 'Podcast Series',
      date: 'December 10, 2025',
      time: 'On-Demand',
      venue: 'Spotify',
      poster: unfiltered_ep6,
      description: 'An unfiltered, deep-dive discussion in the sixth episode of the CETalks Unfiltered podcast series, exploring insights beyond the verdict with RJ Aarsha.',
    },
    {
      id: 'thuranneduppu-2023',
      title: 'തുരന്നെടുപ്പ്',
      category: 'Podcast Series',
      date: 'Election Season 2023',
      time: 'On-Demand',
      venue: 'Spotify & YouTube',
      poster: Thuranneduppu,
      description: '"തുരന്നെടുപ്പ് " was a podcasts series dedicated to engaging discussions about the ongoing college elections 2023. It had three episodes on Spotify providing insights. In addition to the episodes, the series also released an exit poll on YouTube, further fueling the election excitement.',
    },
    {
      id: 'spotlight-2',
      title: 'Spotlight 2',
      category: 'Flagship',
      date: 'November 10, 2019',
      time: '5:30 PM',
      venue: 'CET Open Air Theatre',
      poster: spotlight_2,
      description: 'The second edition of CETalks\' flagship talent hunt and showcase, capturing the vibrant cultural spirit and showcasing the incredible creative potential of the CET community.',
    },
    {
      id: 'spotlight-2018',
      title: 'Spotlight 2018',
      category: 'Flagship',
      date: 'October 12, 2018',
      time: '6:00 PM',
      venue: 'Main Auditorium',
      poster: spotlight_2018,
      description: 'The inaugural edition of Spotlight. An evening of breathtaking talents, music, and entertainment showcasing the best vocalists, instrumentalists, and visual performers on campus.',
    }
  ];

  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const matchesCategory = filter === 'All' || event.category === filter;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (event.venue && event.venue.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#07060e] text-white flex flex-col relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#E8E034] to-transparent opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#C83134] to-transparent opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <Header />

      <main className="flex-grow pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full z-10">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#E8E034]/70 mb-2 block">
            Discover What's Happening
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            CETalks <span className="bg-gradient-to-r from-[#E8E034] to-[#C83134] bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Stay tuned to our flagship talent shows, live campus broadcasts, exciting open mics, and acoustic musical journeys.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-md">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#E8E034] to-[#C83134] text-black shadow-lg shadow-yellow-500/10'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-2.5 pl-10 text-sm focus:outline-none focus:border-[#E8E034]/50 focus:ring-1 focus:ring-[#E8E034]/20 transition-all"
            />
            <span className="absolute left-3.5 top-3 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm">
            <svg className="w-12 h-12 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-400">No events found matching your filter/search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#E8E034]/30 hover:shadow-2xl hover:shadow-[#E8E034]/5 transition-all duration-300"
              >
                {/* Event Category Badge */}
                <span className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-[#E8E034] text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  {event.category}
                </span>

                {/* Media Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black flex items-center justify-center">
                  {event.isInteractive ? (
                    <>
                      {/* Render video embed or image depending on active tab */}
                      {event.hasVideo && getActiveTab(event.id) === 'video' ? (
                        <iframe
                          src={event.youtubeUrl}
                          title={event.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full absolute inset-0 z-10"
                        ></iframe>
                      ) : (
                        <img
                          src={
                            event.id === 'euphony-2026' && getActiveTab(event.id) === 'judges'
                              ? event.judgesPoster
                              : event.poster
                          }
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}

                      {/* Interactive toggle tabs overlay */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex bg-black/75 backdrop-blur-md rounded-lg p-0.5 border border-white/10 z-20">
                        {event.hasVideo ? (
                          <>
                            <button
                              onClick={() => setActiveTab(event.id, 'poster')}
                              className={`px-3 py-1 text-2xs font-semibold rounded-md transition-all ${
                                getActiveTab(event.id) === 'poster'
                                  ? 'bg-[#E8E034] text-black'
                                  : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              Poster
                            </button>
                            <button
                              onClick={() => setActiveTab(event.id, 'video')}
                              className={`px-3 py-1 text-2xs font-semibold rounded-md transition-all ${
                                getActiveTab(event.id) === 'video'
                                  ? 'bg-[#E8E034] text-black'
                                  : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              Watch
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => setActiveTab(event.id, 'poster')}
                              className={`px-3 py-1 text-2xs font-semibold rounded-md transition-all ${
                                getActiveTab(event.id) === 'poster'
                                  ? 'bg-[#E8E034] text-black'
                                  : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              Poster
                            </button>
                            <button
                              onClick={() => setActiveTab(event.id, 'judges')}
                              className={`px-3 py-1 text-2xs font-semibold rounded-md transition-all ${
                                getActiveTab(event.id) === 'judges'
                                  ? 'bg-[#E8E034] text-black'
                                  : 'text-gray-400 hover:text-white'
                              }`}
                            >
                              Judges
                            </button>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#E8E034] transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-gray-400 mb-4 font-medium border-b border-white/5 pb-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#E8E034]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    {event.venue && (
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#C83134]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.venue}
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                    {event.description}
                  </p>

                  {/* Optional Judges Section for Euphony */}
                  {event.id === 'euphony-2026' && getActiveTab(event.id) === 'judges' && (
                    <div className="bg-white/5 border border-white/5 rounded-xl p-4 mb-4 text-xs">
                      <div className="mb-2.5">
                        <span className="font-bold text-[#E8E034] block mb-1">Eastern Genre Judges</span>
                        <span className="text-gray-300 font-medium">{event.judges.eastern.join(', ')}</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#C83134] block mb-1">Western Genre Judges</span>
                        <span className="text-gray-300 font-medium">{event.judges.western.join(', ')}</span>
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="mt-auto">
                    {event.id === 'euphony-2026' ? (
                      <button className="w-full text-center py-2.5 rounded-xl text-black font-bold bg-[#E8E034] hover:bg-white hover:text-black transition-colors duration-300 border border-transparent">
                        View Memories
                      </button>
                    ) : (
                      <button className="w-full text-center py-2.5 rounded-xl text-white font-bold bg-white/5 hover:bg-white hover:text-black transition-colors duration-300 border border-white/10 hover:border-transparent">
                        View Memories
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default EventsList;
