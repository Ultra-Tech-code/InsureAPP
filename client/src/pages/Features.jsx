import React from "react";
import { useEffect } from "react";
import Navbar from "../components/molecules/global/Navbar";
import Footer from "../components/molecules/global/Footer";
import HeroSection from "../components/molecules/global/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const title = "Explore <span className='text-orange-500'>our</span> Features";
  const description =
    "Explore INsure's Dynamic Features, Elevating Your Insurance Experience. Dive into our diverse range of offerings, uncover tailored solutions, and navigate through innovative features designed for your peace of mind";
  const img = "https://tinyurl.com/2e3e32fw";
  const buttonDesc = "Get Started";
  const btnFontSize = "text-[1.5rem]";
  const route = "/auth/admin/registration"

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div>
        {/* // features hero sections */}

        <HeroSection
          title={title}
          description={description}
          img={img}
          buttonDesc={buttonDesc}
          btnFontSize={btnFontSize}
          buttonRoute={route}
        />
        {/* // second section */}
        <div className="flex flex-wrap justify-between w-[90%] mt-10 mx-auto">
          <div className="flex flex-wrap justify-center lg:items-start items-center flex-col lg:-mt-10 mt-0 lg:text-left text-center mx-auto self-center">
            <p className="lg:w-[30rem] w-full text-[--black-text] text-[38px] leading-tight font-bold ">
              Collaborate <span className="text-orange-500">with</span> team,
              manage your agent and track your leads
            </p>
            <div className="mt-8 lg:text-left text-center mx-auto">
              <p className="lg:w-[80%] w-full font-semibold">
                Insure has a wide range of tools to help you manage your
                organization team
              </p>
              <div className="flex space-x-9 lg:justify-start justify-center mx-auto">
                <div className="my-6 flex space-x-3">
                  <img src="" alt="learn more icon" />
                  <div className="font-bold text-sky-800">
                    See INsure in Action
                  </div>
                </div>
              </div>
              <p className="font-semibold text-sky-800">
                14 days free trial | No credit card
              </p>
            </div>
          </div>
          <div className="mt-10 mx-auto">
            <img
              src="https://tinyurl.com/yc3r8es9"
              alt="insure features"
              className="w-[35rem] h-[33rem]"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="2000"
            />
          </div>
        </div>

        {/* Third section */}

        <div className="flex flex-wrap w-[90%] mx-auto">
          <div className="mx-auto lg:order-1 order-2 mt-16 lg:mt-0 ">
            <img
              src="https://tinyurl.com/3jsnv8hb"
              alt=""
              className="w-[30rem] h-[30rem]"
              data-aos="flip-left"
              data-aos-delay="50"
              data-aos-duration="2000"
            />
          </div>
          <div className="mx-auto text-xl lg:order-2 order-1 self-center">
            <p className="text-5xl mb-6 font-bold text-center lg:text-left mx-auto">
              Customer <span className="text-orange-500">Data</span> Security
            </p>
            <ul className="list-disc ml-8">
              <li className="mb-2">Secured Data Transmission</li>
              <li className="mb-2">User Authentication</li>
              <li className="mb-2">Redundant Data Storage</li>
              <li className="mb-2">Disaster Recovery Plan</li>
              <li className="mb-2">Transparent Privacy Policy</li>
              <li className="mb-2">Legal and Regulatory Compliance</li>
            </ul>
          </div>
        </div>

        {/* //fourth section */}

        <div className="flex flex-wrap justify-between mx-auto w-[90%] mt-20">
          <div className="self-center lg:w-[50%] w-full text-xl">
            <p className="text-5xl mb-6 font-bold text-center lg:text-left">
              Getting <span className="text-orange-500">Started</span> Videos
            </p>
            <ul className="list-disc ml-8">
              <li className="mb-2">
                <span>User Registration: </span>Learn how to create your account
                and set up your profile.
              </li>
              <li className="mb-2">
                <span>Dashboard Overview: </span>Get acquainted with the main
                dashboard and it's key features.
              </li>
              <li className="mb-2">
                <span>Navigation: </span>Discover how to easily navigate through
                the app's various sections.
              </li>
              <li className="mb-2">
                <span>Security: </span>Understand the security measures in place
                to protect your data.
              </li>
              <li className="mb-2">
                <span>Agent Onboarding: </span>Learn how to add new agents to
                your team.
              </li>
              <li className="mb-2">
                <span>Policy Approval: </span>Understand how to reveiw and
                approve policies generated by agents.
              </li>
            </ul>
          </div>
          <div className="mx-auto mt-10 lg:mt-0">
            <img
              src="https://tinyurl.com/4svdfh94"
              alt=""
              className="w-[30rem] h-[30rem]"
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="2000"
            />
          </div>
        </div>
        {/* //fifth section */}

        <div className=" bg-indigo-100 flex justify-center items-center mt-10 ">
          <div className="flex flex-wrap mx-auto justify-between w-[90%]">
            <div className="my-auto">
              <img
                className="w-[32rem] h-[32rem]"
                src="https://tinyurl.com/4sw3ywj2"
                alt=""
                data-aos="zoom-in-down"
                data-aos-delay="50"
                data-aos-duration="2000"
              />
            </div>
            <div className="mx-auto text-xl self-center ">
              <p className="text-5xl mb-6 font-bold lg:text-left text-center mx-auto">
                Analytics <span className="text-orange-500">and</span> Reporting
              </p>
              <ul className="w-[440px] list-disc ml-8">
                <li className="mb-2">
                  Generate reports on sales performance, lead conversion rates,
                  and revenue.
                </li>
                <li className="mb-2">
                  Analyse trends and identify areas for improvement.
                </li>
                <li className="mb-2">
                  Monitor agent productivity and clients retention rates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
