import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";

export default function MobileHeader() {
  const [isDropdownOpen, openSubmenu] = useState(false);

  const toggleDropdown = () => {
    openSubmenu(!isDropdownOpen);
  };

  return (
    <header className="block text-black  font-sans fixed w-screen z-50 lg:hidden xl:hidden 2xl:hidden">
      <Disclosure
        as="nav"
        className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-lg px-4 py-2"
      >
        {({ open }) => (
          <>
            <div className="uppercase max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-14">
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#4E94F8]">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <a href="/" className="flex flex-row">
                    <img
                      src="/BUSINESS_WORLD.webp"
                      alt="Logo"
                      className="h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="lg:hidden bg-white">
              <div>
                <Disclosure.Button
                  key={"HOME"}
                  as="a"
                  href={"/"}
                  className="text-[#01012f] border-t border-[#acacb5] hover:text-[#4E94F8] transition duration-300 ease-in-out font-Sans hover:font-bold block px-3 py-2  text-base font-medium"
                  aria-current={undefined}
                >
                  <div className="flex space-x-4">
                    <img src="/home-menu.png" className="h-8" />

                    <p> Home </p>
                  </div>
                </Disclosure.Button>
                <Disclosure.Button
                  key={"about"}
                  as="a"
                  href={"/about"}
                  className="hover:underline  border-t border-[#acacb5] text-[#01012f]  hover:text-[#4E94F8] transition duration-300 ease-in-out font-Sans hover:font-bold block px-3 py-2 text-base font-medium"
                  aria-current={undefined}
                >
                  <div className="flex space-x-4">
                    <img src="/about-mobile-icon.png" className="h-8" />

                    <p> About </p>
                  </div>
                </Disclosure.Button>
                <div className="relative">
                  <div className="flex items-center justify-between border-t border-[#acacb5]">
                    <Disclosure.Button
                      key={"StartUp"}
                      as="a"
                      className="hover:underline   text-[#01012f] hover:text-[#4E94F8]  transition duration-300 ease-in-out font-Sans hover:font-bold block px-3 py-2  text-base font-medium"
                      aria-current={undefined}
                    >
                      <div className="flex space-x-4">
                        <img src="/Team-members.png" className="h-8" />

                        <p> Services </p>
                      </div>
                    </Disclosure.Button>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center border border-blue-700 rounded-sm mr-1  text-blue-500 hover:text-blue-800 transition duration-300 ease-in-out"
                    >
                      {isDropdownOpen ? (
                        <ChevronUpIcon
                          className="h-6 w-6 ml-1 mr-1"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="h-6 w-6 ml-1 mr-1"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 mx-auto mt-2 bg-white rounded-md shadow-lg py-1 z-10 w-full">
                      <div className="relative">
                        <div className=" bg-white rounded-md shadow-lg py-1 z-10">
                          <div className="flex space-x-4 font-rajdhani font-bold text-xl px-4 py-2  border-t border-[#01012f] text-blue-500">
                            <img
                              src="/Business-Setup-Services.png"
                              className="h-8"
                            />

                            <p> Business Setup Services </p>
                          </div>

                          <a
                            href="/united-arab-emirates"
                            className="block px-4 py-2  border-t border-[#01012f] text-[#01012f] hover:text-[#4E94F8]"
                          >
                            <div className="flex space-x-8">
                              <img src="/FlagUAE.png" className="h-8" />

                              <p> Dubai </p>
                            </div>
                          </a>
                          <a
                            href="/united-states-america"
                            className="block px-4 py-2  border-t border-[#01012f] text-[#01012f] hover:text-[#4E94F8]"
                          >
                            <div className="flex space-x-8">
                              <img src="/FlagUSA.png" className="h-8" />

                              <p> United State Of America </p>
                            </div>
                          </a>
                          <a
                            href="/united_kingdom_services"
                            className="block px-4 py-2  border-t border-[#01012f] text-[#01012f] hover:text-[#4E94F8]"
                          >
                            <div className="flex space-x-8">
                              <img src="/FlagUK.png" className="h-8" />

                              <p> United Kingdom </p>
                            </div>
                          </a>
                          <a
                            href="/singapore"
                            className="block px-4 py-2  border-t border-[#01012f] text-[#01012f] hover:text-[#4E94F8]"
                          >
                            <div className="flex space-x-8">
                              <img src="/FlagSingapore.png" className="h-8" />

                              <p> Singapore </p>
                            </div>
                          </a>
                          <a
                            href="/hongkong_services"
                            className="block px-4 py-2  border-t border-[#01012f] text-[#01012f] hover:text-[#4E94F8]"
                          >
                            <div className="flex space-x-8">
                              <img src="/Flagkong.png" className="h-8" />

                              <p> Hong Kong</p>
                            </div>
                          </a>

                          <div className="flex space-x-4 font-rajdhani font-bold text-xl px-4 py-2  border-t border-[#01012f] text-blue-500">
                            <img src="/Business-Partner.png" className="h-8" />

                            <p> Business Partner </p>
                          </div>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://visaworlds.net/"
                            className="block px-4 py-2  border-t border-[#01012f] text-[#01012f] hover:text-[#4E94F8]"
                          >
                            <div className="flex space-x-8">
                              <img
                                src="/visa-favicon.png"
                                className="h-7 w-10"
                              />

                              <p> Visa Worlds </p>
                            </div>
                          </a>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://eximworld.net/"
                            className="block px-4 py-2 border-t border-[#01012f] text-[#01012f] hover:text-[#4E94F8]"
                          >
                            <div className="flex space-x-8">
                              <img src="/Exim-Fevicon.png" className="h-8" />

                              <p> Exim World </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Disclosure.Button
                  key={"partner"}
                  as="a"
                  href={"/partner"}
                  className="hover:underline  border-t border-[#acacb5] text-[#01012f]  hover:text-[#4E94F8] transition duration-300 ease-in-out font-Sans hover:font-bold block px-3 py-2 text-base font-medium"
                  aria-current={undefined}
                >
                  <div className="flex space-x-4">
                    <img src="/partner-icon.png" className="h-8" />

                    <p> Partner </p>
                  </div>
                </Disclosure.Button>

                <Disclosure.Button
                  key={"blog"}
                  as="a"
                  href={"/blog"}
                  className="hover:underline  border-t border-[#acacb5] text-[#01012f]  hover:text-[#4E94F8] transition duration-300 ease-in-out font-Sans hover:font-bold block px-3 py-2 text-base font-medium"
                  aria-current={undefined}
                >
                  <div className="flex space-x-4">
                    <img src="/business-blog.png" className="h-8" />

                    <p> Blog </p>
                  </div>
                </Disclosure.Button>

                <div className="flex space-x-4 border-t border-b  border-[#acacb5] mb-2 px-3">
                  <img src="/contact-us.png" className="h-8 mt-2" />

                  <button
                    onClick={() => (window.location.href = "/contact")}
                    className=" hover:border-[#fa7f63]  border border-[#1981C7] text-black  rounded-full   py-0.5 px-1.5 mt-2   transition cursor-pointer duration-300 ease-in-out font-inter  mb-2 ml-2"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
