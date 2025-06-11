import React, { useEffect, useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import MobileHeader from "@/components/MobileHeader";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

function Header1() {
  return (
    <div className="bg-gradient-to-r from-[#1A81C5] to-[#26B351] text-white text-sm py-2.5 px-10 flex justify-between items-center fixed top-0 left-0 w-full z-50 h-14">
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-white" />
          <a
            data-aos="flip-up"
            href="mailto:info@rbkbusinessworld.com"
            className="hover:underline"
          >
            info@rbkbusinessworld.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-green-500" />
          <a
            data-aos="flip-up"
            href="tel:+919823123103"
            className="hover:underline"
          >
            +91 9823123103
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <FaPhone className="text-green-500" />
          <a
            data-aos="flip-up"
            href="tel:+919823123103"
            className="hover:underline"
          >
            +971 50 8791777
          </a>
        </div>
      </div>
      <div className="flex space-x-4">
        <a
          data-aos="zoom-in"
          href="https://www.instagram.com/thebusinessworld.official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="text-pink-500 transition-transform hover:scale-110"
            size={24}
          />
        </a>
        <a
          data-aos="zoom-in"
          href="https://www.linkedin.com/company/thebusinessworldofficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-blue-700 transition-transform hover:scale-110"
            size={24}
          />
        </a>
        <a
          data-aos="zoom-in"
          href="https://www.youtube.com/@thebusinessworld.official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube
            className="text-red-600 transition-transform hover:scale-110"
            size={24}
          />
        </a>
        <a
          data-aos="zoom-in"
          href="https://www.facebook.com/thebusinessworldofficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className="text-blue-600 transition-transform hover:scale-110"
            size={24}
          />
        </a>
      </div>
    </div>
  );
}

function Header2({ headerRef }) {
  const [showSubNav, setShowSubNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const underlineClass =
    "relative text-[#64748B] font-inter text-base  mt-1 after:absolute after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#26B351] after:transition-all after:duration-700 after:ease-in-out after:rounded-full after:top-full hover:after:w-32";
  let timer;

  const handleSubNavMouseEnter = () => {
    clearTimeout(timer);
    setShowSubNav(true);
  };

  const handleSubNavMouseLeave = () => {
    timer = setTimeout(() => {
      setShowSubNav(false);
    }, 200);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const toggleSubmenu = (submenu) => {
    if (openSubmenu === submenu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(submenu);
    }
  };
  return (
    <div
      ref={headerRef}
      className="bg-gradient-to-r from-[#fbfdfe] to-[#f1f3f4] border py-3 pb-4 fixed left-0 w-full z-40"
    >
      <nav className="flex justify-between px-10 font-semibold font-inter">
        <a href="/">
          <img src="/BUSINESS_WORLD.webp" className="h-12 " alt="Logo" />
        </a>
        <div className="flex mt-2 space-x-10">
          <a href="/about" className="text-gray-700 hover:text-[#1A81C5]">
            About
          </a>
          <div
            className="transition-opacity duration-150 ease-in-out opacity-100"
            onMouseEnter={handleSubNavMouseEnter}
            onMouseLeave={handleSubNavMouseLeave}
          >
            <a className="text-[#01012f] hover:text-[#1A81C5]  text-base font-inter  hover:font-bold font-semibold cursor-pointer flex items-center">
              Services
              <ChevronDownIcon
                className={`h-5 w-5 ml-1 transform transition-transform duration-300 ${
                  showSubNav ? "rotate-180" : ""
                }`}
              />
            </a>
            {showSubNav && (
              <div
                className="absolute right-0 w-full py-4 transition-opacity duration-150 ease-in-out bg-white border-b border-l border-r border-green-500 rounded-b-lg opacity-100 top-full"
                onMouseEnter={handleSubNavMouseEnter}
                onMouseLeave={handleSubNavMouseLeave}
              >
                <div className="flex px-10 space-x-10">
                  <div className="flex flex-col space-y-6 ">
                    {/* Main Heading */}
                    <h1 className="text-[#27B352] hover:text-[#2789C7] font-bold text-2xl font-rajdhani text-center">
                      Business Setup Services
                    </h1>

                    <div className="grid gap-10 md:grid-cols-2 ">
                      {/* Group 1 */}
                      <div data-aos="fade-up">
                        <a href="/united-arab-emirates">
                          <div className="flex space-x-2">
                            <img src="/FlagUAE.png" className="w-10 h-10" />
                            <div className="flex flex-col">
                              <h1 className="text-[#2789C7] hover:text-black font-bold text-lg ">
                                Dubai
                              </h1>
                              <p className="text-sm text-black hover:text-[#27B352] font-normal mb-4">
                                Free consultation for a complete business setup
                                including licensing, banking support, and visa
                                processing.
                              </p>
                            </div>
                          </div>
                        </a>

                        <a href="/united-states-america">
                          <div className="flex space-x-2">
                            <img src="/FlagUSA.png" className="w-10 h-10" />
                            <div className="flex flex-col">
                              <h1 className="text-[#2789C7] hover:text-black font-bold text-lg ">
                                United States of America
                              </h1>
                              <p className="text-sm text-black hover:text-[#27B352] font-normal mb-4">
                                Quick company registration with expert
                                compliance and banking support.
                              </p>
                            </div>
                          </div>
                        </a>

                        <a href="/united_kingdom_services">
                          <div className="flex space-x-2">
                            <img src="/FlagUK.png" className="w-10 h-10" />
                            <div className="flex flex-col">
                              <h1 className="text-[#2789C7] hover:text-black font-bold text-lg ">
                                United Kingdom
                              </h1>
                              <p className="text-sm text-black hover:text-[#27B352] font-normal mb-4">
                                Easy company formation with ongoing legal and
                                documentation assistance.
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>

                      {/* Group 2 */}
                      <div data-aos="fade-down" className="space-y-6">
                        <a href="/singapore">
                          <div className="flex space-x-2">
                            <img
                              src="/FlagSingapore.png"
                              className="w-10 h-10"
                            />
                            <div className="flex flex-col">
                              <h1 className="text-[#2789C7] hover:text-black font-bold text-lg ">
                                Singapore
                              </h1>
                              <p className="text-sm text-black hover:text-[#27B352] font-normal mb-4">
                                Smooth incorporation with customized licensing
                                and banking solutions.
                              </p>
                            </div>
                          </div>
                        </a>

                        <a href="/hongkong_services">
                          <div className="flex space-x-2">
                            <img src="/Flagkong.png" className="w-10 h-10" />
                            <div className="flex flex-col">
                              <h1 className="text-[#2789C7] hover:text-black font-bold text-lg ">
                                Hong Kong
                              </h1>
                              <p className="text-sm text-black hover:text-[#27B352] font-normal mb-4">
                                Fast business registration with full compliance
                                and banking support.
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-center  xl:pt-10">
                      <div className="px-2 border-l border-blue-500 lg:h-52 xl:h-56 "></div>
                    </div> */}

                  <div className="flex flex-col">
                    <ul>
                      <h1 className="text-[#27B352] hover:text-[#2789C7] text-2xl font-rajdhani font-bold">
                        Business Partner
                      </h1>

                      {/* <a href="/business-world" className={underlineClass}> */}

                      <a href="/business-world">
                        <div data-aos="fade-up" className="flex mt-8 space-x-2">
                          <img src="/visa-favicon.png" className="h-9" />
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://visaworlds.net/"
                            className="flex flex-col"
                          >
                            <h1 className="text-[#006CFF] hover:text-black font-bold text-lg ">
                              Visa World
                            </h1>
                            <p className="text-sm text-black hover:text-[#27B352] font-normal mb-4">
                              Trusted immigration consultants for seamless
                              migration to top-tier global destinations.
                            </p>
                          </a>
                        </div>
                      </a>
                      <a href="/united-state-america">
                        <div data-aos="fade-up" className="flex space-x-2">
                          <img src="/Exim-Fevicon.png" className="h-14" />
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://eximworld.net/"
                            className="flex flex-col"
                          >
                            <h1 className="text-[#006CFF] hover:text-black font-bold text-lg ">
                              Exim World
                            </h1>
                            <p className="text-sm text-black hover:text-[#27B352] font-normal mb-4">
                              Expand your exports effortlessly with expert
                              strategies and global market insights.
                            </p>
                          </a>
                        </div>
                      </a>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            )}
          </div>
          <a href="/partner" className="text-gray-700 hover:text-[#1A81C5]">
            Partner
          </a>
          <a href="/blog" className="text-gray-700 hover:text-[#1A81C5]">
          Blog 
          </a>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-gradient-to-r from-[#5ab1ea] to-[#26B351] hover:text-black text-white h-10 px-4 py-2 rounded-full hover:bg-[#49b0f6] transition"
          >
            Contact Us
          </button>
        </div>
      </nav>
    </div>
  );
}

function App() {
  const [showHeader1, setShowHeader1] = useState(true);
  const [showHeader2, setShowHeader2] = useState(true);
  const header2Ref = useRef(null);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY === 0;

      if (currentScrollY > lastScrollY) {
        setShowHeader1(false);
        setShowHeader2(false);
      } else {
        setShowHeader2(true);
        if (header2Ref.current) {
          header2Ref.current.style.top = showHeader1 ? "56px" : "0px";
        }
      }

      if (atTop) {
        setShowHeader1(true);
        setShowHeader2(true);
        if (header2Ref.current) {
          header2Ref.current.style.top = "56px";
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHeader1]);

  return (
    <>
      {/* {showHeader1 && <Header1 />}
      {showHeader2 && <Header2 headerRef={header2Ref} />} */}

      <div className="block lg:hidden xl:hidden 2xl:hidden">
        <MobileHeader />
      </div>

      {/* Desktop Headers - Visible only on larger screens */}
      <div className="hidden lg:block xl:block 2xl:block">
        {showHeader1 && <Header1 />}
        {showHeader2 && <Header2 headerRef={header2Ref} />}
      </div>
    </>
  );
}

export default App;
