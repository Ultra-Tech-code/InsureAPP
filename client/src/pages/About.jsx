import React, { useEffect } from "react";
import Navbar from "../components/molecules/global/Navbar";
import HeroSection from "../components/molecules/global/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/molecules/global/Footer";
import Profile from "../components/molecules/global/Profile";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const title = "About <span className='text-orange-500'>INsure</span>";
  const description =
    "Welcome to INsure, your partner in revolutionizing the insurance industry! A powerful tool designed to empower insurance agents like you to excel in your profession.";
  const img =
    "https://res.cloudinary.com/blackadam/image/upload/q_30/Insure/about-bg_estegz.png";
  const buttonDesc = "Get Started";
  const btnFontSize = "text-[1.5rem]";
  const route = "/auth/admin/registration"
  // const buttonWidth = "20"

  return (
    <>
      <body className="font-Lato">
        <Navbar />
        {/* <!-- Main --> */}
        <main className="text-gray-900">
          {/* <!-- Hero --> */}
          <HeroSection
            title={title}
            description={description}
            img={img}
            buttonDesc={buttonDesc}
            btnFontSize={btnFontSize}
            buttonRoute={route}
          />

          {/* why insure */}
          <section className="py-4 bg-white">
            <div className="flex lg:flex-row flex-col w-[90%] mx-auto justify-between items-center p-4 my-6">
              <div className="lg:w-[50%] w-[100%] mb-2">
                <h2 className="lg:text-[2.5rem] text-[2rem] font-[700] lg:text-left text-center">
                  Why <span className="text-orange-500">Insure</span>
                </h2>
                <p className="my-4 text-gray-500">
                  INsure aims to revolutionize insurance sales, making it easier
                  for agents to succeed, understand their customers, and adapt
                  to industry shifts, ultimately benefiting both agents and
                  clients.
                </p>
                <p className="my-4 text-gray-500">
                  INsure is a game-changing insurance sales management tool that
                  empowers professionals. It offers data-driven insights,
                  enhances customer service, adapts to industry changes, and
                  maximizes efficiency and profitability.
                </p>
                <p className="text-gray-500">
                  INsure is the key to success in the competitive insurance
                  industry, enabling agents to excel and deliver exceptional
                  service to clients.
                </p>
              </div>
              <div
                className="lg:w-[45%] w-[100%] mt-6 lg:mt-0"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <img
                  src="https://res.cloudinary.com/blackadam/image/upload/q_60/Insure/why-section_ijapzu.png"
                  alt=""
                  className="w-[100%]"
                />
              </div>
            </div>
          </section>

          <section className="bg-[--lavender-bg]">
            {/* our mission and vision */}
            <div className="flex lg:flex-row flex-col w-[100%] mx-auto justify-around items-center p-10 mt-8 mb-4">
              <div
                className="w-[100%] lg:w-[48%] mb-2 bg-white p-10 shadow-lg text-justify rounded-[13px]"
                data-aos="zoom-in-up"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <h3 className="text-[--Blue4] text-[2rem] my-8 font-[700] text-center">
                  Our <span className="text-orange-500">Mission</span>
                </h3>
                <p className="text-gray-500">
                  To be the leading insurance sales management tool,
                  transforming the industry by simplifying the sales process,
                  fostering client relationships, and adapting to changing
                  insurance needs through continuous innovation, data-driven
                  insights, and automation.
                </p>
              </div>

              <div
                className="w-[100%] lg:w-[48%] mb-2 bg-white p-10 rounded-[13px] shadow-lg text-justify"
                data-aos="zoom-in-down"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <h3 className="text-[--Blue4] text-[2rem] my-8 font-[700] text-center">
                  Our <span className="text-orange-500"> Vision</span>
                </h3>
                <p className="text-gray-500">
                  To be the leading insurance sales management tool,
                  transforming the industry by simplifying the sales process,
                  fostering client relationships, and adapting to changing
                  insurance needs through continuous innovation, data-driven
                  insights, and automation.
                </p>
              </div>
            </div>

            {/* our core values */}
            <div className="flex lg:flex-row flex-col w-[100%] mx-auto justify-around items-center p-10 my-4">
              <div className="lg:w-[45%] w-[100%] mt-2 lg:mt-0">
                <h2 className="lg:text-[2.5rem] text-[2rem] font-[700] lg:text-left text-center">
                  Our <span className="text-orange-500">Core </span>Values
                </h2>
                <p className="my-4 text-gray-500">
                  INsure aims to revolutionize insurance sales, making it easier
                  for agents to succeed, understand their customers, and adapt
                  to industry shifts, ultimately benefiting both agents and
                  clients.
                </p>
                <p className="my-4 text-gray-500">
                  INsure is a game-changing insurance sales management tool that
                  empowers professionals. It offers data-driven insights,
                  enhances customer service, adapts to industry changes, and
                  maximizes efficiency and profitability.
                </p>
                <p className="text-gray-500">
                  INsure is the key to success in the competitive insurance
                  industry, enabling agents to excel and deliver exceptional
                  service to clients.
                </p>
              </div>
              <div
                className="lg:w-[50%] w-[100%] mb-2"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <img
                  src="https://res.cloudinary.com/blackadam/image/upload/q_60/Insure/corevalue-section_bewtoh.png"
                  alt=""
                  className="w-[100%]"
                />
              </div>
            </div>

            {/* our team */}
            <section className="bg-[--lavender-bg] text-gray-900">
              <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                    Our <span className="text-orange-500">Team</span>
                  </h2>
                  <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Discover the faces fueling INsure innovation. Together we are the driving
                    force behind the success in INsure.
                  </p>
                </div>
                {/* <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
                <div className="w-full m-auto">
                  <Profile />
                </div>
              </div>
            </section>
          </section>
        </main>
        <Footer />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
        {/* <script src="../script.js"></script> */}
      </body>
    </>
  );
};

export default About;
