import React from 'react'
import Button from './Button'
import { SocialIcon } from 'react-social-icons'
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  const description = "Talk to Sales"
  const fontSize = "text-[1.5rem]"
  const width = "w-[15rem]"
  const route = "/sales"

  return (
    <>

      <footer className='w-full bg-[--lavender-bg] lg:relative h-[100vh]'>
        {/* Center div */}
        <div className='bg-[--white-bg] lg:left-[12%] lg:right-[12%] lg:px-[10rem] lg:absolute lg:z-10 flex flex-col justify-center items-center py-12 m-auto'>
          <h1 className='text-center mb-5 text-[2rem] font-bold'>Welcome to your new digital HQ</h1>

          {/* <button className='bg-[--orange-bg] text-[--white-bg] px-16 py-3 rounded-lg text-[1.5rem]'>Talk to Sales</button> */}
          <Button
            description={description}
            width={width}
            fontSize={fontSize}
            route={route}
          />
        </div>

        <div>

        </div>
        {/* Dark section */}
        <div className="bg-[--black-bg]">
          {/* Children 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-10 pt-10 text-[--white-text] bg-[--black-bg] lg:px-12 px-12 pb-14 lg:absolute lg:top-[6rem] lg:pt-[9rem] lg:left-0 lg:right-0">
            <div className="flex flex-col justify-center items-center lg:items-start gap-5 lg:mt-10">
              <img src="https://tinyurl.com/3wuh45ve" alt="INsure Logo" />

              <p className='w-[20rem] text-left text-[1.1rem]'>With INsure - Elevate your insurance sales with our streamlined management tool. Boost productivity, enhance customer interactions, and insure success effortlessly.</p>
            </div>

            {/* children 2 */}
            <div className='flex flex-col gap-4 items-center lg:items-start justify-start lg:mt-14'>
              <h1 className='text-[1.5rem] font-bold border border-0 hover:border-b-4 hover:border-[--orange-bg] pb-2'>Quick Links</h1>
              <ul className='flex flex-col gap-4 text-[1.1rem] list-none'>
                <li className='list-none'>Home</li>
                <li className='list-none'>About Us</li>
                <li className='list-none'>Pricing</li>
              </ul>
            </div>
            {/* Child 3 */}
            <div className='flex flex-col gap-4 items-center lg:items-start justify-start lg:mt-14'>
              <h1 className='text-[1.5rem] font-bold border border-0 hover:border-b-4 hover:border-[--orange-bg] pb-2'>Quick Links</h1>
              <ul className='flex flex-col gap-4 text-[1.1rem]'>

                <li>Features</li>
                <a to="/AgentTasks">Dashboard</a>
              </ul>
            </div>

            {/* Child 4 */}
            <div className='flex flex-col gap-5 items-center lg:items-start justify-start lg:mt-14'>
              <h1 className='text-[1.5rem] font-bold border border-0 hover:border-b-4 hover:border-[--orange-bg] pb-2'>Download our App</h1>
              <p className='text-[1.1rem] w-[15rem]'>Get access to exclusive updates and features</p>
              <div className='flex gap-5 text-[1.1rem] mr-10'>
                <button className='border border-white px-5 rounded-lg font-thin flex'>
                  <FaApple className='font-bold text-[1.5rem] mr-2 self-center' />
                  <span className='flex flex-col'>
                    <span>Download on </span>
                    <span className='font-bold'>App Store</span>
                  </span>
                </button>
                {/* Play store */}
                <button className='border border-white px-5 rounded-lg font-thin flex'>
                  <FaGooglePlay className='font-bold text-[1.5rem] mr-2 self-center' />
                  <span className='flex flex-col'>
                    <span>Download on </span>
                    <span className='font-bold'>Google Play</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Child 2 */}
          <div className='bg-[--black-bg] text-[--white-bg] lg:w-full lg:absolute lg:top-[90%]'>
            <div className='border border-0 border-t-2 py-8 flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-5 bg-[--black-bg] lg:mx-[3rem]'>
              <p className='text-center'>&copy; 2023. All Right Reserved. INSure Technologies. A Salesforce Company</p>
              <div className='flex gap-3 self-center'>
                <span><SocialIcon url="https://x.com" /></span>
                <span><SocialIcon bgColor='black' url="https://instagram.com" /></span>
                <span><SocialIcon bgColor='black' url="https://facebook.com" /></span>
                <span><SocialIcon bgColor='black' url="https://youtube.com" /></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
