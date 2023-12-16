import React from 'react'

const SalesBox = (data) => {
    const {title, price, growth} = data;
  return (
    <div className="bg-white text-gray-900 p-4 flex justify-between rounded-md">
        <div>
            <p className='pb-2 text-2xl'> {title} </p>
            <p className='inline-block font-bold text-3xl'>{price}</p> <span className='inline'>{growth}</span>
        </div>

        <div>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
            </svg>
            </p>
        </div>

    </div>
  )
}

export default SalesBox