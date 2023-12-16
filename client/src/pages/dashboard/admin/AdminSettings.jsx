import React from 'react'
import AdminSettingsNav from '../../../components/molecules/dashboard/AdminSettingsNav'
import Button from '../../../components/molecules/global/Button'
import { Outlet } from 'react-router-dom'

const AdminSettings = () => {
    return (
        <>
            <div>
                <AdminSettingsNav />
                {/* <form className='border border-0 grid grid-cols-1 gap-y-6 justify-center md:grid-cols-2 md:gap-x-8 lg:gap-x-14 lg:px-12 px-8 pt-14 pb-20 bg-[--white-bg]'>
                    
                    <input type="text" name="" id="" placeholder='Mutual Funds' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none md:h-[3.625rem]' />

                    <input type="text" name="" id="" placeholder='AdminMutualFund' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none' />

                    <input type="email" name="" id="" placeholder='mutual-funds@mail.io' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                    <input type='text' name="" id="" className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                    <input type="email" name="" id="" placeholder='Address' className='border border-[--form-border-bg] w-72 md:w-96 px-3 py-2 md:text-xl md:h-[3.625rem] lg:w-auto lg:col-span-2 rounded-md focus:border-[--blue-bg] focus:outline-none' />

                    <input type="phone" name="" id="" placeholder='090 45678900' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                    <input type="text" name="" id="" placeholder='CAC/Mutual-Funds/090/NG/311' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                    <input type='text' placeholder='Pro Plan' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                    <input type="text" name="" id="" placeholder='40,000,000 portfolio' className='w-72 border border-[--form-border-bg] md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />
                    <div className='lg:w-full text-center col-span-2 lg:justify-center'>
                        <Button description={'Save'} width={'w-[8rem]'} fontSize={'text-[1.5rem]'} />
                    </div>

                </form> */}
                <Outlet />

            </div>
        </>
    )
}

export default AdminSettings
