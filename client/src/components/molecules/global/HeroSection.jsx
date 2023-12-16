import React from "react";
import parse from "html-react-parser";
import Button from "./Button";

const HeroSection = (props) => {
  const { title, description, img, buttonDesc, buttonWidth, btnFontSize, buttonRoute } =
    props;

  return (
    <>
      <section className="flex h-[100vh] justify-center items-center flex-col">
        <div
          className="w-full h-screen bg-[#433A3A] bg-cover bg-center "
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="w-full h-full flex justify-start items-start backdrop-brightness-50">
            <div className="m-auto text-white lg:w-[50%] w-[90%] text-center lg:text-left lg:ml-[100px]">
              <h1 className="lg:text-[4rem] text-[2.5rem] font-[700]">
                {parse(title) || "Pass in Your Title Here..."}
              </h1>
              <p className="lg:text-[1.4rem] text-[1rem] my-4">
                {parse(description) || "Provide your description..."}
              </p>

              <Button
                description={buttonDesc}
                width={buttonWidth}
                fontSize={btnFontSize}
                route={buttonRoute}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
