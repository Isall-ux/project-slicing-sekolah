import React from 'react'

const JurusanSection = () => {
  return (
    <section className="py-12 px-4 flex">
      <div className="max-w-6xl mx-auto text-center bg-gray-100 w-[90%] p-6 rounded-2xl outline-2 outline-offset-2 outline-blue-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Jurusan Apa Yang Tersedia?
        </h2>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center h-full">
            <img src="/account.png" alt="Akuntansi" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Akuntansi</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Jurusan Akuntansi merupakan bidang studi yang mempelajari tentang metode
              pencatatan serta penyusunan laporan keuangan.
            </p>
            <a
              href="https://smkyadikasoreang.sch.id/Jurusan/akuntansi"
              className="mt-auto px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition inline-block"
            >
              More
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center h-full">
            <img src="/software-engineer.png" alt="PPLG" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Pemograman Perangkat Lunak Dan Gim
            </h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Jurusan ini berfokus pada produksi dan pengembangan perangkat lunak dan gim.
            </p>
            <a
              href="https://smkyadikasoreang.sch.id/Jurusan/pplg"
              className="mt-auto px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition inline-block"
            >
              More
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center h-full">
            <img src="/pin.png" alt="Perhotelan" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Perhotelan</h3>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              Jurusan Perhotelan mempelajari pengelolaan hotel serta cara menyeimbangkan
              aspek wisata dan manajemen bisnis untuk kesuksesan.
            </p>
            <a
              href="https://smkyadikasoreang.sch.id/Jurusan/perhotelan"
              className="mt-auto px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition inline-block"
            >
              More
            </a>
          </div>

        </div>

        <div className="mt-12">
          <div className="bg-white shadow-md rounded-lg px-6 py-3 inline-block">
            <p className="text-gray-700 font-medium">Jumlah Pengunjung: 368</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JurusanSection