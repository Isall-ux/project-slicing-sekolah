import React from 'react'

const Footer = () => {

  // looping untuk generasi otomatis tombol/gambar media sosial melalui oop(object oriented programing)
  const mediaSosial =[
  {
    img:'/instagram.png',
    alt:'insta',
    link:'https://www.instagram.com/smkyadikasoreangofficial/'
  },
  {
    img:'/whatsapp.png',
    alt:'wa',
    link:'https://api.whatsapp.com/send/?phone=08112228128&text&type=phone_number&app_absent=0'
  }
]
  return (
    <footer className="p-6 text-white bg-blue-800 w-full flex items-center justify-between">
      <div className="flex-1 flex justify-center order-1 sm:order-none">
        <p className="text-center">All rights reserve to SMK YADIKA SOREANG 2025 Ltd.</p>
      </div>
      <div className="flex flex-row space-x-3 order-2">
        {/*
          menggunakan fungtion map untul meghitung setiap array lalu mengambil value dari array tersbut menjadi html biasa
        */}
        {mediaSosial.map((item) => (
          <a href={item.link} key={item.link} target="_blank" rel="noopener">
            <img src={item.img} alt={item.alt} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer