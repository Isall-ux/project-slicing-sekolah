import React from 'react'

const SambutanSection = () => {
  return (
    <section className="w-[90%] mx-auto my-10 p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
        
        {/* Left - Image */}
        <div className="flex-shrink-0">
          <img
            src="/lead.png"
            alt="Kepala Sekolah"
            className="w-48 h-48 md:w-104 md:h-104 rounded-full object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="text-center md:text-left w-full md:w-[80%]">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Sambutan Kepala Sekolah
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-justify text-sm md:text-base">
            Assalammualikum Wr.Wb. Om Swastiastu Namo Budaya Salam Kebajikan Rahayu. 
            Puji syukur kita panjatkan kehadirat Tuhan Yang Maha Esa atas segala rahmat 
            dan karunia-Nya sehingga kita dapat terus menjalankan tugas mulia dalam 
            mencerdaskan kehidupan bangsa. Kami mengucapkan selamat datang di website resmi 
            SMK Yadika Soreang, yang merupakan media informasi dan komunikasi yang diharapkan 
            mampu memenuhi kebutuhan informasi seputar kegiatan dan prestasi sekolah kami.
            Saya mengajak seluruh guru, siswa, orang tua, dan alumni untuk turut serta dalam 
            mengisi dan mengembangkan website ini yang dapat memberikan masukan dan saran 
            yang konstruktif agar website ini dapat menjadi lebih baik lagi. Mari kita bersama-sama 
            menjadikan website ini sebagai wadah untuk berkreasi dan berinovasi dalam dunia pendidikan.
        </p>
        <p className="font-semibold">Salam, Yetti Nuraini, S.Pd., Gr.</p>
        </div>
      </div>
    </section>
  )
}

export default SambutanSection