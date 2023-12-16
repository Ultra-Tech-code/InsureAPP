import React from "react";

const DropDownMenu = ({ data, id }) => {
  const { actionState, defaultdata } = data;

  function showDropdownOptions() {
    document.getElementById( `options-${id}`).classList.toggle("hidden");
    //document.getElementById("arrow-up").classList.toggle("hidden");
    //document.getElementById("arrow-down").classList.toggle("invisible");
  }

  return (
    <div className="flex flex-row justify-center ">
      <div className="flex-none relative">
        <button
          onClick={showDropdownOptions}
          className="flex flex-row gap-x-2 px-3 py-2 justify-center items-center mt-5 text-gray-700 bg-[--orange-bg] rounded-md focus:outline-none focus:border-blue-600 "
        >
          <span className="select-none text-white">Actions</span>

          {/* <svg id="arrow-down" className="hidden w-6 h-6 stroke-white fill-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            <svg id="arrow-up" className="w-6 h-6 stroke-white fill-white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            id="arrow-down"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <div
          id={`options-${id}`}
          className="hidden px-2 py-2 absolute z-20 bg-white rounded-lg shadow-xl"
        >
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            {actionState[0]}
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            {actionState[1]}
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            {actionState[2]}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
