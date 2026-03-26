import { useState, useEffect } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: "InterviewIQ",
      description: "AI-powered mock interview SaaS platform with real-time interview simulation, feedback system, and subscription-based access via Razorpay.",
      longDescription: "Built with MERN stack, Firebase Authentication, and Open Router API. Features responsive dashboard, Redux Toolkit state management, and is deployed on Render cloud with environment variables for scalable production deployment.",
      technologies: ["React", "Node.js", "MongoDB", "Firebase", "Redux", "Razorpay", "OpenRouter API", "Tailwind CSS"],
      demoLink: "https://interviewiq-frontend.onrender.com/",
      codeLink: "https://github.com/Pintu241/interview-iq/tree/main/3.interviewIQ",
      screenshot: "/images/interviewiq-screenshot.png",
      categories: ["Full Stack", "AI/SaaS"],
      featured: true,
      date: "Feb 2026 – Mar 2026"
    },
    {
      title: "DecisionAI",
      description: "Intelligent decision support system with AI-powered recommendations, confidence scores, and real-time analytics dashboard using Gemini API.",
      longDescription: "Built comparison management system using MERN stack. Engineered AI insight module using Gemini API for explainable recommendations. Architected scalable backend following layered service-based structure.",
      technologies: ["React", "Node.js", "MongoDB", "Gemini API", "Recharts", "Tailwind CSS"],
      demoLink: "https://decisioniq.vercel.app/",
      codeLink: "https://github.com/Pintu241/DecisionIQ",
      screenshot: "/images/decisioniq-screenshot.png",
      categories: ["Full Stack", "AI/SaaS"],
      featured: true,
      date: "Jan 2026 – Feb 2026"
    },
    {
      title: "Teavelo",
      description: "Full-stack expense tracker and budget manager with JWT authentication, transaction history, expense categorization, and responsive React dashboard.",
      longDescription: "Designed using MERN stack for efficient expense and budget management. Implemented secure RESTful APIs and JWT auth. Integrated budget tracking, transaction history, and expense categorization with optimized MongoDB schema design.",
      technologies: ["React", "Express.js", "MongoDB", "JWT", "Node.js", "Tailwind CSS"],
      demoLink: "https://traveleo07.onrender.com",
      codeLink: "https://github.com/Pintu241/Traveleo",
      screenshot: "/images/traveleo-screenshot.png",
      categories: ["Full Stack", "Web App"],
      featured: false,
      date: "Nov 2025 – Dec 2025"
    },
  ];

  const categories = ["all", ...new Set(projects.flatMap(p => p.categories))];
  const filteredProjects = activeFilter === "all" ? projects : projects.filter(p => p.categories.includes(activeFilter));

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="min-h-screen text-white pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            Featured Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            A showcase of MERN stack applications, AI-powered SaaS platforms, and full-stack web solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category ? "bg-indigo-600 text-white" : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-xl overflow-hidden neon-border hover:border-indigo-500 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                <img src={project.screenshot} alt={project.title} className="w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium z-20">Featured</div>
                )}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                  {project.categories.map((category, idx) => (
                    <span key={idx} className="bg-slate-800/80 backdrop-blur-sm text-gray-200 px-3 py-1 rounded-full text-xs">{category}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold text-blue-400">{project.title}</h2>
                  <span className="text-xs text-gray-500">{project.date}</span>
                </div>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 text-indigo-300 text-sm rounded-full">{tech}</span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center border border-indigo-500 text-indigo-400 px-4 py-2 rounded-lg text-sm hover:bg-indigo-900/30 transition">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-8 text-center border border-indigo-800/30">
          <h2 className="text-2xl font-semibold text-white mb-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
          <a href="/contact" className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
