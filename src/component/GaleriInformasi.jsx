import React from "react";

const GaleriInformasi = () => {
  const galleryItems = [
    "/info-ppdb-2.png", // oop untuk gambar yg akan di render
    "/info-ppdb-1.png",
    "/info-ppdb-3.png",
  ];

  return (
    <section className="px-6 py-16 flex flex-col items-center text-center">
      <div className="w-[90%] bg-gray-100 rounded-2xl shadow-md p-8 flex flex-col items-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Galeri Informasi
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {galleryItems.map((src, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden 
                         w-full sm:w-64 md:w-72"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="px-6 py-2 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition">
            Cek Pendaftar!
          </button>
        </div>
      </div>
    </section>
  );
};

export default GaleriInformasi;
