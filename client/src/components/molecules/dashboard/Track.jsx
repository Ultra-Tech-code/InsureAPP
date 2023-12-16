import React from 'react'

const Track = (props) => {
  const {topic} = props
  return (

    <div className="flex flex-col container mx-auto w-full mb-8">
    <h2 className='items-left m-4 text-2xl text-black'>{topic}</h2>
    <table className="bg-white rounded-md align-middle">
      <thead className="rounded-md">
        <tr className="text-grey-900 pt-6 font-black">
          <th className=''>S/N</th>
          <th className=''>Policy No.</th>
          <th className=''>Name</th>
          <th className=''>Date</th>
          <th className=''>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr className='border-b pl-14'>
          <td className='pl-14'>1</td>
          <td className='pl-14'>MT/223/1092</td>
          <td className='pl-14'>Ese Vic</td>
          <td className='pl-14'>27/05/2023</td>
          <td className='pl-14'>Active</td>
        </tr>
        <tr className='border-b pl-14'>
          <td className='pl-14'>2</td>
          <td className='pl-14'>MT/223/1093</td>
          <td className='pl-14'>Adewale Oluwakemi</td>
          <td className='pl-14'>27/05/2023</td>
          <td className='pl-14'>Active</td>
        </tr>
        <tr className='border-b pl-14'>
          <td className='pl-14'>3</td>
          <td className='pl-14'>MT/223/1094</td>
          <td className='pl-14'>Effiong Leo</td>
          <td className='pl-14'>28/05/2023</td>
          <td className='pl-14'>Active</td>
        </tr> */}
      </tbody>
    </table>
  </div>

  )
}

export default Track