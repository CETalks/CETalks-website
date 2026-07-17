import React from 'react';
import '../styles/Testimonials.css';
import rj_hunt_winners_all from '../assets/img/rj-hunt-winners/rj_hunt_winners_all.jpg';

const Testimonials = () => {
  const rjWinners = [
    {
      name: 'Gouri (EL)',
      role: 'Title Winner',
      description: 'The overall champion of the CETalks RJ Hunt 2026, demonstrating exceptional vocal talent, engaging presence, and creative hosting.',
      badgeColor: 'from-[#E8E034] to-[#C83134]', // Gold/Red gradient for title winner
      icon: '🏆',
      bgGlow: 'rgba(232, 224, 52, 0.05)',
      borderColor: 'border-[#E8E034]/30',
    },
    {
      name: 'Sisira (EC)',
      role: 'Runner-Up',
      description: 'The first runner-up, bringing amazing energy, clear articulation, and wonderful storytelling skills to the mic.',
      badgeColor: 'from-gray-300 to-gray-500', // Silver
      icon: '🎙️',
      bgGlow: 'rgba(255, 255, 255, 0.03)',
      borderColor: 'border-white/10',
    },
    {
      name: 'Sreehara (EC)',
      role: 'Second Runner-Up',
      description: 'The second runner-up, highlighting great presentation, voice modulation, and audience connection.',
      badgeColor: 'from-[#DFA435] to-[#804A00]', // Bronze
      icon: '✨',
      bgGlow: 'rgba(223, 164, 53, 0.03)',
      borderColor: 'border-[#DFA435]/15',
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10" id="rj-hunt-winners">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#E8E034]/70 mb-2 block">
          Meet Our Future Voices
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#E8E034] to-[#C83134] bg-clip-text text-transparent">RJ Hunt 2026</span> Winners
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#E8E034] to-[#C83134] mx-auto rounded-full mt-4"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Poster Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2.5 backdrop-blur-md hover:border-[#E8E034]/40 transition-all duration-500 max-w-[400px] lg:max-w-full shadow-2xl">
            {/* Subtle glow border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E034]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            <img 
              src={rj_hunt_winners_all} 
              alt="RJ Hunt 2026 Winners" 
              className="w-full h-auto rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Column: Winners Cards */}
        <div className="lg:col-span-7 space-y-6">
          {rjWinners.map((winner, index) => (
            <div
              key={index}
              className={`group flex items-start gap-4 p-5 rounded-2xl bg-white/5 ${winner.borderColor} border backdrop-blur-sm hover:border-[#E8E034]/20 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden`}
              style={{ boxShadow: `0 4px 30px ${winner.bgGlow}` }}
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Status/Winner Badge Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {winner.icon}
              </div>

              {/* Text Info */}
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E8E034] transition-colors duration-300">
                    {winner.name}
                  </h3>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${winner.badgeColor} text-black`}>
                    {winner.role}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {winner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
