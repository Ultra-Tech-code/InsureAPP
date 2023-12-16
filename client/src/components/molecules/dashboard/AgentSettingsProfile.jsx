import React from 'react'

export const AgentSettingsProfile = () => {
  return (
    <div>
      <form className='border border-0 rounded-lg grid grid-col-1 gap-y-4 justify-center md:grid-cols-2 md:gap-x-8 lg:gap-x-14 lg:px-12 px-8 pt-14 pb-16 bg-[--white-bg] '>
                {/* Input elements */}
                <input type="text" name="" id="" placeholder='Last Name' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none md:h-[3.625rem]' />

                <input type="text" name="" id="" placeholder='Firstname' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <input type="email" name="" id="" placeholder='divine.mutuals@gmail.com' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <select name="" id="" className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none'>
                    <option value="" selected>Select gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Prefer not to say</option>
                </select>
                <input type="email" name="" id="" placeholder='Address' className='border border-[--form-border-bg] w-72 md:w-96 px-3 py-2 md:text-xl md:h-[3.625rem] lg:w-auto lg:col-span-2 rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <input type="phone" name="" id="" placeholder='Phone Number' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <input type="date" name="" id="" className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <select className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none'>
                    <option value="">Sales Executive</option>
                </select>
                <input type="text" name="" id="" placeholder='Duration' className='w-72 border border-[--form-border-bg] md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />
            </form>
    </div>
  )
}
