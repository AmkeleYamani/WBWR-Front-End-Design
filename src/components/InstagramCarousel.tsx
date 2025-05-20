import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
//import "swiper/css";
//import "swiper/css/pagination";

import ig2 from "../assets/Mobile Assets/IG Image 2.jpg";
import ig3 from "../assets/Mobile Assets/IG Image 3.jpg";
import ig4 from "../assets/Mobile Assets/IG Image 4.jpg";

const InstagramCarousel = () => {
  const slides = [
    { id: 1, image: ig2, alt: "Project Rock Image 1" },
    { id: 2, image: ig3, alt: "Project Rock Image 2" },
    { id: 3, image: ig4, alt: "Project Rock Image 3" },
  ];

  return (
    <section className="w-full py-12 px-4 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">#ProjectRock on Instagram</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides
        className="max-w-md mx-auto"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.3 1.1.7 1.6 1.2.5.5.9 1 .9 1.6.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.6-.7 1.1-1.2 1.6-.5.5-1 .9-1.6 1.2-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1.1-.7-1.6-1.2-.5-.5-.9-1-1.2-1.6-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.6.7-1.1 1.2-1.6.5-.5 1-.9 1.6-1.2.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1 5.6.1 4.6.3 3.7.7 2.7 1.1 1.9 1.6 1.2 2.3.5 3 .1 3.7.1 5 .1 6.3 0 6.7 0 12s.1 5.7.1 7c0 1.3.4 2 .7 2.7.6.7 1.2 1.2 2.3 1.6 1 .4 2 .6 3.3.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3 0 2.3-.2 3.3-.6 1.1-.4 1.7-.9 2.3-1.6.3-.7.7-1.4.7-2.7.1-1.3.1-1.7.1-5s0-3.7-.1-5c0-1.3-.4-2-.7-2.7-.6-.7-1.2-1.2-2.3-1.6-1-.4-2-.6-3.3-.6C15.7 0 15.3 0 12 0zm0 5.8A6.2 6.2 0 0 0 5.8 12 6.2 6.2 0 0 0 12 18.2 6.2 6.2 0 0 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.8a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InstagramCarousel;
