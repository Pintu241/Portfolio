import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const interests = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Open Source", icon: "🌐" },
    { name: "DSA Practice", icon: "📊" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen text-white pt-24 pb-16 px-6 relative overflow-hidden">
      <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="relative mb-16 text-center">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            About Me
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative bg-slate-800 p-1 rounded-2xl">
                <img
                  src="/images/pintu.jpg"
                  alt="Pintu Kumar"
                  className="w-64 h-64 object-cover object-top rounded-xl"
                />
              </div>
            </div>

            <div className="w-full glass rounded-xl p-6 space-y-4 neon-border">
              <h3 className="text-xl font-medium text-gray-200 mb-4">Quick Facts</h3>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-900/50 p-2 rounded-lg"><span className="text-indigo-300">📍</span></div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-200">Muzaffarpur, Bihar, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-900/50 p-2 rounded-lg"><span className="text-indigo-300">🎓</span></div>
                <div>
                  <p className="text-gray-400 text-sm">Education</p>
                  <p className="text-gray-200">B.Tech IT — LPU (Aug 2023–Present)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-900/50 p-2 rounded-lg"><span className="text-indigo-300">📞</span></div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-gray-200">+91 9955116500</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-indigo-900/50 p-2 rounded-lg"><span className="text-indigo-300">🏆</span></div>
                <div>
                  <p className="text-gray-400 text-sm">Achievements</p>
                  <p className="text-gray-200">150+ DSA Problems · 50-day streak</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div className="glass rounded-xl p-8 neon-border">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">My Journey</h2>
              
              <p className="text-lg mb-4 leading-relaxed text-gray-200">
                Hello! I'm <span className="font-semibold text-purple-400">Pintu Kumar</span>, a passionate 
                Full Stack Developer pursuing B.Tech in Information Technology at Lovely Professional University, Phagwara.
              </p>
              
              <p className="text-lg mb-4 leading-relaxed text-gray-300">
                I specialize in the MERN stack and love building AI-powered SaaS platforms. My flagship project, 
                InterviewIQ, is a real-time mock interview platform using OpenRouter API, Firebase Auth, Razorpay, 
                and deployed on Render — built end-to-end by me in just over a month.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300">
                I completed a 100-hour Full Stack Web Development training on Udemy, and hold certifications in 
                Cloud Computing (NPTEL) and DSA &amp; OOP (iamneo). Outside of coding, I'm constantly solving 
                algorithmic problems and contributing to my craft.
              </p>
            </div>

            <div className="glass rounded-xl p-8 neon-border">
              <h2 className="text-2xl font-semibold text-blue-400 mb-6">When I'm Not Coding</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-700/50 rounded-lg p-4 flex flex-col items-center text-center hover:bg-indigo-900/30 transition-colors duration-300"
                  >
                    <span className="text-3xl mb-2">{interest.icon}</span>
                    <span className="text-gray-200">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass rounded-xl p-8 neon-border">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Education Timeline</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-indigo-500 pl-4">
                  <p className="text-indigo-300 text-sm">Aug 2023 – Present</p>
                  <p className="text-gray-200 font-semibold">B.Tech in Information Technology</p>
                  <p className="text-gray-400">Lovely Professional University, Phagwara — CGPA: 7.55</p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <p className="text-purple-300 text-sm">Mar 2022 – May 2023</p>
                  <p className="text-gray-200 font-semibold">Intermediate (PCM)</p>
                  <p className="text-gray-400">Langat Singh College, Muzaffarpur — 81.4%</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-blue-300 text-sm">Mar 2020 – May 2021</p>
                  <p className="text-gray-200 font-semibold">Matriculation</p>
                  <p className="text-gray-400">Blue Sky Public School, Muzaffarpur — 89%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
