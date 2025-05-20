import React from "react";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-900">WBWR</h1>
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </nav>
      {/* Mobile nav toggle (placeholder) */}
      <div className="md:hidden">
        <button className="text-gray-700 text-xl">☰</button>
      </div>
    </header>
  );
};

export default Header;
