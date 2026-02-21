import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Code, Database, Server, 
  BrainCircuit, Award, GraduationCap, ChevronDown, 
  Globe, ExternalLink, Cpu, LayoutTemplate, Sparkles, 
  Rocket, Layers, ArrowUpRight, Terminal, Activity
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'focus', 'projects', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const focusAreas = [
    {
      title: 'Artificial Intelligence',
      description: 'Exploring Vision Language Models (VLMs) and intelligent matching algorithms to build smarter applications.',
      icon: <BrainCircuit size={24} />,
      color: 'from-purple-500/20 to-purple-500/0 border-purple-500/20 text-purple-400'
    },
    {
      title: 'Backend Architecture',
      description: 'Designing robust database structures with MongoDB and deploying scalable services via Render and SMTP.',
      icon: <Server size={24} />,
      color: 'from-blue-500/20 to-blue-500/0 border-blue-500/20 text-blue-400'
    },
    {
      title: 'Web Platforms',
      description: 'Crafting responsive, user-centric web applications using modern HTML, styling frameworks, and WordPress.',
      icon: <LayoutTemplate size={24} />,
      color: 'from-cyan-500/20 to-cyan-500/0 border-cyan-500/20 text-cyan-400'
    }
  ];

  const projects = [
    {
      title: 'Aura',
      status: 'Currently Building 🚀',
      description: 'A platform focused on connecting brands with the right content creators using intelligent matching, structured campaign management, and collaboration analytics to make influencer marketing more efficient and accessible.',
      tags: ['AI Matching', 'Platform Development', 'Analytics', 'Creator Economy'],
      featured: true
    },
    {
      title: 'Database Management API',
      status: 'Completed',
      description: 'Built robust CRUD operations architecture using MongoDB and Python to efficiently manage and process backend data structures.',
      tags: ['Python', 'MongoDB', 'Backend', 'API'],
      featured: false
    }
  ];

  const skills = [
    { name: 'Artificial Intelligence', icon: <BrainCircuit size={20} /> },
    { name: 'Machine Learning', icon: <Cpu size={20} /> },
    { name: 'Python', icon: <Terminal size={20} /> },
    { name: 'HTML & Web', icon: <Code size={20} /> },
    { name: 'MongoDB (CRUD)', icon: <Database size={20} /> },
    { name: 'SMTP & Render', icon: <Activity size={20} /> },
  ];

  const navLinks = ['Home', 'About', 'Focus', 'Projects', 'Skills', 'Education'];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-300 font-sans selection:bg-cyan-500/30 relative">
      
      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px]"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-600/10 blur-[100px]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white cursor-pointer flex items-center gap-2" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm">SS</div>
            Sanskar.
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`transition-all duration-300 hover:text-white ${activeSection === item.toLowerCase() ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-slate-500'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 transition-colors text-sm font-bold"
          >
            Get in touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-300 tracking-wide uppercase">Available for Opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white leading-tight">
            Building intelligent <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              digital solutions.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Hi, I'm <span className="text-white font-medium">Sanskar Sharma</span>. I specialize in Programming, Artificial Intelligence, and Machine Learning. Based in India, I engineer systems that connect ideas with impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button onClick={() => scrollTo('projects')} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
              View My Work <ArrowUpRight size={18} />
            </button>
            <a href="https://www.linkedin.com/in/ssanskar" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">About Me</h2>
              <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Tech enthusiast & problem solver.</h3>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">
                Currently pursuing my BTech in Artificial Intelligence. Based in Siliguri, West Bengal, I am deeply passionate about pushing the boundaries of what's possible with code. From exploring advanced Vision Language Models to architecting clean web platforms, I focus on creating technology that matters.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center">
                <MapPin className="text-cyan-400 mb-4" size={32} />
                <h4 className="text-white font-bold text-xl mb-1">Location</h4>
                <p className="text-slate-400">Siliguri, West Bengal, India</p>
              </div>
              <div className="col-span-2 sm:col-span-1 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center">
                <Globe className="text-blue-400 mb-4" size={32} />
                <h4 className="text-white font-bold text-xl mb-3">Languages</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-slate-300">Nepali</span> <span className="text-slate-500">Native</span></div>
                  <div className="flex justify-between text-sm"><span className="text-slate-300">English</span> <span className="text-slate-500">Professional</span></div>
                  <div className="flex justify-between text-sm"><span className="text-slate-300">Hindi</span> <span className="text-slate-500">Limited</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas (What I do) */}
      <section id="focus" className="py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">What I Do</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight">My Core Expertise</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => (
              <div key={idx} className={`p-8 rounded-3xl bg-gradient-to-b ${area.color} border bg-opacity-10 backdrop-blur-sm transition-transform hover:-translate-y-2`}>
                <div className="w-14 h-14 rounded-2xl bg-[#0d1425] border border-white/10 flex items-center justify-center mb-6 shadow-xl">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">Portfolio</h2>
              <h3 className="text-4xl font-bold text-white tracking-tight">Featured Projects</h3>
            </div>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`p-8 md:p-12 rounded-[2.5rem] border ${project.featured ? 'bg-gradient-to-br from-slate-900 to-[#0d1425] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]' : 'bg-white/5 border-white/10'} relative overflow-hidden group`}>
                
                {/* Background Glow for featured */}
                {project.featured && <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>}

                <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-4 mb-4">
                      <h4 className="text-3xl font-bold text-white">{project.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.featured ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-white/10 text-slate-300 border border-white/20'}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className={`text-lg leading-relaxed mb-8 ${project.featured ? 'text-slate-300' : 'text-slate-400'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-[#0d1425] border border-white/10 text-slate-300 text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="flex items-start justify-start md:justify-end">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Rocket size={32} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Skills */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-green-400 uppercase mb-3">Capabilities</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight mb-10">Technical Arsenal</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors">
                  <div className="text-slate-400">{skill.icon}</div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-yellow-400 uppercase mb-3">Achievements</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight mb-10">Certifications</h3>
            
            <div className="space-y-4">
              {[
                { title: 'FREE Vision Language Models (VLM) Bootcamp' },
                { title: 'CRUD Operations in MongoDB' },
                { title: 'Build website with WordPress' },
                { title: 'Python (Basic) - Problem Solving' }
              ].map((cert, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border-l-2 border-slate-700 hover:border-yellow-400 transition-colors">
                  <Award className="text-yellow-400 shrink-0 mt-1" size={20} />
                  <span className="text-slate-300 font-medium leading-snug">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Academic Background</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight mb-16">Education</h3>

          <div className="relative p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#0d1425] border border-white/10 flex items-center justify-center text-cyan-400 mb-8 shadow-2xl">
              <GraduationCap size={40} />
            </div>
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-bold tracking-wide mb-6">
              SEP 2025 — DEC 2029
            </div>
            
            <h4 className="text-3xl font-black text-white mb-2 tracking-tight">Medhavi Skills University</h4>
            <p className="text-xl text-slate-400 mb-6 font-medium">
              Bachelor of Technology (BTech) in <span className="text-cyan-400">Artificial Intelligence</span>
            </p>
            
            <p className="text-slate-500 leading-relaxed max-w-2xl">
              A comprehensive 4-year degree focusing on the foundational and advanced concepts of AI, Machine Learning algorithms, and modern software engineering practices to solve complex real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white tracking-tight mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">together.</span></h2>
            <p className="text-lg text-slate-400">Feel free to reach out for collaborations, opportunities, or just to say hi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="mailto:sanskarsharmamusic999@gmail.com" className="flex flex-col items-center justify-center p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center group">
              <Mail className="text-white mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-white font-bold mb-1">Email</h3>
              <p className="text-sm text-slate-500">Drop a message</p>
            </a>

            <a href="tel:6296249951" className="flex flex-col items-center justify-center p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center group">
              <Phone className="text-white mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-white font-bold mb-1">Phone</h3>
              <p className="text-sm text-slate-500">6296249951</p>
            </a>

            <a href="https://www.linkedin.com/in/ssanskar" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-10 rounded-3xl bg-cyan-500 text-black hover:bg-cyan-400 transition-all text-center group shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <Linkedin className="mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-bold mb-1">LinkedIn</h3>
              <p className="text-sm opacity-80 flex items-center justify-center gap-1">Connect <ArrowUpRight size={14}/></p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 border-t border-white/5 text-sm font-medium">
        <p>© {new Date().getFullYear()} Sanskar Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;