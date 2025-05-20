import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">WBWR</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} WBWR. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
