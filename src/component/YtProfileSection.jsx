import React from 'react'

const YtProfileSection = () => {
  return (
    <section className="bg-gray-50 flex flex-col px-6 lg:px-20 py-16 gap-10">
      {/* Top Content */}
      <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start">
        {/* Logo only on mobile */}
        <img
          src="https://smkyadikasoreang.sch.id/Assets/img/logo/logo yadika.png"
          alt="SMK Yadika Soreang Logo"
          className="w-20 h-20 mb-4 block lg:hidden"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          SMK Yadika Soreang
        </h1>
        <p className="mt-4 text-gray-600 max-w-lg">
          Sekolah Menengah Kejuruan yang memiliki 3 jurusan yaitu Perhotelan,
          Pemograman Perangkat Lunak dan Gim, dan Akutansi yang memiliki
          fasilitas mewah dengan harga terjangkau.
        </p>

        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="px-6 py-2 border-2 border-blue-700 text-blue-700 rounded-full font-medium hover:bg-blue-700 hover:text-white transition">
            Contact Us
          </button>
          <button className="px-6 py-2 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition">
            Our School
          </button>
        </div>
      </div>

      {/* Bottom Content (YT Video) */}
      <div className="w-full max-w-2xl mx-auto lg:mx-0">
        <iframe
          className="rounded-lg shadow-lg w-full aspect-video"
          src="https://www.youtube.com/embed/n1eQ2-nfFQ0" 
          title="SMK Yadika Soreang Profile"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default YtProfileSection