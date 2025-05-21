import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[400px] bg-[#111111] text-white px-6 py-12 flex flex-col items-center justify-center text-center">
      {/* Logo / Title */}
      <h2 className="text-2xl font-bold mb-2">WBWR</h2>

      {/* Subtitle or Tagline */}
      <p className="text-sm text-gray-400 mb-8">
        Crafting world-class digital experiences.
      </p>

      {/* Links */}
      <div className="flex gap-6 text-sm text-gray-400 mb-8">
        <a href="#" className="hover:text-white transition">Privacy</a>
        <a href="#" className="hover:text-white transition">Terms</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>

      {/* Copyright */}
      <div className="text-xs text-gray-500">
        © {new Date().getFullYear()} WBWR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
