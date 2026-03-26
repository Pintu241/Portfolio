import { useState, useEffect } from "react";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Aug 2025",
      description: "Comprehensive training on cloud computing fundamentals, services, deployment models, and best practices for cloud security and management.",
      skills: ["Cloud Architecture", "Virtualization", "Cloud Services", "Security"],
      link: "https://drive.google.com/file/d/1HhSfMxkIIs4bHWNNTlgy5sXKJYkxjNli/view?usp=drive_link",
      image: "/images/nptel-cloud-computing.png",
    },
    {
      title: "Data Structures and Algorithm",
      issuer: "iamneo",
      date: "Dec 2024",
      description: "In-depth training on core data structures and algorithmic problem-solving techniques used in competitive programming and technical interviews.",
      skills: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "Sorting"],
      link: "https://drive.google.com/file/d/1BmskUso2XtWsJxsPzH1ve-0BaNkKo00v/view?usp=drive_link",
      image: "/images/dsa-cert.png",
    },
    {
      title: "Object Oriented Programming",
      issuer: "iamneo",
      date: "Dec 2024",
      description: "Advanced OOP concepts including encapsulation, polymorphism, inheritance, and design patterns applied to real-world software development.",
      skills: ["OOP", "Design Patterns", "Encapsulation", "Inheritance", "C++"],
      link: "https://drive.google.com/file/d/1v6M05uuqBDIVrMIGgRXtUAvf5bLPzZGc/view?usp=drive_link",
      image: "/images/oop-cert.png",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "Mar 2026",
      description: "100-hour intensive training covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, RESTful APIs, authentication, and cloud deployment.",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST API", "Authentication"],
      link: "https://drive.google.com/file/d/1ygeQ-zeRGSfp91h4OJorPAd7Ieqa_8cs/view?usp=drive_link",
      image: "/images/udemy-fullstack.png",
    },
  ];

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="min-h-screen text-white pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 opacity-10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10" />

      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            Certifications
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2" />
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Professional credentials validating my technical expertise and continuous learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div
                className="relative w-full"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s",
                  transform: hoveredCert === index ? "rotateY(180deg)" : "rotateY(0deg)",
                  height: "280px"
                }}
              >
                {/* Front */}
                <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
                  <div className="bg-slate-800/70 rounded-xl neon-border hover:border-indigo-500 h-full flex flex-col overflow-hidden">
                    <div className="relative h-36">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-indigo-600/90 px-3 py-1 rounded-full text-xs font-medium z-20">{cert.issuer}</div>
                      <div className="absolute bottom-4 right-4 text-white text-sm z-20">{cert.date}</div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h2 className="text-lg font-semibold text-blue-400 mb-2">{cert.title}</h2>
                      <p className="text-gray-400 text-sm flex-1">{cert.description.substring(0, 90)}...</p>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                  <div className="bg-gradient-to-br from-indigo-900/90 to-slate-800/90 rounded-xl border border-indigo-700 h-full flex flex-col p-6">
                    <h2 className="text-lg font-semibold text-white mb-3">{cert.title}</h2>
                    <div className="mb-3"><p className="text-gray-400 text-xs">Issued by</p><p className="text-indigo-300 font-medium">{cert.issuer} · {cert.date}</p></div>
                    <div className="mb-4 flex-1">
                      <p className="text-gray-400 text-xs mb-2">Skills Covered</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-indigo-800/50 text-indigo-200 text-xs rounded-md">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                      className="bg-white text-indigo-900 font-medium py-2 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors text-sm">
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center text-xs text-gray-500">Hover to view details</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
