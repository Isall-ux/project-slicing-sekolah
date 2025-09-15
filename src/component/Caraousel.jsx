import React, { useState, useEffect } from 'react';

const Caraousel = () => {
  const carouselItems = [
    {
      id: 1,
      src: '/Kum.jpeg',
      alt: 'Kum',
      title: 'Yuk daftar sekarang',
      heading: 'SELAMAT DATANG',
      text: 'DI WEBSITE SMK YADIKA SOREANG',
      link: 'https://smkyadikasoreang.sch.id/ppdb'
    },
    {
      id: 2,
      src: '/IHT.jpeg',
      alt: 'IHT',
      title: 'Lihat PPDB',
      heading: 'TELAH DI BUKA',
      text: 'PENERIMAAN PESERTA DIDIK BARU TAHUN AJARAN 2024-2025',
      link: 'https://smkyadikasoreang.sch.id/ppdb'
    },
    {
      id: 3,
      src: '/lobi.jpeg',
      alt: 'Lobi yadika',
      title: 'Lihat PPDB  ',
      heading: 'SMK YADIKA SOREANG',
      text: 'SEKOLAH SWASTA DENGAN FASILITAS PEMBELAJARAN YANG LENGKAP',
      link: 'https://smkyadikasoreang.sch.id/ppdb'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // menyetel interval agar slide berganti setiap 5 detik
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);

    // membersihkan interval saat componnent keluar
    return () => clearInterval(interval);
  }, [carouselItems.length]); // mengulang efek interval jika nomer item berubah

  // Function untuk navigasi kepada slide berikutnya
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  // Function untuk navigasi kepada slide sebelumnya
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      (prevSlide - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="bg-slate-900 w-screen flex items-center justify-center p-0">
      <div className="relative w-full max-w-screen-xl overflow-hidden rounded-none shadow-2xl max-h-[400px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 relative h-56 xs:h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                style={{ zIndex: 0 }}
              />
              <div className="flex w-full h-full gap-2 sm:gap-3 flex-col items-center justify-center text-center absolute top-0 left-0 px-2 sm:px-4" style={{ zIndex: 1 }}>
                {item.heading && (
                  <h1 className="text-white font-bold text-2xl lg:text-4xl drop-shadow-md">{item.heading}</h1>
                )}
                {item.text && (
                  <p className='text-white text-[10px] md:text-sm drop-shadow-md'>{item.text}</p>
                )}
                <a
                  className="inline-block text-white rounded-sm border border-blue-600 bg-blue-600 px-6 sm:px-12 py-2 sm:py-3 text-xs sm:text-sm font-medium mt-2"
                  href={item.link}
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 text-white p-1 sm:p-2 md:p-4 rounded-full z-10"
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

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 text-white p-1 sm:p-2 md:p-4 rounded-full z-10"
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
