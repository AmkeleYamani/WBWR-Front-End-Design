import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import InstagramCarousel from "./components/InstagramCarousel";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <VideoSection />
      <InstagramCarousel />
      <Footer/>
      <main className="p-6">
        {/* Carousel or more content next */}
      </main>
    </div>
    
  );
}

export default App;
