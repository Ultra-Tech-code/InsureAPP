import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/molecules/global/Navbar";
import Footer from "../components/molecules/global/Footer";
import Button from "../components/molecules/global/Button";
const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundData = [
    "https://ik.imagekit.io/7ziooaysi/svgtopng/bg-one.png?updatedAt=1700115701231",
    "https://ik.imagekit.io/7ziooaysi/svgtopng/bg-two.png?updatedAt=1700115700691",
    "https://ik.imagekit.io/7ziooaysi/svgtopng/bg-three.png?updatedAt=1700115701235",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundData.length
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const heroStyle = {
    backgroundImage: `url(${backgroundData[backgroundIndex]})`,
  };

  const buttonDesc = "Get Started";
  const route = "/auth/admin/registration"
  // let buttonWidth = "10";
  // let size = "10"

  return (
    <>
      <Navbar />
      {/* section 1 */}
      <section className="flex h-[100vh] justify-center items-center flex-col">
        <div
          className="w-full h-screen bg-[#433A3A]  bg-cover bg-center"
          style={heroStyle}
        >
          <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
            <div className="my-auto lg:ml-[100px] lg:text-left text-center text-white mx-auto w-[90%]">
              <h1 className="lg:text-[4rem] text-[2rem] font-[700]">
                Welcome <span className="text-orange-600">to</span> INsure
              </h1>
              <p
                className="lg:text-[1.4rem] text-[1rem] my-4 lg:w-[50%] w-[100%]"
                id="description"
              >
                ...your Key to Insurance Sales Excellence. Elevate your agency's
                performance, close more deals, and boost profits with our
                cutting-edge sales management tool.
              </p>

              <Button description={buttonDesc} fontSize={"text-[1.5rem]"}
              route={route} />
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="flex lg:flex-row flex-col w-[90%] mx-auto justify-between items-center my-10 p-4">
        <div
          className="lg:w-[60%] w-[100%] mb-6 lg:mb-0"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <img
            src="https://tinyurl.com/3dayxahf"
            alt="dashboard"
          />
        </div>
        <div className="lg:w-[35%] w-[100%] mb-2">
          <h2 className="lg:text-[2.5rem] text-[2rem] font-[700]">
            Meet <span className="text-orange-600">INsure</span> for Enterprise
          </h2>
          <p className="my-4">
            Our cutting-edge sales management tool is designed to empower
            insurance professionals, brokers, and agencies with the tools they
            need to thrive in a rapidly evolving industry.
          </p>
          <p>
            Say goodbye to manual paperwork, data chaos, and missed
            opportunities. Say hello to streamlined workflows, data-driven
            decisions, and unprecedented growth.
          </p>
        </div>
      </section>
      {/* section 3 */}
      <section className="bg-[--lavender-bg] py-6">
        <div className="w-[90%] mx-auto">
          <div>
            <div className="flex lg:flex-row flex-col justify-between items-center my-10 p-4">
              <div
                className="lg:w-[35%] w-[100%] bg-white p-2 mb-6 lg:mb-0"
                data-aos="flip-left"
                data-aos-delay="50"
                data-aos-duration="2000"
              >
                <img
                  src="https://tinyurl.com/k7jwn8xp"
                  alt=""
                />
              </div>
              {/* first  */}
              <div className="lg:w-[60%] w-[100%] mb-2">
                <h2 className="lg:text-[2.5rem] text-[2rem] font-[700]">
                  The <span className="text-orange-600">Future-Proof</span>{" "}
                  Solution for Insurance Pros
                </h2>
                <p className="my-4">
                  INsure redefines the insurance industry by providing a
                  comprehensive sales management tool built exclusively for
                  enterprises.
                </p>
                <p>
                  It's the ultimate companion for insurance professionals,
                  brokers, and agencies, offering relief from tedious paperwork,
                  data confusion, and missed potential.
                </p>
              </div>
            </div>
          </div>

          {/* second */}
          <div className="flex lg:flex-row flex-col justify-between items-center my-10 p-4">
            <div className="lg:w-[55%] w-[100%] mb-2 lg:order-1 order-2">
              <h2 className="lg:text-[2.5rem] text-[2rem] font-[700]">
                Teams <span className="text-orange-600">large</span> and small
                rely on INsure
              </h2>
              <p className="my-4">
                Visualize your sales pipeline like never before. INsure provides
                a clear and customizable overview of your entire sales process,
                allowing you to identify bottlenecks, target high-potential
                leads, and make data-driven decisions to expedite deals.
              </p>
            </div>
            <div
              className="lg:w-[40%] w-[100%] mb-6 lg:mb-0 lg:order-2 order-1"
              data-aos="zoom-in-up"
              data-aos-delay="50"
              data-aos-duration="2000"
            >
              <img
                src="https://tinyurl.com/4dynpbfv"
                alt=""
              />
            </div>
          </div>

          {/* third */}
          <div className="flex lg:flex-row flex-col justify-between items-center my-10 p-4">
            <div
              className="lg:w-[35%] w-[100%] bg-white p-2 mb-6 lg:mb-0"
              data-aos="zoom-in-down"
              data-aos-delay="50"
              data-aos-duration="2000"
            >
              <img
                src="https://tinyurl.com/2ve7brjy"
                alt=""
              />
            </div>
            <div className="lg:w-[60%] w-[100%] mb-2">
              <h2 className="lg:text-[2.5rem] text-[2rem] font-[700]">
                Seize <span className="text-orange-600">the </span> Future of
                Insurance Sales
              </h2>
              <p className="my-4">
                INsure is your key to unlocking the potential of the insurance
                industry. With a focus on enterprise-level solutions, this
                platform empowers insurance professionals, brokers, and agencies
                to stay ahead in a rapidly changing field. Bid farewell to
                manual paperwork, data disarray, and missed opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
