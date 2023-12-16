import React, { useState, useEffect } from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import Button from './Button'
import '../../../styles/style.css'



const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isMenuOpen, setMenuOpen] = useState(false)

    const location = useLocation();

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    useEffect(() => {
        // Update active link based on the current location
        const pathnameParts = location.pathname.split('/');
        const lastPathname = pathnameParts[pathnameParts.length - 1];
        setActiveLink(lastPathname);
        console.log(activeLink)
    }, [location]);
    

    const toggleMenu = (bool) => {
        setMenuOpen(bool)
    }

    const navigate = useNavigate();

    const handleLoginChange = (value) => {
        if (value === 'admin') {
            navigate('/auth/admin/login');
        } else if (value === 'agent') {
            navigate('/auth/agent/login');
        }
    };


    const description = "Get Started"
    const fontSize = "md:text-[1.125rem]"
    const width = "0"
    const route = "/auth/admin/registration"

    return (
        <div>
            <nav className="fixed w-full z-20 transition duration-500 ease-in-out py-[15px] bg-[--black-bg] h-auto]">
                <div className="flex flex-wrap items-center justify-between mx-auto p-0 w-[90%]">
                    {/* Logo */}

                    <img id="myImage" src="https://res.cloudinary.com/blackadam/image/upload/v1700189072/Insure/Insure-logo_lydorc.png" alt="Logo" className='w-24 h-16' />


                    {/* Hamburger icon */}
                    {/* <button 
                    onClick={() => toggleMenu(true)}
                    className={`${isMenuOpen ? 'hidden': 'block'} inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-[--Orange4] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    </button> */}
                    <button
                        onClick={() => toggleMenu(true)}
                        data-collapse-toggle="navbar-dropdown" type="button"
                        className={`${isMenuOpen ? 'hidden' : 'block'} inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-[--Orange4] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`} aria-controls="navbar-dropdown" aria-expanded="false">

                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Cancel button */}
                    <button
                        onClick={() => toggleMenu(false)}
                        className={`${isMenuOpen ? 'block' : 'hidden'} text-white md:hidden`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Navbar drop down */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block md:w-auto lg:bg-transparent text-lg" id="navbar-dropdown`}>
                        <div>
                            <ul className="flex flex-col lg:items-center font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-[3.5rem] md:mt-0 md:mr-0 lg:space-x-[4rem] lg:mr-22 ">
                                {/* Home */}
                                <li className='md:self-center'>
                                    <Link to="/"

                                        onClick={() => handleLinkClick('')}
                                        className={`link block py-2 pl-3 pr-4 rounded text-[--white-text] text-base md:hover:bg-transparent hover:text-[--orange-hover] md:p-0 dark:text-[--white-text] dark:hover:bg-gray-700  md:dark:hover:bg-transparent md:text-[1.125rem] ${activeLink === '' ? 'md:border-0 md:border-b-[--orange-bg] md:border-b-2 md:text-xl md:transition-all md:duration-75 md:pb-1 md:no-underline' : ''}`} aria-current="page">Home</Link>
                                </li>
                                {/* About */}
                                <li className='md:self-center'  >
                                    <Link to="/about"
                                        onClick={() => handleLinkClick('about')} 
                                        className={`link block py-2 pl-3 pr-4 rounded text-[--white-text] hover:bg-[ --Blue2] text-base md:hover:bg-transparent md:border-0 hover:bg-[--orange-hover] md:p-0 dark:text-white md:dark:hover:text-[--orange-hover] md:dark:hover:bg-transparent md:text-[1.125rem] ${activeLink === 'about' ? 'md:border-0 md:border-b-[--orange-bg] md:border-b-2 md:text-xl md:transition-all md:duration-75 md:pb-1 md:no-underline' : ''}`}>About</Link>
                                </li>
                                {/* Contact */}
                                <li className='md:self-center'>
                                    <Link to="/contact"
                                        onClick={() => handleLinkClick('contact')}
                                        className={`link block py-2 pl-3 pr-4 rounded text-[--white-text] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--orange-hover] md:p-0 dark:text-white md:dark:hover:text-[--orange-hover] dark:hover:bg-gray-700 dark:hover:text-[--orange-hover] md:dark:hover:bg-transparent md:text-[1.125rem] ${activeLink === 'contact' ? 'md:border-0 md:border-b-[--orange-bg] md:border-b-2 md:text-xl md:transition-all md:duration-75 md:pb-1 md:no-underline' : ''}`}>Contact</Link>
                                </li>
                                {/* Pricing */}
                                <li className='md:self-center'>
                                    <Link to="/pricing"
                                        onClick={() => handleLinkClick('pricing')}
                                        className={`link block py-2 pl-3 pr-4 rounded text-[--white-text] text-base md:hover:bg-transparent md:border-0 hover:text-[--orange-hover] md:p-0 dark:text-white md:dark:hover:text-[--orange-hover] md:dark:hover:bg-transparent md:text-[1.125rem]
                                    ${activeLink === 'pricing' ? 'md:border-0 md:border-b-[--orange-bg] md:border-b-2 md:text-xl md:transition-all md:duration-75 md:pb-1 md:no-underline' : ''}`} >Pricing</Link>
                                </li>
                                {/* Features */}
                                <li className='md:self-center'>
                                    <Link to="/features"
                                        onClick={() => handleLinkClick('features')}
                                        className={`link block py-2 pl-3 pr-4 rounded text-[--white-text] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--orange-hover] md:p-0 dark:text-white md:dark:hover:text-[--orange-hover] dark:hover:text-white md:dark:hover:bg-transparent md:text-[1.125rem] 
                                    ${activeLink === 'features' ? 'md:border-0 md:border-b-[--orange-bg] md:border-b-2 md:text-xl md:transition-all md:duration-{10ms} md:pb-1 md:no-underline' : ''}`}>Features</Link>
                                </li>
                                {/* Buttons */}
                                <div className="flex md:flex-col space-x-6 mt-4 md:mt-0 md:space-x-0 md:space-y-1 lg:flex-row lg:space-x-6">
                                    {/* Login */}
                                    {/* <button className="bg-[--black-bg] border border-[--white-bg] text-[--white-text] py-0 md:py-3 px-10 rounded-[8px] hover:bg-[--white-bg] hover:text-[--orange-hover] md:self-center md:text-[1.125rem]">
                                        <Link to="/auth/admin/login">
                                            Log-In
                                        </Link>
                                    </button> */}

                                    <div className='relative w-[8rem] h-14 rounded-[8px] md:self-center mt-1.5 md:mt-2 font-bold'>
                                        <select name="" id="" className='appearance-none w-full py-3 text-[1.125rem] pl-4 rounded-md border border-[--form-border-bg] focus:outline-none'
                                            onChange={(e) => handleLoginChange(e.target.value)}
                                        >
                                            <option value="Login" className='hidden' disabled selected>Log-In</option>
                                            <option value="admin" className=''>
                                                Admin
                                            </option>
                                            <option value="agent" className='' >Agent</option>
                                        </select>
                                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6'>
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" /></svg>
                                        </div>
                                    </div>

                                    {/* Get started */}
                                    {/* <button className="bg-[#e76927] text-white py-3 px-6 rounded-[8px m-2 hover:bg-[#ffa074] hover:text-[--White0] lg:text-[1.5rem]">
                                        <Link to="/admin-signup-1">
                                            Get Started
                                        </Link>
                                    </button> */}
                                    <Button description={description} width={width} fontSize={fontSize} route={route} />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
