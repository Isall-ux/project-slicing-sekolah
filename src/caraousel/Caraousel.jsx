import React, { useState, useEffect } from 'react';

// The main App component containing the carousel logic and UI.
const Caraousel = () => {
  // Array of carousel items. In a real-world app, you might fetch this data.
  const carouselItems = [
    {
      id: 1,
      src: '/Kum.jpeg',
      alt: 'Kum',
      title: 'PPDB',
      heading: 'SMK YADIKA SOREANG'
    },
    {
      id: 2,
      src: '/IHT.jpeg',
      alt: 'IHT',
      title: 'PPDB'
    },
    {
      id: 3,
      src: '/lobi.jpeg',
      alt: 'Lobi yadika',
      title: 'Yuk daftar sekarang'
    },
  ];

  // State to keep track of the current slide index.
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play feature using useEffect.
  useEffect(() => {
    // Set an interval to advance the slide every 5 seconds.
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);

    // Clean up the interval when the component unmounts.
    return () => clearInterval(interval);
  }, [carouselItems.length]); // Re-run effect if the number of items changes.

  // Function to navigate to the next slide.
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  // Function to navigate to the previous slide.
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="bg-slate-900 w-screen flex items-center justify-center p-0">
      <div className="relative w-screen overflow-hidden rounded-none shadow-2xl max-h-[400px]">
        {/* The main container for all carousel slides. */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-screen flex-shrink-0 relative h-56 xs:h-64 sm:h-80 md:h-96 lg:h-[400px]">
              <img
                src={item.src}
                alt={item.alt}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                style={{ zIndex: 0 }}
              />
              <div className="flex w-full h-full gap-2 sm:gap-3 flex-col items-center justify-center text-center absolute top-0 left-0 px-2 sm:px-4" style={{ zIndex: 1 }}>
                {item.heading && (
                  <h1 className="text-white font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-md">{item.heading}</h1>
                )}
                <a
                  className="inline-block text-white rounded-sm border border-blue-600 bg-blue-600 px-6 sm:px-12 py-2 sm:py-3 text-xs sm:text-sm font-medium mt-2"
                  href="#"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-40 text-white p-1 sm:p-2 md:p-4 rounded-full transition-colors backdrop-blur-sm z-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="/arrow_back_ios.svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-opacity-20 hover:bg-opacity-40 text-white p-1 sm:p-2 md:p-4 rounded-full transition-colors backdrop-blur-sm z-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="/arrow_forward_ios.svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-gray-400 opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
