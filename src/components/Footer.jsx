import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="text-black bg-gradient-to-bl from-[#7acaff] to-[#56fa87] body-font pt-10">
      <div className="xl:flex  lg:flex justify-around p-4">
     
        <div className="flex  xl:space-x-32 lg:space-x-32  space-x-10">
          <div data-aos="fade-down">
            <h4 className="text-black font-rajdhani text-xl font-bold xl:mb-4 lg:mb-4">
              Business Setup Services
            </h4>
            <ul className="text-[16px] space-y-2 font-inter">
              <li>
                <a href="/united-arab-emirates" className="hover:text-blue-500">
                  Dubai
                </a>
              </li>
              <li>
                <a
                  href="/united-states-america"
                  className="hover:text-blue-500"
                >
                  United States of America
                </a>
              </li>
              <li>
                <a
                  href="/united_kingdom_services"
                  className="hover:text-blue-500"
                >
                  United Kingdom
                </a>
              </li>
              <li>
                <a href="/singapore" className="hover:text-blue-500">
                  Singapore
                </a>
              </li>
              <li>
                <a href="/hongkong_services" className="hover:text-blue-500">
                  Hong Kong
                </a>
              </li>
            </ul>
          </div>

         
          <div data-aos="fade-up">
            <h4 className="text-black font-rajdhani text-xl font-bold xl:mb-4 lg:mb-4 ">
              Company
            </h4>
            <ul className="text-[16px] font-inter space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-500">
                  About-Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500">
                  Contact-Us
                </a>
              </li>
              <li>
                <a href="/partner" className="hover:text-blue-500">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="xl:flex  xl:space-x-24 lg:flex  lg:space-x-24 mt-10 xl:mt-0 lg:mt-0 ">
          
          <div data-aos="fade-down">
            <h4 className="text-black font-rajdhani text-xl font-bold xl:mb-4 lg:mb-4">
              Contact-Us
            </h4>
            <ul className="text-[16px]  space-y-2 font-inter">
              <li>
              <a href="/" className="hover:text-blue-500">
           <strong className="text-[#1A83C6] font-inter"> Office-</strong>  #1414, Tamani Arts Office,<br></br> Business Bay, Dubai,United Arab Emirates.
                </a>
              </li>
              <li className="hover:text-blue-500"> +971 50 8791777</li>
              <li>
                <a href="/" className="hover:text-blue-500">
                <strong className="text-[#1A83C6] font-inter"> Office-</strong> #704-07, Maker Chambers-V, <br></br> Nariman Point,
                  Mumbai 400 021, India
                </a>
              </li>
              <li className="hover:text-blue-500">+91 9823123103</li>
              <li
                className="text-blue-600 font-inter"
              >
              info@rbkbusinessworld.com
              </li>
            </ul>
          </div>

          <div data-aos="fade-up">
            <h4 className="text-black font-rajdhani text-xl font-bold xl:mb-4 lg:mb-4">
              Compliance
            </h4>
            <ul className="text-[16px] font-inter space-y-2">
              <li>
                <a href="/term_and_conditions" className="hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy_policy" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
             <div className="flex space-x-4 mt-4">
                    <a
                      data-aos="zoom-in"
                      href="https://www.instagram.com/thebusinessworld.official/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram
                        className="text-pink-500 hover:scale-110 transition-transform"
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
                        className="text-blue-700 hover:scale-110 transition-transform"
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
                        className="text-red-600 hover:scale-110 transition-transform"
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
                        className="text-blue-600 hover:scale-110 transition-transform"
                        size={24}
                      />
                    </a>
                  </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3d9dd9] w-full px-10">
        <div className="mx-auto py-5 w-full flex flex-wrap sm:flex-row">
          <p className="text-white text-sm text-center font-inter w-full">
            © 2025. RBK Business World All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
