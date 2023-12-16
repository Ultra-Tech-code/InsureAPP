import React from 'react'
import Button from '../global/Button'

const AdminSecurity = () => {
  return (
   <>
        <form action="" className='border border-0 grid grid-cols-1 gap-y-6 justify-center md:grid-cols-2 md:gap-x-8 lg:gap-x-14 lg:px-12 px-8 pt-10 pb-14 bg-[--white-bg]'>
                <h1 className='text-center font-bold text-[1.5rem] col-span-2'>Password Settings</h1>
                {/* Input elements */}
                <input type="password" name="" id="" placeholder='Change password' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none md:h-[3.625rem]' />

                <input type="password" name="" id="" placeholder='Confirm password' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none' />
                

                <h1 className='text-center font-bold text-[1.5rem] col-span-2'>Account Recovery</h1>

                <input type="email" name="" id="" placeholder='Enter account recovery email' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl lg:col-span-2 rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <input type="email" name="" id="" placeholder='Confirm account recovery email' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl lg:mt-3 lg:col-span-2 rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <div className='lg:w-full text-center md:mt-3 col-span-2 lg:justify-center'>
                    <Button description={'Save'} width={'w-[8rem]'} fontSize={'text-[1.5rem]'} />
                </div>
            </form>
   </>
  )
}

export default AdminSecurity
