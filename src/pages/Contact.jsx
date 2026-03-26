import { useState, useEffect } from "react";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => { setIsSent(false); setFormData({ name: "", email: "", message: "" }); }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">Get In Touch</span>
          </h2>
          <div className="mb-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
          <p className="text-center text-gray-300 max-w-xl mx-auto mb-10">
            Have a project idea or want to collaborate? Reach out — I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <div className="glass rounded-xl neon-border overflow-hidden shadow-lg">
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                        placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5"
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all resize-none"
                        placeholder="Your message..."></textarea>
                    </div>
                    <div className="pt-2">
                      <button type="submit" disabled={isSending || isSent}
                        className={`group relative w-full py-3 px-6 rounded-lg font-medium text-white overflow-hidden transition-all duration-300 ${isSent ? "bg-green-600" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-indigo-500/30"}`}>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSending ? (<><svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</>) : isSent ? (<>✓ Message Sent!</>) : ("Send Message")}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="glass rounded-xl neon-border h-full p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-bold text-blue-300 mb-6">Contact Information</h3>
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/60 flex items-center justify-center flex-shrink-0"><span className="text-lg">✉️</span></div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium mb-1">Email</h4>
                      <a href="mailto:yaduvanasipintu641@gmail.com" className="text-indigo-300 hover:text-indigo-200 transition-colors text-sm">yaduvanasipintu641@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/60 flex items-center justify-center flex-shrink-0"><span className="text-lg">📱</span></div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium mb-1">Phone</h4>
                      <a href="tel:+919955116500" className="text-indigo-300 hover:text-indigo-200 transition-colors">+91 9955116500</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/60 flex items-center justify-center flex-shrink-0"><span className="text-lg">🔗</span></div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium mb-1">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/pintu-kumar-042025297/" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-200 transition-colors text-sm">linkedin.com/in/pintu-kumar</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/60 flex items-center justify-center flex-shrink-0"><span className="text-lg">💻</span></div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium mb-1">GitHub</h4>
                      <a href="https://github.com/Pintu241/" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-200 transition-colors">github.com/Pintu241</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
