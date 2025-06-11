import React, { useRef, useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Blog1() {
  const sectionsRefs = {
    Our_Strategic: useRef(null),
    Our_Multi_Asset_Services: useRef(null),
    Partnering_with: useRef(null),
    Our_Services: useRef(null),
    Our_Investment: useRef(null),
    Creating_Collective_Funds: useRef(null),
    Benefits_for_Your_Clients: useRef(null),
    Benefits_for_Your_Business: useRef(null),
  };

  const [highlightedSection, setHighlightedSection] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (ref, section) => {
    if (!ref.current) return; // Prevents error if ref is null
  
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    const offsetTop = ref.current.offsetTop - headerHeight;
  
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  
    setHighlightedSection(section);
    setActiveSection(section);
  };
  

  useEffect(() => {
    if (highlightedSection) {
      const timer = setTimeout(() => {
        setHighlightedSection(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [highlightedSection]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = null;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      Object.keys(sectionsRefs).forEach((key) => {
        const ref = sectionsRefs[key];
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = key;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative mt-14">
        <img src="/fund-investors.jpg" className="w-full h-auto" alt="Fund Investors" />
        <div className="text-black absolute top-1/2 left-10 -translate-y-1/2 space-y-4">
          <h1 className="text-5xl font-semibold font-inter">Fund Investors</h1>
          <p className="w-2/3 text-xl font-inter">
            At Avivas Asset, we focus on building long-term partnerships with a select group of high-quality financial advisory firms, offering the tailored support their growth requires.
          </p>
        </div>
      </div>

      <div className="xl:flex lg:flex justify-between xl:px-10 lg:px-10 px-4 xl:py-20 lg:py-20 py-10 space-x-2 xl:space-y-0 lg:space-y-0 space-y-10">
        <div className="xl:pt-24 lg:pt-24 px-4 xl:py-24 lg:py-24 py-4 xl:sticky lg:sticky top-0 h-full">
          <ul className="space-y-2 list-inside">
            {Object.keys(sectionsRefs).map((key, index) => (
              <div
                key={index}
                className={`cursor-pointer flex justify-between text-blue-500 px-4 py-2 font-inter text-sm border border-black transition duration-300 transform hover:bg-blue-500 hover:text-white ${
                  activeSection === key ? "bg-black text-white" : ""
                } ${highlightedSection === key ? "bg-blue-500" : ""}`}
                onClick={() => scrollToSection(sectionsRefs[key], key)}
              >
                {key.replace(/_/g, " ")}
                <FaChevronRight className="text-lg mt-1" />
              </div>
            ))}
          </ul>
        </div>

        <div className="pt-24 space-y-4 px-6 py-6 font-inter max-w-4xl">
          <div ref={sectionsRefs.Our_Strategic} className="space-y-4 h-96">
            <h1 className="font-bold text-[20px]">Dynamic Asset Allocation</h1>
            <p>
              Dynamic asset allocation is central to our investment strategy. We carefully select asset classes, regions, and sectors at the right time to deliver long-term returns.
            </p>
          </div>

          <div ref={sectionsRefs.Our_Multi_Asset_Services}>
            <h1 className="font-bold text-[20px]">A Responsible Approach to Risk</h1>
            <p>
              We design our multi-asset portfolios with diversification at their core, spreading investments across asset classes, regions, and themes to mitigate risk.
            </p>
          </div>

          <div ref={sectionsRefs.Creating_Collective_Funds}>
            <h1 className="font-bold text-[20px]">Creating Collective Funds</h1>
            <p>
              We establish collective investment funds that pool investor capital, enhancing diversification and reducing costs while maximizing returns.
            </p>
          </div>

          <div ref={sectionsRefs.Benefits_for_Your_Clients}>
            <h1 className="font-bold text-[20px]">Benefits for Your Clients</h1>
            <p>
              Our investment solutions provide your clients with well-diversified portfolios, professional management, and access to institutional-grade investment opportunities.
            </p>
          </div>

          <div ref={sectionsRefs.Benefits_for_Your_Business}>
            <h1 className="font-bold text-[20px]">Benefits for Your Business</h1>
            <p>
              Partnering with us allows you to offer high-quality investment solutions, strengthen client relationships, and grow your advisory business with confidence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}