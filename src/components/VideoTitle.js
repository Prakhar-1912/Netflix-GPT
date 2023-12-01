import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black'>
      <h2 className='text-6xl font-bold'>{title}</h2>
      <p className='text-lg w-1/3 py-6'>{overview}</p>
      <div>
        <button className='bg-white px-10 p-2 text-black rounded-lg mx-2 hover:bg-opacity-80 '>Play</button>
        <button className='bg-gray-500 px-10 p-2 text-white rounded-lg bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle