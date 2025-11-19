import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-transparent text-center py-8 px-4">
    <div className="flex justify-center space-x-6 mb-4">
      <a href="#" className="text-gray-500 hover:text-green-700 transition-colors" aria-label="Twitter"><Twitter size={24} /></a>
      <a href="#" className="text-gray-500 hover:text-green-700 transition-colors" aria-label="Instagram"><Instagram size={24} /></a>
      <a href="#" className="text-gray-500 hover:text-green-700 transition-colors" aria-label="LinkedIn"><Linkedin size={24} /></a>
    </div>
    <p className="text-gray-600 text-sm">Developed by Team Loops</p>
    <p className="text-gray-500 text-xs mt-1">© 2025 AyurMitra. All rights reserved | Terms & Conditions | Privacy Policy</p>
  </footer>
);

export default Footer;
