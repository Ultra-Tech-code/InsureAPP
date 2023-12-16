import React from "react";
import Button from "../global/Button";

const AgentSettingsNotification = () => {
  return (
    <div>
      <form
        action=""
        className="border border-0 grid grid-cols-1 gap-y-6 justify-center md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-14 lg:px-12 px-8 pt-10 pb-14 bg-[--white-bg]"
      >
        <h1 className="text-center font-bold text-[1.5rem] col-span-3">
          Notification
        </h1>

        {/* Input elements */}

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">Email</label>
        </div>

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">Push</label>
        </div>

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">Browser</label>
        </div>

        <h1 className="text-center font-bold text-[1.5rem] col-span-3">
          Notification Preview
        </h1>

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">Always show</label>
        </div>

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">Never show</label>
        </div>

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">Show on app</label>
        </div>

        <h1 className="text-center font-bold text-[1.5rem] col-span-3">
          Snooze Notification
        </h1>

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">1 Hour</label>
        </div>

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">2 Hours</label>
        </div>

        <div className="border border-[--form-border-bg] w-72 md:w-96 lg:w-auto px-3 py-2 md:h-[3.625rem] md:text-xl rounded-md flex items-center justify-center gap-x-6">
          <input type="radio" name="month" id="monthly" />
          <label htmlFor="monthly">4 Hours</label>
        </div>

        <div className="lg:w-full text-center col-span-3 lg:justify-center">
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

export default AgentSettingsNotification;
