import React, { useState, useEffect } from 'react';
import { 
  Mail, MapPin, Linkedin, Code, Database, Server, 
  BrainCircuit, Award, GraduationCap, ChevronDown, 
  Globe, Cpu, LayoutTemplate, Rocket, ArrowUpRight, 
  Terminal, Activity, Github, Music, Play, Download, Send,
  User, AtSign, MessageSquare
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Custom Cursor tracking & Scroll handling
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! In a production environment, this will send an email to sanskarsharmamusic999@gmail.com");
    setFormData({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      title: 'Aura',
      status: 'Currently Building 🚀',
      description: 'A platform focused on connecting brands with the right content creators using intelligent matching, structured campaign management, and collaboration analytics to make influencer marketing more efficient and accessible.',
      tags: ['AI Matching', 'Platform Development', 'Analytics', 'Creator Economy'],
      featured: true
    },
    {
      title: 'Class Alert Agent',
      status: 'Live Automation',
      description: 'An AI-based automation project built to send email alerts for class schedules. The goal is simple — get notified before a class starts so I never miss one again.',
      tags: ['Python', 'Automation', 'Brevo SMTP', 'Render'],
      featured: false,
      github: 'https://github.com/Cathhdyy/Reminder-Bot'
    },
    {
      title: 'Database Management API',
      status: 'Completed',
      description: 'Built robust CRUD operations architecture using MongoDB and Python to efficiently manage and process backend data structures.',
      tags: ['Python', 'MongoDB', 'Backend', 'API'],
      featured: false
    }
  ];

  const marqueeSkills = ['Artificial Intelligence', 'Machine Learning', 'Python', 'HTML', 'MongoDB', 'SMTP', 'Render', 'Web Development', 'Automation', 'Data Structures'];

  return (
    <div className="min-h-screen bg-[#050810] text-slate-300 font-sans selection:bg-cyan-500/30 relative overflow-hidden">
      
      {/* Inject custom styles for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Custom Glowing Cursor */}
      <div 
        className="fixed w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out hidden md:block mix-blend-screen"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      ></div>

      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050810]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white cursor-pointer flex items-center gap-2" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm shadow-lg shadow-cyan-500/20">SS</div>
            Sanskar.
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'About', 'Projects', 'Skills', 'Education'].map((item) => (
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
            className="hidden md:block px-6 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 transition-colors text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-300 tracking-wide uppercase">Available for Opportunities</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-6 text-white leading-tight">
            Building intelligent <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              digital solutions.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Hi, I'm <span className="text-white font-medium">Sanskar Sharma</span>. I specialize in Programming, Artificial Intelligence, and Machine Learning. Based in India, I engineer systems by day and produce music as <span className="text-[#1DB954] font-medium">Sansskar</span> by night.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button onClick={() => scrollTo('projects')} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
              View My Work <ArrowUpRight size={18} />
            </button>
            <a href="https://github.com/Cathhdyy" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Github size={18} /> <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Infinite Scrolling Tech Marquee */}
      <div className="w-full py-8 border-y border-white/5 bg-white/[0.02] overflow-hidden flex relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050810] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050810] to-transparent z-10"></div>
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center">
            {marqueeSkills.map((skill, i) => (
              <span key={`a-${i}`} className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 uppercase tracking-widest px-8">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center">
            {marqueeSkills.map((skill, i) => (
              <span key={`b-${i}`} className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 uppercase tracking-widest px-8">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">About Me</h2>
              <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Tech enthusiast & problem solver.</h3>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">
                Currently pursuing my BTech in Artificial Intelligence. Based in Siliguri, West Bengal, I am deeply passionate about pushing the boundaries of what's possible with code. From exploring advanced Vision Language Models to architecting clean web platforms, I focus on creating technology that matters.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              {/* Location Card */}
              <div className="col-span-2 sm:col-span-1 p-8 rounded-[2rem] bg-[#0d1425]/50 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <h4 className="text-white font-bold text-2xl mb-2">Location</h4>
                <p className="text-slate-400 font-medium">Siliguri, West Bengal<br/>India</p>
              </div>
              
              {/* Languages Card */}
              <div className="col-span-2 sm:col-span-1 p-8 rounded-[2rem] bg-[#0d1425]/50 backdrop-blur-md border border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Globe size={28} />
                </div>
                <h4 className="text-white font-bold text-2xl mb-4">Languages</h4>
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-center"><span className="text-slate-200">Nepali</span> <span className="px-2 py-1 rounded bg-white/5 text-slate-400 text-xs font-semibold">Native</span></div>
                  <div className="flex justify-between items-center"><span className="text-slate-200">English</span> <span className="px-2 py-1 rounded bg-white/5 text-slate-400 text-xs font-semibold">Professional</span></div>
                  <div className="flex justify-between items-center"><span className="text-slate-200">Hindi</span> <span className="px-2 py-1 rounded bg-white/5 text-slate-400 text-xs font-semibold">Limited</span></div>
                </div>
              </div>

              {/* Music / Spotify Feature Card */}
              <div className="col-span-2 p-8 md:p-10 rounded-[2rem] bg-[#0d1425]/80 backdrop-blur-md border border-white/5 hover:border-[#1DB954]/50 transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 group shadow-lg hover:shadow-[#1DB954]/10">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#1ed760] to-[#1DB954] p-[2px] flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500">
                   <div className="w-full h-full rounded-2xl bg-[#0a0f1c] flex items-center justify-center overflow-hidden">
                      <Music className="text-[#1DB954]" size={40} />
                   </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#1DB954]/10 text-[#1DB954] text-[10px] font-bold tracking-widest uppercase">Now Playing</span>
                    <span className="flex gap-1 items-end h-4">
                      <span className="w-1.5 h-2 bg-[#1DB954] rounded-sm animate-[bounce_1s_infinite] delay-75"></span>
                      <span className="w-1.5 h-4 bg-[#1DB954] rounded-sm animate-[bounce_1s_infinite] delay-150"></span>
                      <span className="w-1.5 h-3 bg-[#1DB954] rounded-sm animate-[bounce_1s_infinite] delay-300"></span>
                    </span>
                  </div>
                  <h4 className="text-white font-black text-3xl mb-1 tracking-tight">On My Mind</h4>
                  <p className="text-slate-400 font-medium text-lg">Sansskar</p>
                </div>

                <a href="https://open.spotify.com/search/Sansskar" target="_blank" rel="noreferrer" className="mt-6 sm:mt-0 w-16 h-16 rounded-full bg-[#1DB954] text-black flex items-center justify-center hover:scale-110 hover:bg-[#1ed760] transition-all flex-shrink-0 z-10">
                  <Play size={28} className="ml-1" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight">Featured Projects</h3>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`p-8 md:p-12 rounded-[2.5rem] border ${project.featured ? 'bg-gradient-to-br from-slate-900 to-[#0d1425] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]' : 'bg-[#0d1425]/50 backdrop-blur-sm border-white/5'} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}>
                <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-4 mb-4">
                      <h4 className="text-3xl font-bold text-white">{project.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.featured ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-white/10 text-slate-300 border border-white/10'}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className={`text-lg leading-relaxed mb-8 ${project.featured ? 'text-slate-300' : 'text-slate-400'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-black/40 border border-white/5 text-slate-300 text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                        <Github size={18} /> View Source Code
                      </a>
                    )}
                  </div>
                  
                  {project.featured && (
                    <div className="flex items-start justify-start md:justify-end">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
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

      {/* Skills & Certifications Section */}
      <section id="skills" className="py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Breakdown */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-green-400 uppercase mb-3">Capabilities</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight mb-10">Technical Arsenal</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Skill Items */}
              {[
                { name: 'Artificial Intelligence', icon: <BrainCircuit size={20} />, color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
                { name: 'Machine Learning', icon: <Cpu size={20} />, color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
                { name: 'Python Backend', icon: <Terminal size={20} />, color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20' },
                { name: 'MongoDB Database', icon: <Database size={20} />, color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
                { name: 'Web / HTML / WP', icon: <LayoutTemplate size={20} />, color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/20' },
                { name: 'Render & SMTP', icon: <Activity size={20} />, color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-[#0d1425]/50 border border-white/5 hover:border-white/20 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${skill.bg} ${skill.color}`}>
                    {skill.icon}
                  </div>
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
                { title: 'FREE Vision Language Models (VLM) Bootcamp', org: 'Bootcamp' },
                { title: 'CRUD Operations in MongoDB', org: 'Database Architecture' },
                { title: 'Build website with WordPress', org: 'Web Development' },
                { title: 'Python (Basic) & Problem Solving', org: 'Core Programming' }
              ].map((cert, index) => (
                <div key={index} className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border-l-2 border-slate-700 hover:border-yellow-400 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg leading-snug">{cert.title}</h4>
                    <span className="text-slate-500 text-sm">{cert.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Academic Background</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight mb-16">Education</h3>

          <div className="relative p-10 md:p-16 rounded-[3rem] bg-[#0d1425]/50 backdrop-blur-xl border border-white/10 text-center flex flex-col items-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
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
      <section id="contact" className="py-32 relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-black text-white tracking-tight mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">together.</span></h2>
            <p className="text-lg text-slate-400 mb-12">I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="space-y-4">
              <a href="mailto:sanskarsharmamusic999@gmail.com" className="flex items-center gap-5 p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/80 to-[#050810]/80 backdrop-blur-xl border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 shadow-inner z-10 shrink-0">
                  <Mail size={28} />
                </div>
                <div className="z-10 overflow-hidden min-w-0">
                  <p className="text-slate-400 text-xs font-bold mb-1 uppercase tracking-widest">Chat directly</p>
                  <h4 className="text-white font-bold text-2xl truncate">Email Me</h4>
                  <p className="text-cyan-400/80 mt-1 truncate group-hover:text-cyan-400 transition-colors text-sm">Click to drop a message</p>
                </div>
                <div className="ml-auto z-10 hidden sm:flex bg-white/5 p-4 rounded-full group-hover:bg-cyan-500 group-hover:text-black text-slate-400 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </a>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <a href="https://github.com/Cathhdyy" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/80 to-[#050810]/80 backdrop-blur-xl border border-white/5 hover:border-white/30 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 group hover:-translate-y-1">
                  <Github size={32} className="text-slate-500 group-hover:text-white transition-colors" />
                  <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ssanskar" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/80 to-[#050810]/80 backdrop-blur-xl border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 group hover:-translate-y-1">
                  <Linkedin size={32} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">LinkedIn</span>
                </a>
                <a href="https://open.spotify.com/search/Sansskar" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-4 p-6 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/80 to-[#050810]/80 backdrop-blur-xl border border-white/5 hover:border-[#1DB954]/50 hover:bg-[#1DB954]/5 hover:shadow-[0_0_20px_rgba(29,185,84,0.1)] transition-all duration-300 group hover:-translate-y-1">
                  <Music size={32} className="text-slate-500 group-hover:text-[#1DB954] transition-colors" />
                  <span className="text-sm font-bold text-slate-400 group-hover:text-[#1DB954] transition-colors">Spotify</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/80 to-[#050810]/80 backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700"></div>
            
            <h3 className="text-3xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
              Send a message
            </h3>
            
            <form onSubmit={handleFormSubmit} className="relative z-10 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Your Name</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#050810]/50 border border-white/5 rounded-xl pl-11 pr-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-[#050810] focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Your Email</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <AtSign size={18} className="text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#050810]/50 border border-white/5 rounded-xl pl-11 pr-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-[#050810] focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                <div className="relative group/input">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                    <MessageSquare size={18} className="text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                  </div>
                  <textarea 
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#050810]/50 border border-white/5 rounded-xl pl-11 pr-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-[#050810] focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                    placeholder="Hi Sanskar, I have an opportunity..."
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full mt-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 border-t border-white/5 text-sm font-medium z-10 relative bg-[#050810]">
        <p>© {new Date().getFullYear()} Sanskar Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
