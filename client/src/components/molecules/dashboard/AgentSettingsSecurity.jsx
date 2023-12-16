import React from 'react'
import Button from '../global/Button'

const AgentSettingsSecurity = () => {
  return (
    <div>
      <form
        action=""
        className="border grid grid-cols-1 gap-y-6 justify-center md:grid-cols-2 md:gap-x-8 lg:gap-x-14 lg:px-12 px-8 pt-10 pb-14 bg-[--white-bg]"
      >
        <h1 className="text-center font-bold text-[1.5rem] col-span-2">
          Account Recovery
        </h1>
        {/* Input elements */}
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter Account Recovery Email"
          className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none md:h-[3.625rem] col-span-2"
        />

        <input
          type="password"
          name=""
          id=""
          placeholder="Confirm Account Recovery Email"
          className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none col-span-2"
        />


        <div className="lg:w-full text-center md:mt-3 col-span-2 lg:justify-center">
          <Button
            description={"Save"}
            width={"w-[8rem]"}
            fontSize={"text-[1.5rem]"}
          />
        </div>
      </form>
    </div>
  )
}

export default AgentSettingsSecurity