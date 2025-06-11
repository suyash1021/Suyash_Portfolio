import { useState } from "react";
import Skills from "@/pages/skills";

export default function EducationTabs() {
  const [activeTab, setActiveTab] = useState("Education");
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
  };
  return (
    <div className="min-h-screen xl:w-full w-90 mt-5  bg-[#0D1117] text-white ">
      {/* Tabs */}
      <div className="xl:flex xl:flex-row  flex-col flex space-y-2 xl:space-y-0  rounded-xl justify-center   border-gray-700 ">
        {["Education", "Professional Skills", "Experience"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2  text-sm font-medium ${
              activeTab === tab
                ? "bg-[#00D563] text-white"
                : "bg-black hover:border-white border transition-all"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 space-y-6 text-start max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">{activeTab}</h1>

        {activeTab === "Education" && (
          <>
            {[
              {
                title: "Master of Computer Science (MCS)",
                university: "Savitribai Phule Pune University, Pune",
                duration: "2022–2024",
                cgpa: "7.8",
                description:
                  "Specialized in advanced software development and system architecture.",
              },
              {
                title: "Bachelor of Computer Science (BSc CS)",
                university: "Savitribai Phule Pune University, Pune",
                duration: "2019–2022",
                cgpa: "8.00",
                description:
                  "Focused on core programming, algorithms, and database management.",
              },
              {
                title: "Higher Secondary (Science)",
                university:
                  "D.K.More, Janta Junior College VadgoanPan, Sangamner ",
                duration: "2019",
                cgpa: "53.54%",
                description:
                  "PCMB stream with focus on analytical problem-solving.",
              },
              {
                title: "Secondary School (SSC)",
                university: "B.S.Thorat Vidyalaya Nilwande, Sangamner",
                duration: "2017",
                cgpa: "70.60%",
                description:
                  "Strong foundation in mathematics and logical reasoning.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black p-5 rounded-lg border-l-4 border-[#00D563]"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">
                  {item.university} ({item.duration})
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <p>{item.description}</p>
                  <span className="bg-[#00D563] text-sm  font-bold px-2 py-1 rounded-full">
                    {item.cgpa}
                  </span>
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === "Professional Skills" && (
          <>
            <Skills />
          </>
        )}

        {activeTab === "Experience" && (
          <>
            <div className="text-sm pb-2">2023 - present</div>
            <a className="text-xl">Job Experience</a>
            {[
              {
                title: "Associate Software Developer",
                company: "RBK Technologies, Pune",
                duration: "May 2024 – Present",
                description:
                  "Design and develop scalable React.js components and optimize Node.js backend services for high-performance applications. Lead end-to-end development cycles, from requirement analysis to deployment and maintenance, ensuring agile delivery. Architect and implement RESTful APIs using Express.js and MySQL, focusing on efficient data handling and security. Enhance application security with JWT authentication and role-based access control. Write comprehensive unit/integration tests and maintain detailed API documentation for team collaboration.",
              },
              {
                title: "Soft The Next",
                company: "Soft The Next",
                duration: "November 2023 – April 2024",
                description:
                  "Designed and developed a dynamic, full-stack health and fitness website leveraging React.js and Next.js for a responsive frontend, and Node.js with Express.js for a robust backend. Integrated Tailwind CSS for modern, utility-first styling, with core layout and accessibility structured using HTML and CSS. Implemented key features such as user authentication, workout and nutrition tracking, personalized dashboards, and RESTful APIs to ensure seamless user experience and performance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-5 rounded-lg border-l-4 border-[#00D563]"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">
                  {item.company} ({item.duration})
                </p>
                <p className="mt-2">{item.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
