import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto h-[500px] overflow-hidden rounded-lg flex">
      {/* Left: Video with overlayed text */}
      <div className="relative flex-1 h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-l-lg">
          <source src="src/assets/Desktop Assets/UA_Theme_1_DT.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay text directly centered on the video */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-black/40 p-8 rounded-lg max-w-lg text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white uppercase mb-2">
              OUR Best Gear
            </h1>
            <p>Unlock your potential with the best UA Gear.</p>
          </div>
        </div>
      </div>
 
      {/* Right: Image/Illustration */}
      <div className="hidden md:block flex-1 bg-[#f6f6fb] h-full relative">
        <img
          src="src/assets/Desktop Assets/UA_Theme_1_DT.mp4"
          alt="Latest Gear"
          className="absolute bottom-0 right-0 max-h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
