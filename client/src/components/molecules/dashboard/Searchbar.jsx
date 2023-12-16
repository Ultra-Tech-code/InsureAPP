import React, { useState } from 'react'
import Button from '../global/Button'


const Searchbar = (props) => {
    const profile = props.data;
    const keyword = props.keyword;
    const onUpdateData = props.onUpdateData;

    


    const handleSearch = (event) => {
        let input = event.target.value.toLowerCase();
        
        // const searchResult = profile.find((person) => person[keyword] === event.target.value);
        const searchResult = profile.filter((person) =>  person[keyword].toLowerCase().includes(input));
        onUpdateData(searchResult);
    };



    const btnIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>'
    return (
        <>
            <form className='flex flex-col  lg:flex-row lg:flex-wrap lg:justify-between w-full items-center gap-10 rounded-md bg-[--white-bg] mt-5 px-10 py-5 mb-5'>
                {/* Search bar */}
                <div className='flex justify-center items-center gap-4 border border-[--form-border-bg] rounded-3xl px-2 lg:pl-4 lg:pr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 border-0">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>

                    <input type="search" name="" id="" placeholder={`Search with ${keyword}..`} className='w-[12rem] lg:w-[15rem] rounded-xl py-3 pl-2 focus:outline-none' onChange={handleSearch}/>
                </div>
                {/* Select input and button */}
                <div className='flex flex-col items-center justify-center lg:flex-row gap-8 lg:gap-[7rem]'>

                    <div className="relative inline-block w-60 self-center">
                        <select className="block appearance-none w-full bg-white border border-[--form-border-bg] hover:border-gray-500 pr-3 py-3 rounded-xl text-lg leading-tight focus:outline-none focus:border-[--blue-bg] text-center">
                            <option defaultValue={''}>select data range</option>
                            <option value={7}>1 - 7</option>
                            <option value={14}>8 - 14</option>
                            <option value={21}>15 - 21</option>
                            <option value={31}>21 - 31</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            {/* <!-- Dropdown arrow icon (you can use an SVG or another icon library) --> */}
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" /></svg>
                        </div>
                    </div>
                    {/* <button type='button' className='bg-[--orange-bg] px-4 py-2 rounded-lg text-white flex'>
                        

                        Add New
                    </button> */}
                    {/* <Button description={"Add New"} icon={btnIcon} /> */}
                </div>
            </form>
        </>
    )
}

export default Searchbar
