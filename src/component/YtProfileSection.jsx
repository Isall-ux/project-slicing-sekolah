import React from 'react'

const YtProfileSection = () => {
  const profileSection=[
    {
      id:'item',
      heading:'SMK YADIKA SOREANG',
      paraghraph:'',
      mobileLogo:'',
      btn1:'',
      btn2:'',
    }
  ]
  return (
    <div className='flex flex-col gap-5 mt-32 mb-32'>
      {profileSection.map((item)=>(
        <div key={item.id}>
          <p className='font-bold text-5xl'>{item.heading}</p>
        </div>
      ))}
      <div className="relative w-[470px] h-[225px]">
        <iframe
          src="https://www.youtube.com/embed/ubTDTZYQq6I?autoplay=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          title="YouTube video"
        />
      </div>
    </div>
  )
}

export default YtProfileSection