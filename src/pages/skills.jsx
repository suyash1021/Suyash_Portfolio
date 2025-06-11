import React, { useEffect, useRef, useState } from "react";

const skillsData = {
  frontend: [
    { name: "React.js / Next.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "HTML5 & CSS3", level: 85 },
    { name: "Tailwind CSS / Bootstrap", level: 85 },
  ],
  backend: [
    { name: "Node.js & Express.js", level: 90 },
    { name: "MySQL/SQL", level: 90 },
  ],
};

const ProgressBar = ({ name, level, visible }) => (
  <div className="mb-5">
    <div className="flex justify-between text-sm font-medium text-gray-200">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full h-2 bg-black rounded-full mt-1 overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-[#00D563] transition-all duration-1000 ease-out`}
        style={{ width: visible ? `${level}%` : "0%" }}
      />
    </div>
  </div>
);

const DevelopmentSkill = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only animate once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full bg-[#0F111A] text-gray-200 py-10 min-h-screen"
    >
      <h4 className="text-[#00D563] tracking-widest text-sm mb-2">FEATURES</h4>
      <h2 className="text-3xl font-bold text-gray-100 mb-8">
        Development Skill
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 ">
        <div>
          <h3 className="text-xl font-semibold mb-5">Frontend Development</h3>
          {skillsData.frontend.map((skill, index) => (
            <ProgressBar key={index} {...skill} visible={visible} />
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-5">Backend & Databases</h3>
          {skillsData.backend.map((skill, index) => (
            <ProgressBar key={index} {...skill} visible={visible} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSkill;
