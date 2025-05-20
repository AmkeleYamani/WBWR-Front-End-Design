import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/hero-bg.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to WBWR</h1>
        <p className="text-lg md:text-xl mb-6">We bring your ideas to life with world-class digital experiences.</p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
