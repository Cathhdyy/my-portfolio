import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, MapPin, Linkedin, Code, Database, Server, 
  BrainCircuit, Award, GraduationCap, ChevronDown, 
  Globe, Cpu, LayoutTemplate, Rocket, ArrowUpRight, 
  Terminal, Activity, Github, Music, Play, Download, Send,
  User, AtSign, MessageSquare, Quote, AlertTriangle, Lightbulb
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [scrollY, setScrollY] = useState(0);
  
  // Ref for the custom cursor to prevent performance-killing re-renders
  const cursorRef = useRef(null);

  // Scroll handling and high-performance cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        // Update DOM directly for 60fps performance without React re-renders
        cursorRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'projects', 'skills', 'education', 'words', 'failures', 'contact'];
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
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const failuresAndLessons = [
    {
      failure: "Overcomplicating the first backend architecture.",
      lesson: "I learned that simplicity scales best. Now, I prioritize clean, functional MVP structures using tools like MongoDB and Python before adding complex layers.",
      color: "red"
    },
    {
      failure: "Struggling with early AI model deployments.",
      lesson: "Realized that deployment is half the battle. Mastered cloud platforms like Render and SMTP API integrations to ensure systems actually reach users.",
      color: "orange"
    },
    {
      failure: "Trying to learn every new framework at once.",
      lesson: "Burnout taught me to focus on core concepts. Deeply understanding algorithms and data structures proved far more valuable than syntax memorization.",
      color: "pink"
    }
  ];

  const marqueeSkills = ['Artificial Intelligence', 'Machine Learning', 'Python', 'HTML', 'MongoDB', 'SMTP', 'Render', 'Web Development', 'Automation', 'Data Structures'];

  return (
    <div className="min-h-screen bg-[#050810] text-slate-300 font-sans selection:bg-cyan-500/30 relative overflow-x-hidden">
      
      {/* Inject custom styles for marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* High-Performance Custom Glowing Cursor */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0 hidden md:block mix-blend-screen transition-opacity duration-300 ease-in-out"
        style={{ willChange: 'transform' }}
      ></div>

      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050810]/85 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-white cursor-pointer flex items-center gap-2 group" onClick={() => scrollTo('home')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-shadow duration-300">SS</div>
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
            className="hidden md:block px-6 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 transition-all duration-300 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
          >
            Let's Talk
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[100svh] flex flex-col items-center pt-24 pb-8 z-10 overflow-hidden">
        
        {/* Subtle Code Background Overlay with Fade & Parallax */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] select-none"
          style={{ 
            opacity: Math.max(0, 0.15 * (1 - scrollY / 600)),
            transform: `translateY(${scrollY * 0.4}px)`,
            willChange: 'transform, opacity'
          }}
        >
          <pre className="text-[10px] sm:text-[11px] md:text-xs font-mono text-cyan-500/40 leading-relaxed whitespace-pre w-full h-full p-8 flex flex-col justify-start md:justify-center overflow-hidden">
{`import numpy as np
import tensorflow as tf
from transformers import AutoModelForCausalLM, AutoTokenizer
from fastapi import FastAPI
from pymongo import MongoClient

class VisionLanguageModel:
    def __init__(self, model_name="llava-hf/llava-1.5-7b-hf"):
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForCausalLM.from_pretrained(model_name)
        self.device = "cuda" if tf.test.is_built_with_cuda() else "cpu"

    def process_data_stream(self, image_tensor, context_prompt):
        inputs = self.tokenizer(context_prompt, return_tensors="pt")
        features = self.model.extract_features(image_tensor, inputs)
        return self.decode(features)

def initialize_database_connection(uri):
    client = MongoClient(uri)
    db = client.cluster0
    return db.users, db.analytics

async def train_neural_architecture(input_shape):
    model = tf.keras.Sequential([
        tf.keras.layers.Conv2D(64, (3, 3), activation='relu', input_shape=input_shape),
        tf.keras.layers.MaxPooling2D(2, 2),
        tf.keras.layers.Flatten(),
        tf.keras.layers.Dense(256, activation='relu'),
        tf.keras.layers.Dropout(0.5),
        tf.keras.layers.Dense(10, activation='softmax')
    ])
    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')
    return model

# Initiating core systems...
if __name__ == "__main__":
    vlm_agent = VisionLanguageModel()
    db_conn = initialize_database_connection(API_URL)
    print("Agent online. Awaiting data streams...")
    # Ready for autonomous execution`}
          </pre>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"></div>

        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-6 text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-xs font-medium backdrop-blur-sm shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-300 tracking-wide uppercase">Available for Opportunities</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white leading-tight">
            Building intelligent <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              digital solutions.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Hi, I'm <span className="text-white font-medium">Sanskar Sharma</span>. I specialize in Programming, Artificial Intelligence, and Machine Learning. Based in India, I engineer systems by day and produce music as <span className="text-[#1DB954] font-medium">Sansskar</span> by night.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button onClick={() => scrollTo('projects')} className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              View My Work <ArrowUpRight size={18} />
            </button>
            <a href="https://github.com/Cathhdyy" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0d1425]/80 backdrop-blur-md text-white font-medium border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
              <Github size={18} /> <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="animate-bounce text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer z-10 mt-12" onClick={() => scrollTo('about')}>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Infinite Scrolling Tech Marquee */}
      <div className="w-full py-8 bg-[#050810]/80 overflow-hidden flex items-center relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#050810] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#050810] to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex animate-marquee items-center group">
          <div className="flex items-center justify-around w-max">
            {marqueeSkills.map((skill, i) => (
              <div key={`a-${i}`} className="flex items-center">
                <span className="text-4xl md:text-7xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] hover:[-webkit-text-stroke:1px_rgba(6,182,212,0.9)] hover:text-cyan-500/10 uppercase tracking-widest px-8 md:px-12 transition-all duration-300 cursor-default">
                  {skill}
                </span>
                <span className="text-cyan-500/40 text-2xl md:text-3xl">✦</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-around w-max">
            {marqueeSkills.map((skill, i) => (
              <div key={`b-${i}`} className="flex items-center">
                <span className="text-4xl md:text-7xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] hover:[-webkit-text-stroke:1px_rgba(6,182,212,0.9)] hover:text-cyan-500/10 uppercase tracking-widest px-8 md:px-12 transition-all duration-300 cursor-default">
                  {skill}
                </span>
                <span className="text-cyan-500/40 text-2xl md:text-3xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Logic meets <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">creativity.</span></h3>
              
              <div className="space-y-5 text-slate-400 leading-relaxed text-lg mb-8">
                <p>
                  I am a passionate technologist and creator based in Siliguri, currently pursuing my BTech in Artificial Intelligence.
                </p>
                <p>
                  My journey is driven by a deep curiosity for how things work. Whether I'm building intelligent matching algorithms for <span className="text-slate-300 font-medium">Aura</span>, exploring Vision Language Models, or architecting backend systems with Python and MongoDB, I love turning complex problems into elegant digital solutions.
                </p>
                <p>
                  Beyond the screen, I am a music producer releasing tracks under the name <span className="text-[#1DB954] font-medium">Sansskar</span>. I believe the intuition required to produce a great track uses the exact same creative muscle needed to write clean, scalable code.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              {/* Location Card */}
              <div className="col-span-2 sm:col-span-1 p-8 rounded-[2rem] bg-[#0d1425]/40 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <MapPin size={28} />
                </div>
                <h4 className="text-white font-bold text-2xl mb-2">Location</h4>
                <p className="text-slate-400 font-medium">Siliguri, West Bengal<br/>India</p>
              </div>
              
              {/* Languages Card */}
              <div className="col-span-2 sm:col-span-1 p-8 rounded-[2rem] bg-[#0d1425]/40 backdrop-blur-md border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <Globe size={28} />
                </div>
                <h4 className="text-white font-bold text-2xl mb-4">Languages</h4>
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-center"><span className="text-slate-200">Nepali</span> <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold">Native</span></div>
                  <div className="flex justify-between items-center"><span className="text-slate-200">English</span> <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold">Professional</span></div>
                  <div className="flex justify-between items-center"><span className="text-slate-200">Hindi</span> <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold">Limited</span></div>
                </div>
              </div>

              {/* Music / Spotify Feature Card */}
              <div className="col-span-2 p-8 md:p-10 rounded-[2rem] bg-[#0d1425]/60 backdrop-blur-md border border-white/10 hover:border-[#1DB954]/50 hover:bg-[#0d1425]/80 transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-[0_0_40px_rgba(29,185,84,0.15)] hover:-translate-y-1">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#1ed760] to-[#1DB954] p-[2px] flex-shrink-0 relative group-hover:scale-105 transition-transform duration-500 shadow-xl">
                   <div className="w-full h-full rounded-2xl bg-[#0a0f1c] flex items-center justify-center overflow-hidden">
                      <Music className="text-[#1DB954]" size={40} />
                   </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/20 text-[10px] font-bold tracking-widest uppercase shadow-inner">Now Playing</span>
                    <span className="flex gap-1 items-end h-4">
                      <span className="w-1.5 h-2 bg-[#1DB954] rounded-sm animate-[bounce_1s_infinite] delay-75"></span>
                      <span className="w-1.5 h-4 bg-[#1DB954] rounded-sm animate-[bounce_1s_infinite] delay-150"></span>
                      <span className="w-1.5 h-3 bg-[#1DB954] rounded-sm animate-[bounce_1s_infinite] delay-300"></span>
                    </span>
                  </div>
                  <h4 className="text-white font-black text-3xl mb-1 tracking-tight">On My Mind</h4>
                  <p className="text-slate-400 font-medium text-lg">Sansskar</p>
                </div>

                <a href="https://open.spotify.com/search/Sansskar" target="_blank" rel="noreferrer" className="mt-6 sm:mt-0 w-16 h-16 rounded-full bg-[#1DB954] text-black flex items-center justify-center hover:scale-110 hover:bg-[#1ed760] transition-all flex-shrink-0 z-10 shadow-[0_0_30px_rgba(29,185,84,0.3)] hover:shadow-[0_0_40px_rgba(29,185,84,0.5)]">
                  <Play size={28} className="ml-1" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 lg:mb-16 text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight">Featured Projects</h3>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className={`p-8 md:p-12 rounded-[2.5rem] border ${project.featured ? 'bg-gradient-to-br from-[#0d1425]/80 to-[#050810] border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.1)]' : 'bg-[#0d1425]/40 backdrop-blur-sm border-white/10 hover:border-white/20'} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}>
                <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-8">
                  <div className="max-w-3xl">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <h4 className="text-3xl font-bold text-white">{project.title}</h4>
                      <span className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold ${project.featured ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'bg-white/5 text-slate-300 border border-white/10'}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className={`text-lg leading-relaxed mb-8 ${project.featured ? 'text-slate-300' : 'text-slate-400'}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-slate-300 text-sm font-medium shadow-inner">
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
                    <div className="flex items-start justify-start lg:justify-end">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-500">
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
      <section id="skills" className="py-20 lg:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
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
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-[#0d1425]/40 border border-white/10 hover:border-white/20 hover:bg-[#0d1425]/60 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${skill.bg} ${skill.color} shadow-inner`}>
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
                <div key={index} className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-[#0d1425]/40 to-transparent border border-white/5 border-l-2 border-l-slate-700 hover:border-l-yellow-400 hover:bg-white/5 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 shrink-0 shadow-inner">
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
      <section id="education" className="py-20 lg:py-32 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Academic Background</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight mb-12 lg:mb-16">Education</h3>

          <div className="relative p-8 md:p-16 rounded-[3rem] bg-[#0d1425]/40 backdrop-blur-xl border border-white/10 text-center flex flex-col items-center hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all duration-500 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
            
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-500">
              <GraduationCap size={40} />
            </div>
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-bold tracking-wide mb-6 border border-cyan-500/20">
              SEP 2025 — DEC 2029
            </div>
            
            <h4 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">Medhavi Skills University</h4>
            <p className="text-lg md:text-xl text-slate-400 mb-6 font-medium">
              Bachelor of Technology (BTech) in <span className="text-cyan-400">Artificial Intelligence</span>
            </p>
            
            <p className="text-slate-500 leading-relaxed max-w-2xl text-sm md:text-base">
              A comprehensive 4-year degree focusing on the foundational and advanced concepts of AI, Machine Learning algorithms, and modern software engineering practices to solve complex real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Words From Me Section */}
      <section id="words" className="py-20 lg:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">Words From Me</h2>
          <h3 className="text-4xl font-bold text-white tracking-tight mb-12 lg:mb-16">My Philosophy</h3>

          <div className="relative p-8 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#0d1425]/60 to-[#050810]/80 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-700"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>

            <Quote size={60} className="md:w-20 md:h-20 text-white/10 mx-auto mb-8 transform -rotate-6 group-hover:scale-110 group-hover:-rotate-12 group-hover:text-purple-500/20 transition-all duration-500 relative z-10" />

            <p className="text-xl md:text-3xl lg:text-4xl font-medium text-slate-300 leading-relaxed mb-10 relative z-10 italic">
              "Technology is at its best when it seamlessly connects human intuition with computational power. I build systems not just to process data, but to amplify creativity and solve real-world problems."
            </p>

            <div className="flex items-center justify-center gap-4 md:gap-6 relative z-10">
              <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-500/50"></div>
              <span className="text-white font-bold tracking-widest uppercase text-xs md:text-sm">Sanskar Sharma</span>
              <div className="w-12 md:w-16 h-[2px] bg-gradient-to-l from-transparent to-purple-500/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Failures & Lessons Section */}
      <section id="failures" className="py-20 lg:py-32 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 lg:mb-16 text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-widest text-red-400 uppercase mb-3">Embracing Setbacks</h2>
            <h3 className="text-4xl font-bold text-white tracking-tight">Failures & Lessons</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {failuresAndLessons.map((item, idx) => (
              <div key={idx} className={`p-8 rounded-[2rem] bg-[#0d1425]/40 backdrop-blur-xl border border-white/10 hover:border-${item.color}-500/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden shadow-lg`}>
                
                {/* Subtle Background Glow on Hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${item.color}-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-${item.color}-500/20 transition-colors duration-500`}></div>

                {/* Failure Content */}
                <div className="flex flex-col gap-4 mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center text-${item.color}-400 group-hover:scale-110 transition-transform shadow-inner`}>
                    <AlertTriangle size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg leading-tight">{item.failure}</h4>
                </div>
                
                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
                
                {/* Lesson Content */}
                <div className="flex gap-4 relative z-10">
                  <Lightbulb className="text-yellow-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" size={20} />
                  <p className="text-slate-400 text-sm leading-relaxed">{item.lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Let's build something <br className="hidden lg:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">together.</span></h2>
            <p className="text-base md:text-lg text-slate-400 mb-10 md:mb-12 max-w-lg">I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="space-y-4">
              <a href="mailto:sanskarsharmamusic999@gmail.com" className="flex items-center gap-5 p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/60 to-[#050810]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500 shadow-inner z-10 shrink-0">
                  <Mail size={28} />
                </div>
                <div className="z-10 overflow-hidden min-w-0">
                  <p className="text-slate-400 text-[10px] md:text-xs font-bold mb-1 uppercase tracking-widest">Chat directly</p>
                  <h4 className="text-white font-bold text-xl md:text-2xl truncate">Email Me</h4>
                  <p className="text-cyan-400/80 mt-1 truncate group-hover:text-cyan-400 transition-colors text-sm">Click to drop a message</p>
                </div>
                <div className="ml-auto z-10 hidden sm:flex bg-white/5 p-4 rounded-full border border-white/5 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:text-black text-slate-400 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </a>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4 mt-4">
                <a href="https://github.com/Cathhdyy" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-6 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/60 to-[#050810]/80 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 group hover:-translate-y-1">
                  <Github size={28} className="md:w-8 md:h-8 text-slate-500 group-hover:text-white transition-colors" />
                  <span className="text-xs md:text-sm font-bold text-slate-400 group-hover:text-white transition-colors">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/ssanskar" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-6 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/60 to-[#050810]/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 group hover:-translate-y-1">
                  <Linkedin size={28} className="md:w-8 md:h-8 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-xs md:text-sm font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">LinkedIn</span>
                </a>
                <a href="https://open.spotify.com/search/Sansskar" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-6 rounded-[2rem] bg-gradient-to-br from-[#0d1425]/60 to-[#050810]/80 backdrop-blur-xl border border-white/10 hover:border-[#1DB954]/50 hover:bg-[#1DB954]/5 hover:shadow-[0_0_20px_rgba(29,185,84,0.1)] transition-all duration-300 group hover:-translate-y-1">
                  <Music size={28} className="md:w-8 md:h-8 text-slate-500 group-hover:text-[#1DB954] transition-colors" />
                  <span className="text-xs md:text-sm font-bold text-slate-400 group-hover:text-[#1DB954] transition-colors">Spotify</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#0d1425]/60 to-[#050810]/80 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
              Send a message
            </h3>
            
            <form onSubmit={handleFormSubmit} className="relative z-10 space-y-4 md:space-y-5">
              <div className="space-y-1 md:space-y-2">
                <label className="text-xs md:text-sm font-semibold text-slate-300 ml-1">Your Name</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#050810]/60 border border-white/10 rounded-xl pl-11 pr-5 py-3.5 md:py-4 text-sm md:text-base text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-[#050810] focus:ring-1 focus:ring-cyan-500/50 transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-1 md:space-y-2">
                <label className="text-xs md:text-sm font-semibold text-slate-300 ml-1">Your Email</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <AtSign size={18} className="text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#050810]/60 border border-white/10 rounded-xl pl-11 pr-5 py-3.5 md:py-4 text-sm md:text-base text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-[#050810] focus:ring-1 focus:ring-cyan-500/50 transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1 md:space-y-2">
                <label className="text-xs md:text-sm font-semibold text-slate-300 ml-1">Message</label>
                <div className="relative group/input">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                    <MessageSquare size={18} className="text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                  </div>
                  <textarea 
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#050810]/60 border border-white/10 rounded-xl pl-11 pr-5 py-3.5 md:py-4 text-sm md:text-base text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-[#050810] focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none shadow-inner"
                    placeholder="Hi Sanskar, I have an opportunity..."
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full mt-2 py-3.5 md:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 border border-cyan-400/20"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 border-t border-white/10 text-sm font-medium z-10 relative bg-[#050810]">
        <p>© {new Date().getFullYear()} Sanskar Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
