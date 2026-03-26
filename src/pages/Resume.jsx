import { useState, useEffect } from "react";

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => { setIsLoaded(true); }, []);

  const resumeData = {
    contact: {
      email: "yaduvanasipintu641@gmail.com",
      mobile: "+91 9955116500",
      linkedin: "https://www.linkedin.com/in/pintu-kumar-042025297/",
      github: "https://github.com/Pintu241/",
    },

    education: [
      {
        institution: "Lovely Professional University",
        location: "Phagwara, Punjab",
        degree: "Bachelor of Technology — Information Technology",
        period: "Aug 2023 – Present",
        details: "CGPA: 7.55",
      },
      {
        institution: "Langat Singh College",
        location: "Muzaffarpur, Bihar",
        degree: "Intermediate (PCM)",
        period: "Mar 2022 – May 2023",
        details: "Percentage: 81.4%",
      },
      {
        institution: "Blue Sky Public School",
        location: "Muzaffarpur, Bihar",
        degree: "Matriculation",
        period: "Mar 2020 – May 2021",
        details: "Percentage: 89%",
      },
    ],

    skills: [
      {
        category: "Languages",
        items: ["C/C++", "JavaScript", "PHP", "SQL"],
      },
      {
        category: "Frontend",
        items: ["HTML", "CSS", "Bootstrap", "React.js", "Tailwind CSS"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "REST API", "JWT"],
      },
      {
        category: "Libraries",
        items: ["Axios", "Socket.io", "Redux Toolkit"],
      },
      {
        category: "Tools & Platforms",
        items: ["Git", "GitHub", "Docker", "Postman", "MongoDB Atlas", "VS Code", "Figma"],
      },
      {
        category: "Soft Skills",
        items: ["Problem-Solving", "Team Player", "Adaptability", "Leadership"],
      },
    ],

    projects: [
      {
        title: "InterviewIQ — AI-Powered Mock Interview SaaS Platform",
        period: "Feb 2026 – Mar 2026",
        description: [
          "Built AI-powered interview platform using MERN stack, Firebase Authentication, and Open Router API for real-time interview simulation.",
          "Developed responsive UI with React, Vite, Redux Toolkit, and Tailwind CSS, including dashboard and feedback system.",
          "Integrated Razorpay, REST APIs, and MongoDB for secure authentication and subscription-based access.",
          "Deployed on Render cloud using environment variables for scalable production deployment.",
        ],
        tech: "React, Node.js, MongoDB, Firebase, Redux Toolkit, Razorpay, OpenRouter API, Tailwind CSS",
        github: "https://github.com/Pintu241/interview-iq/tree/main/3.interviewIQ",
        live: "https://interviewiq-frontend.onrender.com/",
      },
      {
        title: "DecisionAI — Intelligent Decision Support System",
        period: "Jan 2026 – Feb 2026",
        description: [
          "Built comparison management system using MERN stack, REST APIs, and MongoDB.",
          "Engineered AI insight module using Gemini API to create explainable recommendations and confidence scores.",
          "Created interactive analytics dashboard using Recharts, React, and Tailwind CSS for real-time visualization.",
          "Architected scalable backend with Node.js, Express, and MongoDB following layered service-based structure.",
        ],
        tech: "React, Node.js, MongoDB, Gemini API, Recharts, Tailwind CSS",
        github: "https://github.com/Pintu241/DecisionIQ",
        live: "https://decisioniq.vercel.app/",
      },
      {
        title: "Teavelo — Expense Tracker & Budget Manager",
        period: "Nov 2025 – Dec 2025",
        description: [
          "Designed a full-stack Expense Tracking Application using MERN stack for efficient expense and budget management.",
          "Implemented secure RESTful APIs and JWT authentication using Node.js and Express.js.",
          "Integrated features like budget tracking, transaction history, and expense categorization using MongoDB with optimized schema design.",
          "Developed responsive dashboard UI with React.js and Tailwind CSS, ensuring proper client-server communication.",
        ],
        tech: "React.js, Express.js, Node.js, MongoDB, JWT, Tailwind CSS",
        github: "https://github.com/Pintu241/Traveleo",
        live: "https://traveleo07.onrender.com",
      },
    ],

    training: [
      {
        title: "Full Stack Web Development Training",
        company: "Udemy",
        period: "Jun 2025 – Jul 2025",
        type: "CERTIFICATION TRAINING",
        description: [
          "Completed 100-hour intensive training covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB.",
          "Learned to build full-stack web applications, RESTful APIs, authentication systems, and database integration.",
          "Practiced real-world projects involving API integration, state management, and cloud deployment.",
        ],
        link: "https://drive.google.com/file/d/1ygeQ-zeRGSfp91h4OJorPAd7Ieqa_8cs/view?usp=drive_link",
      },
    ],

    certificates: [
      {
        name: "Cloud Computing",
        issuer: "NPTEL",
        date: "Aug 2025",
        link: "https://drive.google.com/file/d/1HhSfMxkIIs4bHWNNTlgy5sXKJYkxjNli/view?usp=drive_link",
      },
      {
        name: "Data Structures and Algorithm",
        issuer: "iamneo",
        date: "Dec 2024",
        link: "https://drive.google.com/file/d/1BmskUso2XtWsJxsPzH1ve-0BaNkKo00v/view?usp=drive_link",
      },
      {
        name: "Object Oriented Programming",
        issuer: "iamneo",
        date: "Dec 2024",
        link: "https://drive.google.com/file/d/1v6M05uuqBDIVrMIGgRXtUAvf5bLPzZGc/view?usp=drive_link",
      },
    ],

    achievements: [
      {
        title: "150+ DSA Problems Solved",
        date: "Mar 2026",
        description: "Solved 150+ problems, building a strong foundation in data structures and algorithms.",
        icon: "💡",
      },
      {
        title: "50-Day Coding Streak Badge",
        date: "Mar 2026",
        description: "Earned the 50-day coding streak badge, showing strong consistency and problem-solving practice.",
        icon: "🔥",
      },
    ],
  };

  const TabButton = ({ id, label, active }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
        active
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20"
          : "text-gray-400 hover:text-indigo-400 hover:bg-indigo-50/10"
      }`}
    >
      {label}
    </button>
  );

  const Card = ({ children, className = "" }) => (
    <div className={`glass neon-border p-5 rounded-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );

  const Badge = ({ children }) => (
    <span className="text-sm font-medium text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full inline-block border border-indigo-800/40">
      {children}
    </span>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="space-y-5">
            {resumeData.education.map((edu, i) => (
              <Card key={i}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300">{edu.institution}</h3>
                    <p className="text-gray-400 text-sm mt-0.5">📍 {edu.location}</p>
                  </div>
                  <Badge>{edu.period}</Badge>
                </div>
                <p className="text-white mt-3 font-medium">{edu.degree}</p>
                <p className="text-indigo-300 mt-1 text-sm font-semibold">{edu.details}</p>
              </Card>
            ))}
          </div>
        );

      case "skills":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resumeData.skills.map((group, i) => (
              <Card key={i}>
                <h3 className="text-lg font-bold text-cyan-300 mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-900/60 text-indigo-200 border border-indigo-700/40 hover:bg-indigo-700/60 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        );

      case "projects":
        return (
          <div className="space-y-6">
            {resumeData.projects.map((proj, i) => (
              <Card key={i}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h3 className="text-lg font-bold text-cyan-300">{proj.title}</h3>
                  <Badge>{proj.period}</Badge>
                </div>
                <ul className="space-y-2 mb-4">
                  {proj.description.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-300 font-medium">Stack: </span>{proj.tech}
                  </p>
                  <div className="flex gap-3">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:text-indigo-200 transition-colors font-medium">
                      GitHub ↗
                    </a>
                    <a href={proj.live} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-200 transition-colors font-medium">
                      Live ↗
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );

      case "training":
        return (
          <div className="space-y-6">
            {resumeData.training.map((t, i) => (
              <Card key={i}>
                <div className="text-xs font-bold text-indigo-400 tracking-widest mb-2 uppercase">
                  {t.type}
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-cyan-300">{t.title}</h3>
                    <p className="text-gray-400 text-sm">{t.company}</p>
                  </div>
                  <Badge>{t.period}</Badge>
                </div>
                <ul className="space-y-2 mb-4">
                  {t.description.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-300 text-sm">
                      <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {t.link && (
                  <a href={t.link} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-indigo-400 hover:text-indigo-200 transition-colors font-medium">
                    View Certificate ↗
                  </a>
                )}
              </Card>
            ))}
          </div>
        );

      case "certificates":
        return (
          <div className="space-y-4">
            {resumeData.certificates.map((cert, i) => (
              <Card key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/60 border border-indigo-700/40 flex items-center justify-center text-lg shrink-0">
                    🏆
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-300">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge>{cert.date}</Badge>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-indigo-400 hover:text-indigo-200 transition-colors font-medium whitespace-nowrap">
                    View ↗
                  </a>
                </div>
              </Card>
            ))}

            <div className="mt-8">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">Achievements</h3>
              <div className="space-y-4">
                {resumeData.achievements.map((a, i) => (
                  <Card key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-900/60 border border-indigo-700/40 flex items-center justify-center text-lg shrink-0">
                        {a.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-cyan-300">{a.title}</h4>
                        <p className="text-gray-400 text-sm">{a.description}</p>
                      </div>
                    </div>
                    <Badge>{a.date}</Badge>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-white py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            <span className="text-shimmer">My Resume</span>
          </h2>
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"></div>
          </div>

          {/* Contact bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: "✉️", label: resumeData.contact.email,     href: `mailto:${resumeData.contact.email}` },
              { icon: "📱", label: resumeData.contact.mobile,    href: `tel:${resumeData.contact.mobile}` },
              { icon: "🔗", label: "LinkedIn",                   href: resumeData.contact.linkedin },
              { icon: "💻", label: "GitHub",                     href: resumeData.contact.github },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass neon-border text-gray-300 hover:text-white transition-colors text-sm">
                <span>{item.icon}</span> {item.label}
              </a>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 glass neon-border p-3 rounded-2xl">
            <TabButton id="education"    label="🎓 Education"    active={activeTab === "education"} />
            <TabButton id="skills"       label="⚡ Skills"        active={activeTab === "skills"} />
            <TabButton id="projects"     label="🚀 Projects"      active={activeTab === "projects"} />
            <TabButton id="training"     label="📚 Training"      active={activeTab === "training"} />
            <TabButton id="certificates" label="🏆 Certificates"  active={activeTab === "certificates"} />
          </div>

          {/* Tab content */}
          <div className="mt-6 transition-all duration-300">
            {renderTabContent()}
          </div>

          {/* Download button */}
          <div className="mt-14 text-center">
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-violet-500/30 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">📄 Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
