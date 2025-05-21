import ig2 from "../assets/Desktop Assets/IG Image 2_DT.jpg";
import ig3 from "../assets/Desktop Assets/IG Image 3_DT.jpg";
import ig4 from "../assets/Desktop Assets/IG Image 4_DT.jpg";

const InstagramCarousel = () => {
  const slides = [
    { id: 1, image: ig2, alt: "Project Rock Image 1" },
    { id: 2, image: ig3, alt: "Project Rock Image 2" },
    { id: 3, image: ig4, alt: "Project Rock Image 3" },
  ];

  return (

    
    <section className="w-full h-[700px] pt-[80px] px-4 bg-white">

<h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
        What's happening on Instagram?
      </h2>
      <p>Don't miss out on the latest news and updates from Under Armour.</p>
    {/* Left: Video with overlayed text */}
      <div className="relative flex-1 h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-l-lg"
        >
          <source src="src/assets/Shared Mobile & Desktop Assets/ig_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-start items-center md:items-start gap-6 px-4">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full md:w-[300px] h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramCarousel;
