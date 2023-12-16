import React from "react";
import Button from "../global/Button";

const AgentSettingsPassword = () => {
  return (
    <div>
      <form
        action=""
        className="border border-0 grid grid-cols-1 gap-y-6 justify-center lg:px-12 px-8 pt-10 pb-14 bg-[--white-bg]"
      >
        <h1 className="text-center font-bold text-[1.5rem] col-span-2">
          Password Settings
        </h1>
        {/* Input elements */}
        <input
          type="password"
          name=""
          id=""
          placeholder="Change password"
          className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:text-xl rounded-md focus:border-[--blue-bg] focus:outline-none md:h-[3.625rem] col-span-2"
        />

        <input
          type="password"
          name=""
          id=""
          placeholder="Confirm password"
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
  );
};

export default AgentSettingsPassword;
