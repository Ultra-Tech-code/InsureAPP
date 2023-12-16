import React from "react";
import Button from "../global/Button";

export const AgentSettingsAccount = () => {
  return (
    <div>
      <form
        action=""
        className="border border-0 grid grid-cols-1 gap-y-6 justify-center md:grid-cols-2 md:gap-x-8 lg:gap-x-14 lg:px-12 px-8 pt-10 pb-14 bg-[--white-bg]"
      >
        <h1 className="text-center font-bold text-[1.5rem] col-span-2">
          Account Settings
        </h1>
        {/* Input elements */}
        <input
          type="email"
          name=""
          id=""
          placeholder="Change email"
          className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none md:h-[3.625rem]"
        />

        <input
          type="text"
          name=""
          id=""
          placeholder="Confirm change email"
          className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none"
        />

        {/* File uploads */}
        <div className="border border-[--form-border-bg] rounded-md flex justify-between">
          <label htmlFor="" className="self-center">
            Upload Profile Picture
          </label>
          <div className="w-[15rem] h-[5rem] border border-t-0 border-r-0 border-b-0 border-[--form-border-bg] flex flex-wrap">
            <input
              type="file"
              src=""
              alt=""
              className=""
              placeholder="Drop your image here"
            />
            <p className="">Select image from computer</p>
          </div>
        </div>

        <div className="border border-[--form-border-bg] rounded-md flex justify-between">
          <label htmlFor="" className="self-center">
            Upload Company License
          </label>
          <div className="w-[15rem] h-[5rem] border border-t-0 border-r-0 border-b-0 border-[--form-border-bg] flex flex-wrap">
            <input
              type="file"
              src=""
              alt=""
              className=""
              placeholder="Drop your image here"
            />
            <p className="self-center">Select image from computer</p>
          </div>
        </div>

        <h1 className="text-center font-bold text-[1.5rem] col-span-2">
          Preferences
        </h1>

        <input
          type="text"
          name=""
          id=""
          placeholder="Location"
          className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none"
        />

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex justify-around items-center">
          <span>Theme:</span>
          <span>Dark mode</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="lg:w-full text-center col-span-2 lg:justify-center">
          <Button
            description={"Save"}
            width={"w-[8rem]"}
            fontSize={"text-[1.5rem]"}
          />
        </div>
      </form>
    </div>
  );
};
