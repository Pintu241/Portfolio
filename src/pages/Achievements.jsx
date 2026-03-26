import { useState, useEffect } from "react";

const Achievements = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const achievements = [
    {
      title: "150+ DSA Problems Solved",
      description: "Solved 150+ coding problems on competitive programming platforms, building a strong foundation in data structures and algorithms.",
      date: "Mar 2026",
      icon: "💡",
    },
    {
      title: "50-Day Coding Streak Badge",
      description: "Earned the 50-day coding streak badge by consistently solving problems daily, demonstrating strong discipline and problem-solving practice.",
      date: "Mar 2026",
      icon: "🔥",
    },
    {
      title: "AI-Powered SaaS — InterviewIQ",
      description: "Successfully built and deployed InterviewIQ — a production-ready AI mock interview platform with payment integration and cloud hosting.",
      date: "Mar 2026",
      icon: "🚀",
    },
    {
      title: "Full Stack Web Development — 100 Hours",
      description: "Completed a rigorous 100-hour full stack training program covering MERN stack, REST APIs, authentication, and cloud deployment.",
      date: "Jul 2025",
      icon: "🏆",
    },
    {
      title: "Cloud Computing Certification — NPTEL",
      description: "Earned NPTEL certification in Cloud Computing, covering cloud architecture, virtualization, deployment models, and cloud security.",
      date: "Aug 2025",
      icon: "☁️",
    },
  ];

  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div className="min-h-screen text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">Achievements</span>
          </h2>
          <div className="mb-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`group relative glass rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/20 transition-all duration-500 neon-border hover:border-indigo-500/50 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-700 group-hover:bg-indigo-900/40 rounded-full text-2xl transition-colors duration-300">
                      <span>{item.icon}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">{item.title}</h3>
                      <span className="text-sm font-medium text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full inline-block">{item.date}</span>
                    </div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
