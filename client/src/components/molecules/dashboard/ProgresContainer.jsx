import React from 'react'

const ProgresContainer = ({data}) => {
  const {title, color, box} = data;

  return (
    <div className=' w-80 bg-white rounded-md shadow-md'>
        <h1 className="p-6 font-bold rounded-t-lg" style={{ backgroundColor: color }}>{title}</h1>
        <p className='rounded-lg m-4'>{box}</p>
    </div>
  )
}

export default ProgresContainer