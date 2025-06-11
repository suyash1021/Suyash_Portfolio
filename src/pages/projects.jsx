"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Enterprise ERP Platform",
    tech: "Technologies: Angular, Bootstrap, MySQL, MongoDB, Java",
    points: [
      "Designed intuitive web pages using Angular and Bootstrap.",
      "Ensured responsive design for seamless user experience across devices.",
      "Deployed updates and resolved frontend issues promptly.",
      "Participated in Scrum meetings and optimized performance.",
    ],
    highlight: true,
  },
  {
    title: "Matrimony Web Platform",
    tech: "Technologies: Angular, Bootstrap, MongoDB, Ionic, Node.js",
    points: [
      "Developed features and led migration to Angular 17.",
      "Managed deployments and ensured application availability.",
      "Maintained code quality and scalability best practices.",
      "Collaborated for effective project delivery and bug resolution.",
    ],
  },
  {
    title: "Talent & Diversity Platform",
    tech: "Technologies: Angular, Node.js, Express.js",
    points: [
      "Collaborated closely with clients to understand requirements and deliver tailored solutions.",
      "Developed and optimized web portals for seamless functionality and user experience.",
      "Implemented new features and enhanced existing ones for better scalability.",
      "Designed and optimized APIs for efficient data handling and integration.",
    ],
  },
  {
    title: "Railway Reservation System (24-Hour Challenge)",
    tech: "Technologies: Angular, Node.js, Express.js, MongoDB",
    points: [
      "Designed an interactive seat map showing booked vs available seats visually.",
      "Implemented user login, booking logic, and real-time updates under a tight deadline.",
      "Integrated backend APIs for dynamic data fetching and booking confirmation.",
      "Handled full-stack responsibilities — from UI to backend — in under 24 hours.",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-[#0d1117] text-white py-20 px-4 md:px-24" id="projects">
      <div className="text-center mb-14">
        <h2 className="text-yellow-500 text-sm tracking-widest uppercase mb-2">Projects</h2>
        <div className="w-16 h-[2px] bg-yellow-500 mx-auto mb-2"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`p-6 rounded-xl border ${
              project.highlight
                ? "border-yellow-500 shadow-yellow-500/30 shadow-lg"
                : "border-gray-700"
            } hover:scale-[1.02] transition-transform bg-[#161b22]`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                project.highlight ? "text-green-400" : "text-teal-400"
              }`}
            >
              {project.title}
            </h3>
            <p className="italic text-sm text-gray-300 mb-3">{project.tech}</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
