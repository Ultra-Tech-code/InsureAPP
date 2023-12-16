import React from 'react'
import Button from '../global/Button'

const AdminDeleteAccounts = () => {
    return (
        <>
            <form className='border border-0 grid grid-col-1 gap-y-6 justify-center md:grid-cols-2 md:gap-x-8 lg:gap-x-14 lg:px-12 px-8 pt-14 pb-20 bg-[--white-bg]'>
                {/* Input elements */}
                <div className='col-span-2 flex flex-col md:flex-row justify-around'>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-red-800">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>

                    </div>

                    <div>
                        <h2>Deleting your account</h2>
                        <ul className='list-disc ml-8'>
                            <li>Permanently remove access to cusomer data and policy information</li>
                            <li>Revoke system access for team members who no longer require it.</li>
                            <li>Require compliance with termination procedure outlined in contracts and agreements</li>
                            <li>Permanently remove access to customer data and policy information</li>
                            <li>Revoke system access for team members who no longer require it.</li>
                            <li>Require compliance with termination procedure oulined in contracts and agreements</li>
                        </ul>
                    </div>
                </div>

                <input type="email" name="" id="" placeholder='Enter your email' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <input type="email" name="" id="" placeholder='Confirm email' className='border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl md:h-[3.625rem] rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <input type="password" name="" id="" placeholder='Enter password' className='border border-[--form-border-bg] w-72 md:w-96 px-3 py-2 md:text-xl md:h-[3.625rem] lg:w-auto rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <input type="password" name="" id="" placeholder='Confirm password' className='border border-[--form-border-bg] w-72 md:w-96 px-3 py-2 md:text-xl md:h-[3.625rem] lg:w-auto rounded-md focus:border-[--blue-bg] focus:outline-none' />

                <div className='lg:w-full text-center col-span-2 lg:justify-center flex gap-10 mt-5'>
                    <Button description={'Transfer Admin'} width={'w-[15rem]'} fontSize={'text-[1.5rem]'} />
                    <Button description={'Delete Account'} width={'w-[15rem]'} fontSize={'text-[1.5rem]'} />
                </div>
            </form>
        </>
    )
}

export default AdminDeleteAccounts
