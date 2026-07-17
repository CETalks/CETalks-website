// Teammember.jsx
import React from 'react';
import '../styles/styles.css';

const Teammember = () => {
  return (
    <section id="team" className="team py-16 px-4 md:px-8 max-w-5xl mx-auto text-center relative z-10 min-h-[60vh] flex flex-col justify-center items-center">
      {/* Title */}
      <div className="mb-6">
        <span className="text-[2.5rem] md:text-[3.5rem] outfit-font inline-block bg-gradient-to-b from-[#E8E034] to-[#CA3035] bg-clip-text text-transparent font-extrabold tracking-tight" style={{ paddingBottom: "0.5rem" }}>
          Our Team
        </span>
      </div>

      {/* Main Teaser Card */}
      <div className="relative group max-w-2xl w-full p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:border-[#E8E034]/30 transition-all duration-500 overflow-hidden mt-4">
        {/* Glow backdrop effect */}
        <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-[#E8E034]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#E8E034]/10 transition-colors duration-500" />
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-[#CA3035]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#CA3035]/10 transition-colors duration-500" />

        {/* Animated Radio Soundwaves Icon */}
        <div className="flex items-center justify-center gap-1.5 mb-8 h-12">
          <div className="w-1 bg-[#E8E034] rounded-full animate-[pulse_1s_infinite] h-8" />
          <div className="w-1 bg-gradient-to-b from-[#E8E034] to-[#CA3035] rounded-full animate-[pulse_1.2s_infinite] h-12" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 bg-[#CA3035] rounded-full animate-[pulse_1s_infinite] h-10" style={{ animationDelay: '0.4s' }} />
          <div className="w-1 bg-gradient-to-b from-[#CA3035] to-[#E8E034] rounded-full animate-[pulse_1.4s_infinite] h-6" style={{ animationDelay: '0.1s' }} />
          <div className="w-1 bg-[#E8E034] rounded-full animate-[pulse_1.2s_infinite] h-10" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Teaser Headline */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-white outfit-font mb-4 tracking-tight leading-tight">
          Wait for our <span className="bg-gradient-to-r from-[#E8E034] to-[#CA3035] bg-clip-text text-transparent">Newest Team</span>
        </h2>

        {/* Teaser Paragraph */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          Something big is brewing behind the scenes! The voices that bring the campus alive, the creative minds shaping our designs, and the developers building the platforms are transitioning.
        </p>

        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#E8E034] animate-ping" />
          Stay Tuned
        </div>
      </div>
    </section>
  );
};

export default Teammember;
