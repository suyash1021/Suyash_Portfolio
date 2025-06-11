import React, { useState, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail, CgProfile } from "react-icons/cg";
import Slider from "react-slick";
import New from "@/pages/experience";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiHtml5,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaTwitter />, label: "Twitter" },
  { icon: <FaLinkedinIn />, label: "LinkedIn" },
  { icon: <FaInstagram />, label: "Instagram" },
];

const skills = [
  { icon: <SiReact />, label: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
];
import {
  Code2,
  Settings2,
  Database,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";

// import Alert from "@/components/Alert";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Contacts from "@/pages/contacts";
import Projects from "@/pages/projects";

import Typewriter from "@/components/Typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X } from "lucide-react";

const Internationalbankaccount = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 150,
      once: false,
    });
  }, []);

  const [formData, setFormData] = useState({
    Name: "",
    phone: "",
    email: "",
    companyName: "",
    message: "",
    Products: [],
  });

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
          break; // stop looping once the active section is found
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Adjust based on your header height
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 1 } },
      { breakpoint: 1280, settings: { slidesToShow: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <style jsx>{`
          ul {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          li {
            margin: 0 1rem;
          }
          .slick-active h2 {
            background-color: #2b6cb0;
          }
          h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;
          }
        `}</style>
        <ul>
          {dots.slice(0, 5).map((dot, index) => (
            <h2
              key={index}
              className={`w-4 h-4 rounded-full ${
                dot.props.className.includes("slick-active")
                  ? "bg-[#FF8064]"
                  : "bg-black"
              }`}
            >
              {dot}
            </h2>
          ))}
        </ul>
      </div>
    ),
    customPaging: () => <div className="w-3 h-3 rounded-full "></div>,
  };

  const [isOpen, setIsOpen] = useState(false);
  const sections = ["home", "fetures", "projects", "resume", "contact"];
  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <>
      <div className="font-sans bg-gradient-to-tr md:mt-0 from-[#DFE9FD] via-[#f2f2f4] to-[#DFE9FD] ">
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="flex justify-between items-center p-1.5 px-6 max-w-7xl mx-auto">
            <a href="/">
              <div className="py-2">
                <h1 className="text-xl font-medium flex text-blue-600">
                  &#60;/&#62;  SuyashDev
                </h1>
              </div>
            </a>

            <nav className="hidden xl:flex">
              <ul className="flex space-x-4 px-10">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(section)}
                      className={`capitalize font-medium px-3 py-2 transition-colors duration-200 ${
                        activeSection === section
                          ? "text-blue-500 border-b-2  border-blue-500"
                          : "text-gray-700 hover:text-blue-500"
                      }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <nav className="xl:hidden w-full bg-white shadow">
              <ul className="flex flex-col space-y-2 px-4 py-2">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => handleNavClick(section)}
                      className={`w-full text-left capitalize font-medium px-3 py-2 rounded ${
                        activeSection === section
                          ? "text-blue-500 border-b-2 border-blue-500"
                          : "text-gray-700 hover:text-blue-500"
                      }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </header>
      </div>

      <main className="mt-16 md:mt-0">
        <section id="home" className="text-start">
          <div>
            <section className="bg-[#0D1117] text-white min-h-screen flex items-center px-6 md:px-24">
              <div>
                <p className="text-md text-gray-300 uppercase tracking-wide mb-2">
                  Welcome to my world
                </p>
                <h1 className="xl:text-5xl text-3xl md:text-6xl font-bold">
                  Hi, I'm <span className="text-[#00D563]">Suyash Pawar</span>
                </h1>
                <h2 className="text-4xl  flex xl:text-4xl  font-bold mt-4 text-white ">
                  <Typewriter />
                </h2>
                <p className="text-gray-300 text-lg mt-6 max-w-3xl leading-relaxed">
                  Full Stack Developer with 1.5+ years of experience
                  specializing in React, Next.js, Node.js, Express.js, and
                  MySQL. Skilled in building fast, scalable web applications and
                  RESTful APIs with a focus on performance and clean
                  architecture. Experienced in full-cycle development, from
                  frontend interfaces to backend logic and database
                  optimization. Passionate about writing efficient code, solving
                  real-world problems, and delivering value through modern
                  JavaScript technologies.
                </p>
              </div>
            </section>
          </div>
          <div className="bg-[#0D1117] px-6 md:px-20 lg:px-24 pt-10 md:pt-20 pb-20 text-white">
            <div className="flex flex-col xl:flex-row gap-12 text-center xl:text-left">
              {/* FIND ME IN */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">FIND ME IN</h2>
                <div className="flex justify-center xl:justify-start gap-4 flex-wrap">
                  {socialLinks.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 group transition duration-300 p-4 rounded-lg transform hover:scale-110 shadow-md hover:shadow-[#00D563]/30"
                      title={item.label}
                    >
                      <span className="text-2xl text-gray-400 group-hover:text-green-500 transition-colors duration-300">
                        {item.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BEST SKILL ON */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">BEST SKILL ON</h2>
                <div className="flex flex-wrap justify-center xl:justify-start gap-4">
                  {skills.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 group transition duration-300 p-4 rounded-lg transform hover:scale-110 shadow-md hover:shadow-[#00D563]/30"
                      title={item.label}
                    >
                      <span className="text-2xl text-gray-400 group-hover:text-green-500 transition-colors duration-300">
                        {item.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fetures">
          <section className="bg-[#0d1117] text-white py-16 px-6 md:px-20">
            <div className="text-center mb-12">
              <h2 className="text-sm uppercase text-[#00D563] font-medium tracking-widest mb-2">
                Features
              </h2>
              <h1 className="text-4xl font-bold">What I Do</h1>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Frontend Development */}
              <div className="bg-[#161b22] p-6 rounded-xl shadow-md hover:shadow-[#00D563]/30 transition duration-300">
                <Code2 className="text-[#00D563] w-6 h-6 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h3>
                <p className="text-gray-400 text-sm">
                  Build responsive and interactive user interfaces using
                  React.js, Next.js, HTML, CSS, Tailwind CSS, and Bootstrap.
                  Focused on performance, accessibility, and pixel-perfect
                  design.
                </p>
              </div>

              {/* Backend Development */}
              <div className="bg-[#161b22] p-6 rounded-xl shadow-md hover:shadow-[#00D563]/30 transition duration-300">
                <Settings2 className="text-[#00D563] w-6 h-6 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Backend Development
                </h3>
                <p className="text-gray-400 text-sm">
                  Develop fast and scalable server-side applications using
                  Node.js and Express.js. Implement RESTful APIs and manage
                  backend logic with modern JavaScript best practices.
                </p>
              </div>

              {/* Database Management */}
              <div className="bg-[#161b22] p-6 rounded-xl shadow-md hover:shadow-[#00D563]/30 transition duration-300">
                <Database className="text-[#00D563] w-6 h-6 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Database Management
                </h3>
                <p className="text-gray-400 text-sm">
                  Efficient design and management of relational databases using
                  MySQL. Skilled in schema design, query optimization, and data
                  security.
                </p>
              </div>

              {/* Full-Stack Web Apps */}
              <div className="bg-[#161b22] p-6 rounded-xl shadow-md hover:shadow-[#00D563]/30 transition duration-300">
                <MonitorSmartphone className="text-[#00D563] w-6 h-6 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Full-Stack Web Apps
                </h3>
                <p className="text-gray-400 text-sm">
                  Develop complete web applications by combining frontend and
                  backend technologies. Experienced in integrating frontend with
                  backend services and deploying production-ready apps.
                </p>
              </div>

              {/* Tools & Workflows */}
              <div className="bg-[#161b22] p-6 rounded-xl shadow-md hover:shadow-[#00D563]/30 transition duration-300">
                <Workflow className="text-[#00D563] w-6 h-6 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Tools & Workflows
                </h3>
                <p className="text-gray-400 text-sm">
                  Version control with Git and GitHub, project management with
                  tools like JIRA, and API testing with Postman. Familiar with
                  development workflows that support agile practices.
                </p>
              </div>
            </div>
          </section>
        </section>

        <section id="projects">
          <div className="py-12 px-4 md:px-16 bg-[#0D1117] text-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 relative w-fit mx-auto after:block after:w-52 after:h-1 after:bg-[#00D563] after:rounded-full after:mt-2">
              My Projects
            </h2>

            <div className="grid xl:grid-cols-3 md:grid-cols-2  gap-12">
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4  h-64 ">
                  <img
                    src="/Secure.jpeg"
                    alt="Screenshot of Enterprise ERP Platform"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  Rbk Payments Web Platform
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Develop the UI and real-time communication between the
                  frontend and backend using the node.js web socket, Develop
                  scalable API, ensuring seamless frontend-backend
                  communication. Utilise cryptography for secure data storage,
                  retrieval, and transmission.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS ,Node.js, Express.js, MySQL .
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://rbkpay.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/eduriseabroad.jpeg"
                    alt="Screenshot of Matrimony Web Platform"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  Edurise Abroad Website
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://eduriseabroad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/hero-bg.png"
                    alt="Screenshot of Talent & Diversity Platform"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  Exim World Website
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://eximworld.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/visa.jpg"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  Visa Worlds Website
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://visaworlds.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/Book-Your-tax-Consultation.jpg"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  Quick Tax Dxb Website
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://quicktaxdxb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/Consulting.jpg"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                 Rbk Gfs
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://rbkgfs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/feed-system.png"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  Jdrs Agro Website
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://jdrsagro.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/About-Avivasasset.jpg"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  RBK Asset Website
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://avivasasset.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/home-banner2.jpg"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  Osg International Website
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://osginternational.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/Lotus.jpg"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                  Lotus Healing
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://lotushealingcenterllc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/about.jpg"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                Elaf Global
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://elafglobal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="bg-[#161b22] p-6 rounded-xl text-start shadow-md hover:shadow-[#00D563]/30 transition duration-300 group">
                <div className="relative overflow-hidden rounded-md mb-4 h-64">
                  <img
                    src="/finnova.jpg"
                    alt="Screenshot of Railway Reservation System"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[#00D563] text-lg font-semibold mb-2">
                Finnova Research
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Developed responsive and dynamic UI using React.js and
                  tailwind CSS ensuring real-time communication between the
                  frontend.
                </p>
                <p className="italic text-sm text-gray-400 mb-2">
                  Technologies- React.js, Next.js, JavaScript, Tailwind.CSS,
                  Html, CSS.
                </p>
                <div class="flex items-center mt-auto space-x-2 text-[#00D563] hover:text-[#1C85C0] font-medium cursor-pointer">
                  <a
                    href="https://finnovaresearch.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 group"
                  >
                    <span>Learn more</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      class="text-xl transition-transform duration-300 group-hover:translate-x-1 mt-[2px]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume">
          <section className="bg-[#0D1117] text-center py-10 px-4">
            <p className="text-[#00D563] text-sm uppercase tracking-wide mb-2">
              2 Years of Experience
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-4">
              My Resume
            </h1>
            <div className="flex justify-center mb-6"></div>

            {/* <a
              href="/components/SP-Resume-2025.jpg"
              download
              className="inline-block bg-[#111317] text-gray-200 px-6 py-3 rounded-lg shadow border border-gray-500 hover:shadow-[#00D563] transition duration-300"
            >
              Download CV
            </a> */}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Suyash-React-Developer.pdf";
                link.download = "Suyash-React-Developer.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="inline-block bg-[#111317] text-gray-200 px-6 py-3 rounded-lg shadow border border-gray-500 hover:shadow-[#00D563] transition duration-300"
            >
              Download CV
            </button>

            <New />
          </section>
        </section>

        <section id="contact" className="text-center">
          <div>
            <Contacts />
          </div>
        </section>

        <div className="bg-[#081B4F] w-full px-10">
          <div className="mx-auto py-5 w-full flex flex-wrap sm:flex-row">
            <p className="text-white text-sm text-center font-inter w-full">
              © {new Date().getFullYear()}. Suyash Pawar All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Internationalbankaccount;