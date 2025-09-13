import React from 'react'

const ytProfileSection = () => {
  const profileSection=[
    {
      heading:'',
      paraghraph:'',
      btn1:'',
      btn2:'',
    }
  ]
  return (
    <div>
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

export default ytProfileSection