import React from 'react'
import Button from '../global/Button'

const AdminPayment = () => {
    return (
        <>
            <form action="" className='border border-0 grid grid-cols-1 gap-y-6 justify-center md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-14 lg:px-12 px-8 pt-10 pb-14 bg-[--white-bg]'>
                <h1 className='text-center font-bold text-[1.5rem] col-span-3'>Billing</h1>

                {/* Input elements */}
                <input type="text" name="" id="" placeholder='Billing Address' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none col-span-3 md:h-[3.625rem]' />

                <h1 className='text-center font-bold text-[1.5rem] col-span-3'>Payment Frequency</h1>

                <div className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6'>
                    <input type="radio" name="month" id="monthly" />
                    <label htmlFor="monthly">Monthly</label>
                </div>

                <div className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6'>
                    <input type="radio" name="month" id="monthly" />
                    <label htmlFor="monthly">Quaterly</label>
                </div>

                <div className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6'>
                    <input type="radio" name="month" id="monthly" />
                    <label htmlFor="monthly">Yearly</label>
                </div>

                <h1 className='text-center font-bold text-[1.5rem] col-span-3'>Invoicing Preference</h1>
                
                <div className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6'>
                    <input type="radio" name="month" id="monthly" />
                    <label htmlFor="monthly">Email</label>
                </div>

                <div className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6'>
                    <input type="radio" name="month" id="monthly" />
                    <label htmlFor="monthly">Push</label>
                </div>
                
                <div className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6'>
                    <input type="radio" name="month" id="monthly" />
                    <label htmlFor="monthly">Both</label>
                </div>

                <div className='lg:w-full text-center col-span-3 lg:justify-center'>
                    <Button description={'Save'} width={'w-[8rem]'} fontSize={'text-[1.5rem]'} />
                </div>
            </form>
        </>
    )
}

export default AdminPayment
