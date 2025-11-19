import React from 'react';

const AssistantIcon = () => (
  <div className="fixed bottom-8 right-8 z-50 group">
    <div className="absolute bottom-16 right-auto w-48 p-2 bg-gradient-to-r from-green-500 to-teal-400 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-1/2 transform -translate-x-1/2">
      <div className="relative p-2">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-teal-400 transform rotate-45 translate-y-1/2"></div>
        Hi, I am Ahaar Sakha, your personalized Ayurvedic assistant. I can provide you with assistance with the website navigation and the basic principles of Ayurveda.
      </div>
    </div>
    <button aria-label="Ask Ahaar Sakha, your Ayurvedic assistant" className="transition-transform transform hover:scale-110">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="60" height="60" className="shadow-md hover:bg-green-100 rounded-full transition-colors duration-300">
        <defs>
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{stopColor:'#8EE0C4', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#5E8B7E', stopOpacity:1}} />
          </radialGradient>
        </defs>
        <g>
          <ellipse cx="50" cy="60" rx="40" ry="35" fill="#f8f6f2" stroke="#e0ddd7" strokeWidth="2"/>
          <ellipse cx="50" cy="60" rx="35" ry="30" fill="white"/>
          <g strokeWidth="2" fill="none" stroke="#A07855">
            <circle cx="40" cy="58" r="11"/>
            <circle cx="60" cy="58" r="11"/>
            <path d="M 51 58 L 49 58"/>
          </g>
          <circle cx="40" cy="58" r="7" fill="url(#eyeGlow)"/>
          <circle cx="60" cy="58" r="7" fill="url(#eyeGlow)"/>
          <circle cx="38" cy="56" r="2.5" fill="white"/>
          <circle cx="58" cy="56" r="2.5" fill="white"/>
          <path d="M 38 74 Q 50 85 62 74" strokeWidth="2.5" strokeLinecap="round" stroke="#A07855" fill="none"/>
          <g transform="translate(70, 30) rotate(15)">
            <path d="M 0 0 Q 5 -15 10 -20" stroke="#7a9a7a" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
            <ellipse cx="10" cy="-20" rx="4" ry="2" fill="#5E8B7E" transform="rotate(-30 10 -20)"/>
            <ellipse cx="6" cy="-12" rx="3.5" ry="1.8" fill="#5E8B7E" transform="rotate(-40 6 -12)"/>
            <path d="M 0 0 Q -5 -12 -2 -22" stroke="#7a9a7a" fill="none" strokeWidth="1.5" strokeLinecap="round"/>
            <ellipse cx="-2" cy="-22" rx="4" ry="2" fill="#4a7567" transform="rotate(20 -2 -22)"/>
            <ellipse cx="-4" cy="-14" rx="3.5" ry="1.8" fill="#4a7567" transform="rotate(30 -4 -14)"/>
          </g>
        </g>
      </svg>
    </button>
  </div>
);

export default AssistantIcon;
