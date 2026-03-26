import { useState, useEffect, useRef } from "react";
import profileImage from "../assets/pintu.jpg";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React.js Developer",
  "Node.js Developer",
  "SaaS Builder",
];

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "150+", label: "DSA Problems" },
  { value: "50", label: "Day Streak 🔥" },
  { value: "4", label: "Certifications" },
];

const skills = [
  "React.js", "Node.js", "JavaScript", "MongoDB",
  "Express.js", "Tailwind CSS", "REST API", "Firebase",
];

const interests = [
  { name: "Problem Solving", icon: "🧩" },
  { name: "Open Source", icon: "🌐" },
  { name: "DSA", icon: "📊" },
];

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (isPaused) {
      timeout = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 1800);
    } else if (isDeleting) {
      if (displayed.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timeout = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 45);
      }
    } else {
      if (displayed.length === current.length) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, roleIndex]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">

      {/* Ambient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[100px]" />
        <div className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #a5b4fc 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      {/* ── HERO ── */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20 pb-10">
        <div className={`w-full max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-8">

            {/* LEFT — Text */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-medium mb-6 animate-fadeIn">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for Opportunities
              </div>

              <h1 className="font-bold leading-tight mb-4 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                <span className="block text-5xl md:text-6xl xl:text-7xl text-white">Hi, I'm</span>
                <span className="block text-5xl md:text-6xl xl:text-7xl text-shimmer mt-1">Pintu Kumar</span>
              </h1>

              <div className="mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                <span className="text-2xl md:text-3xl font-semibold tracking-wide"
                  style={{
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  {displayed}
                  <span
                    style={{
                      display: "inline-block",
                      width: "2px",
                      height: "1.2em",
                      background: "linear-gradient(180deg, #60a5fa, #a78bfa)",
                      marginLeft: "3px",
                      verticalAlign: "middle",
                      borderRadius: "2px",
                      animation: "blink 1s step-end infinite",
                    }}
                  />
                </span>
                <style>{`
                  @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                  }
                `}</style>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                Passionate <span className="text-indigo-400 font-semibold">MERN Stack</span> developer crafting AI-powered SaaS platforms
                and scalable web apps. Turning complex problems into elegant digital solutions.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                {skills.map((skill, i) => (
                  <span key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 hover:bg-indigo-900/20 transition-all duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
                <a href="/projects">
                  <button className="group relative w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View My Work
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </a>
                <a href="/contact">
                  <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-indigo-500/50 text-indigo-300 font-semibold text-base hover:bg-indigo-900/25 hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-300">
                    Contact Me
                  </button>
                </a>
              </div>

              <div className="flex justify-center lg:justify-start gap-4 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                {[
                  { label: "GitHub", href: "https://github.com/Pintu241/", icon: "💻" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/pintu-kumar-042025297/", icon: "🔗" },
                  { label: "Email", href: "mailto:yaduvanasipintu641@gmail.com", icon: "✉️" },
                ].map((s) => (
                  <a key={s.label} href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700/60 text-slate-400 text-sm font-medium hover:border-indigo-500/50 hover:text-white hover:bg-indigo-900/20 transition-all duration-300">
                    <span>{s.icon}</span> {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — Avatar + floating badges */}
            <div className="flex-shrink-0 order-1 lg:order-2 animate-fadeIn flex items-center justify-center lg:mt-12 lg:-ml-12 xl:-ml-24 lg:scale-[1.1] xl:scale-[1.15] lg:origin-top-left"
              style={{ animationDelay: "0.2s" }}>

              {/* Fixed-size wrapper so badges never overflow/clip */}
              <div className="relative"
                style={{
                  width: "340px",
                  height: "340px",
                  transform: `perspective(1000px) rotateX(${-mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
                  transition: "transform 0.1s ease-out",
                }}>

                {/* Glow blob behind image */}
                <div className="absolute rounded-full bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-500/30 blur-3xl animate-float"
                  style={{ top: "10%", left: "10%", right: "10%", bottom: "10%" }} />

                {/* Profile circle — centred with padding for badges */}
                <div className="absolute rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl shadow-indigo-500/20 hover:scale-105 transition-transform duration-500"
                  style={{ top: "40px", left: "40px", right: "40px", bottom: "40px" }}>
                  <img src={profileImage} alt="Pintu Kumar" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
                </div>

                {/* Badge top-right */}
                <div className="absolute glass neon-border rounded-2xl px-3 py-2 shadow-xl animate-float"
                  style={{ top: "4px", right: "0px", animationDelay: "0.5s" }}>
                  <p className="text-xs text-slate-400 mb-0.5">DSA Problems</p>
                  <p className="text-xl font-bold text-shimmer">150+</p>
                </div>

                {/* Badge bottom-left */}
                <div className="absolute glass neon-border rounded-2xl px-3 py-2 shadow-xl animate-float"
                  style={{ bottom: "4px", left: "0px", animationDelay: "1s" }}>
                  <p className="text-xs text-slate-400 mb-0.5">Projects Live</p>
                  <p className="text-xl font-bold text-green-400">3 🚀</p>
                </div>

                {/* Badge bottom-right */}
                <div className="absolute glass neon-border rounded-2xl px-3 py-2 shadow-xl animate-float"
                  style={{ bottom: "4px", right: "0px", animationDelay: "1.5s" }}>
                  <p className="text-xs text-slate-400 mb-0.5">Streak</p>
                  <p className="text-xl font-bold text-orange-400">50🔥</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {stats.map((s, i) => (
              <div key={i}
                className="glass neon-border rounded-2xl p-6 text-center hover:-translate-y-1 hover:border-indigo-500/50 transition-all duration-300 group">
                <p className="text-3xl font-bold text-shimmer mb-1 group-hover:scale-110 transition-transform">{s.value}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT MINI ── */}
      <section id="about" className="py-20 px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-shimmer inline-block mb-3">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="glass neon-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-5">Quick Facts</h3>
                {[
                  { icon: "📍", label: "Location", value: "Muzaffarpur, Bihar" },
                  { icon: "🎓", label: "Education", value: "B.Tech IT — LPU (7.55)" },
                  { icon: "📞", label: "Phone", value: "+91 9955116500" },
                  { icon: "🏆", label: "DSA Problems", value: "150+ Solved" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 mb-4 last:mb-0">
                    <div className="w-9 h-9 rounded-lg bg-indigo-900/50 flex items-center justify-center text-base flex-shrink-0">{f.icon}</div>
                    <div>
                      <p className="text-slate-500 text-xs">{f.label}</p>
                      <p className="text-slate-200 text-sm font-medium">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass neon-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Interests</h3>
                <div className="flex flex-col gap-3">
                  {interests.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-3 hover:bg-indigo-900/20 transition-colors duration-300">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-slate-200 text-sm font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-6">
              <div className="glass neon-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">My Journey</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Hello! I'm <span className="text-purple-400 font-semibold">Pintu Kumar</span>, a passionate Full Stack Developer
                  pursuing B.Tech in Information Technology at Lovely Professional University, Phagwara.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  I specialize in the MERN stack and have built production-ready AI-powered SaaS platforms like
                  <span className="text-indigo-400 font-medium"> InterviewIQ</span> — a real-time mock interview system
                  with Razorpay integration and cloud deployment on Render.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Certified in Cloud Computing (NPTEL) and DSA & OOP (iamneo). I thrive at the intersection of AI and full-stack engineering.
                </p>
              </div>
              <div className="glass neon-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">My Approach</h3>
                <p className="text-slate-400 leading-relaxed">
                  I believe in shipping clean, scalable software. Every project I build follows a layered
                  service-based architecture with secure APIs, responsive UIs, and real-world deployment.
                  Teamwork, adaptability, and leadership are at the core of how I collaborate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll hint */}
      <div className="flex justify-center pb-16">
        <a href="/projects" className="flex flex-col items-center text-slate-500 hover:text-white transition-colors group">
          <span className="text-xs mb-3 tracking-widest uppercase">See My Projects</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-indigo-400 flex justify-center pt-1.5 transition-colors">
            <div className="w-1 h-2.5 bg-slate-500 group-hover:bg-indigo-400 rounded-full animate-scrollDown transition-colors" />
          </div>
        </a>
      </div>

    </div>
  );
};

export default Home;
