import React from 'react';

export const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

export const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export const DashboardIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>
);

export const CalculatorIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M12 7h.01M15 7h.01M15 14h.01M18 14h.01M18 11h.01M18 7h.01M6 21h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

export const SearchIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const AhaarSakhaLogo = () => (
  <div className="w-48 h-48">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs><radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" style={{ stopColor: '#8EE0C4', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#5E8B7E', stopOpacity: 1 }} /></radialGradient></defs>
      <g>
        <ellipse cx="50" cy="60" rx="40" ry="35" fill="#f8f6f2" stroke="#e0ddd7" strokeWidth="2"/>
        <ellipse cx="50" cy="60" rx="35" ry="30" fill="white"/>
        <g stroke="#A07855" strokeWidth="2" fill="none">
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
  </div>
);
