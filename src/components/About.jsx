import { useEffect, useState, useRef } from "react";
import { FaRocket } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import "animate.css";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let years = 0,
        projects = 0,
        clients = 0;
      const interval = setInterval(() => {
        years = Math.min(years + 1, 20);
        projects = Math.min(projects + 10, 1247);
        clients = Math.min((clients % 100) + 1, 100); // Ensures it stops at 100

        setCounts({ years, projects, clients });

        if (years === 20 && projects === 1247 && clients === 100) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <>
      <div
        className="relative bg-cover bg-center  mt-6  md:h-[500px] xl:mt-14 lg:h-[600px] flex text-start justify-start items-start"
        style={{ backgroundImage: "url('/abouts.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 w-full px-6 pt-10 mt-32 xl:mt-20 md:px-12">
          <div className="w-full">
            <a
              data-aos="fade-up"
              className="block text-2xl font-bold text-white xl:text-4xl lg:text-4xl font-rajdhani md:text-5xl"
            >
              About Us
            </a>
            <div className="flex items-start justify-start mt-2 space-x-2 text-white font-inter">
              <a href="/" className="text-lg font-semibold">
                Home
              </a>
              <span className="text-green-500">&#x3e;</span>
              <a href="/about" className="text-lg font-semibold text-green-500">
                About
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        class="xl:flex lg:flex  justify-end xl:mt-32   xl:px-20 lg:mt-20  px-4 mt-10 xl:space-x-10 lg:space-x-10"
      >
        <div
          class="flex flex-col space-y-4 animate__animated animate__shakeY animate__infinite"
          style={{ animationDuration: "30s" }}
        >
          <div class="rounded-2xl xl:h-full xl:w-72  lg:h-72 lg:w-64 2xl:h-auto 2xl:w-80 flex justify-center object-cover duration-700 ease-in-out overflow-hidden transition-transform transform hover:scale-105 ">
            <img
              src="/clients.png"
              alt="homepage"
              class="rounded-xl  xl:w-72  lg:w-72"
            />
          </div>
        </div>

        <div class="space-y-4 flex xl:flex-col lg:flex-col  flex-col items-center mt-5 xl:mt-0 lg:mt-0 md:space-x-14 xl:space-x-0 lg:space-x-0">
          <img
            src="/client2.png"
            alt="homepage"
            class="xl:w-64 xl:h-80 h-72 w-96 lg:w-96 md:w-96 2xl:h-auto 2xl:w-96 lg:h-64 rounded-2xl object-cover duration-700 ease-in-out overflow-hidden transition-transform transform hover:scale-105 animate__animated animate__shakeY animate__infinite"
            style={{ animationDuration: "20s" }}
          />
          <div
            class="bg-gradient-to-r from-green-500 to-[#1E84C6] rounded-2xl  xl:w-64 lg:w-64 w-80  p-4 h-24 object-cover duration-700 ease-in-out overflow-hidden transition-transform transform hover:scale-105 animate__animated animate__shakeY animate__infinite"
            style={{ animationDuration: "20s" }}
          >
            <div class="flex  space-x-4">
              <p class="text-white text-2xl font-inter">1200+</p>
              <div class="flex bg-white w-32 p-1.5 px-4 rounded-full space-x-2">
                <img src="/arrows.png" class="w-5 h-5" />
                <p class="text-sm text-green-500 font-inter">100% Top</p>
              </div>
            </div>
            <p class="text-white font-rajdhani font-bold text-xl mt-1">
              satisfied consultants
            </p>
          </div>
        </div>

        <div className="w-full px-5 mt-20 xl:mt-0 md:w-1/2">
          <h3 className="mb-2 text-sm font-semibold text-green-500 uppercase font-inter">
            Why Choose Us
          </h3>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 xl:text-4xl lg:text-4xl font-rajdhani">
            We Are Award-Winning Business Consulting Firm
          </h2>
          <p className="mb-6 text-gray-600 font-inter">
            We specialize in helping businesses establish and grow globally with
            expert consulting, strategic solutions and hassle-free business
            setup services.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <img
                src="/counsulting.png"
                alt="Support Icon"
                className="w-10 h-10"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 font-arimo">
                  Best Business Consulting
                </h4>
                <p className="text-gray-600 font-inter">
                  We provide expert guidance to help businesses structure,
                  register and scale in competitive global markets.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/supports.png"
                alt="Support Icon"
                className="w-10 h-10"
              />

              <div>
                <h4 className="text-xl font-semibold text-gray-900 font-arimo">
                  24/7 Customer Support
                </h4>
                <p className="text-gray-600 font-inter">
                  Our dedicated team is available round-the-clock to assist with
                  your queries and business needs.
                </p>
              </div>
            </div>
          </div>
          <a href="contact">
            <button className="px-6 py-3 mt-6 text-lg font-semibold text-white transition bg-green-500 border rounded-lg font-rajdhani hover:border-green-500 hover:bg-blue-500">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      <div
        ref={sectionRef}
        data-aos="fade-up"
        className="px-4 py-6 space-y-4 xl:flex xl:justify-evenly xl:py-28 lg:py-28 xl:space-y-0 lg:space-y-0 xl:px-20 xl:space-x-10 lg:flex lg:justify-evenly lg:px-20 lg:space-x-10 aos-init aos-animate"
      >
        <img
          src="/clients.jpg"
          alt="About Image"
          data-aos="fade-down"
          className="object-cover xl:w-2/3 xl:h-full lg:w-2/3 lg:h-96 2xl:h-full rounded-xl"
        />

        <div
          data-aos="fade-up"
          className="font-sans text-center text-white xl:justify-items-end lg:justify-items-end"
        >
          <div className="flex flex-col bg-gradient-to-b from-green-500 to-[#1E84C6] xl:w-80 xl:h-full lg:w-80 text-center items-center py-4 2xl:h-[670px] rounded-3xl 2xl:space-y-10">
            <div className="flex justify-center w-full mt-8 mb-2 2xl:mt-10">
              <div>
                <h1 className="text-5xl font-bold md:text-6xl">
                  {counts.years}+
                </h1>
                <p className="mt-8 text-xl font-bold text-white md:text-2xl font-rajdhani 2xl:mt-5">
                  Years of experience
                </p>
              </div>
            </div>

            <a className="w-2/3 my-2 border-blue-500 2xl:my-10" />

            <div className="flex justify-center w-full 2xl:mt-10">
              <div>
                <h2 className="text-5xl font-bold md:text-6xl">
                  {counts.projects}+
                </h2>
                <p className="mt-2 text-xl font-bold text-white md:text-2xl font-rajdhani 2xl:mt-5">
                  Successful projects
                </p>
              </div>
            </div>

            <a className="w-2/3 my-3 border-blue-500 2xl:my-10" />

            <div className="flex justify-center w-full mb-5 2xl:mt-5">
              <div>
                <h3 className="text-5xl font-bold md:text-6xl">
                  {counts.clients}%
                </h3>
                <p className="mt-2 text-xl font-bold text-white md:text-2xl font-rajdhani 2xl:mt-5">
                  Consultant satisfaction rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-20 xl:min-h-screen lg:min-h-screen xl:px-20 lg:px-20 ">
        <div
          data-aos="fade-right"
          className="relative bg-[#1E84C6]  text-white p-6 w-full md:h-68 text-left mb-6 shadow-lg clip-arrow flex flex-col md:flex-row items-center gap-6"
        >
          <FaBullseye className="text-6xl text-white xl:ml-10 md:text-9xl" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-center md:text-4xl font-rajdhani">
              Vision
            </h2>
            <p className="mt-2 w-full xl:w-3/4 lg:w-3/4 px-3 text-left font-inter xl:text-[18px] lg:text-[18px] md:text-[18px] lg:ml-32 xl:ml-32">
              Our vision is to be the trusted partner for businesses and
              entrepreneurs, providing expert consultancy services that drive
              growth, innovation and global success. We strive to empower
              businesses with strategic insights and tailored solutions,
              enabling them to navigate challenges and seize opportunities in an
              ever-evolving market.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="relative bg-[#26B350] text-white p-6 w-full text-center md:h-68 shadow-lg clip-arrow-reverse flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-center md:text-4xl font-rajdhani">
              Mission
            </h2>
            <p className="mt-2 w-full xl:w-3/4 lg:w-3/4 text-left ml-4  font-inter px-3 text-[18px] md:text-[20px] xl:ml-44 lg:ml-44 md:ml-16">
              We are dedicated to delivering comprehensive consultancy services
              that help businesses scale, optimize operations and achieve
              long-term success. Our mission is to provide expert guidance in
              business expansion, financial planning, compliance and market
              entry strategies, ensuring our clients thrive in competitive
              industries worldwide.
            </p>
          </div>
          <FaRocket className="text-6xl text-white xl:mr-10 md:text-9xl" />
        </div>

        <style jsx>{`
          .clip-arrow {
            clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
          }
          .clip-arrow-reverse {
            clip-path: polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%);
          }
        `}</style>
      </div>

      <div
        className="px-4 py-6 sm:px-6 lg:px-10 xl:px-20 xl:py-10 xl:mt-6 lg:py-10 lg:mt-6 aos-init aos-animate"
        data-aos="fade-down"
      >
        <div className="bg-gradient-to-l from-green-500 to-[#1E84C6] text-center xl:py-10 lg:py-10 py-5 xl:space-y-6 lg:space-y-6 space-y-2 rounded-xl max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-white sm:text-3xl font-rajdhani lg:text-4xl xl:text-5xl">
            Expand Your Business Globally
          </h1>
          <p className="text-sm font-semibold text-white lg:text-2xl xl:text-xl font-inter">
            We provide expert business consultancy services to help you
            establish and grow your business in UAE, UK, US and Singapore.
          </p>
          <div className="py-4">
            <a
              href="/contact"
              rel="noopener noreferrer"
              className="bg-white py-2 px-4 sm:px-6 font-rajdhani lg:px-8 rounded-full text-[#020B42] font-semibold  text-sm sm:text-lg lg:text-xl xl:text-xl hover:text-white hover:bg-[#1E84C6] hover:ring-1 ring-white transition duration-300"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

