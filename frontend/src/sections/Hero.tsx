import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight, Cpu, Rocket, Laptop, CreditCard } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden bg-brand-dark">
      {/* Rich Background Pattern & Floating Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/30 rounded-full blur-[120px] mix-blend-screen opacity-80"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/20 rounded-full blur-[120px] mix-blend-screen opacity-80"></div>
        
        {/* Geometric Shapes */}
        <motion.div animate={{ y: [-20, 20, -20], rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] left-[5%] text-yellow-400/80">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
        </motion.div>
        <motion.div animate={{ y: [20, -20, 20], rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-[30%] left-[45%] text-brand-secondary/80">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
        </motion.div>
        <motion.div animate={{ x: [-20, 20, -20], rotate: 180 }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] right-[40%] text-brand-primary/80">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="4"/></svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm mb-6 shadow-sm">
              <Rocket className="w-4 h-4 mr-2 text-brand-secondary" />
              <span>Summer 2026 Admissions Open</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Future-Proof Your Child with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-brand-secondary">AI & Robotics</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Equip your 8-14 year old with tomorrow's skills today. A 4-week interactive online workshop where they build, code, and create.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#register" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-brand-secondary hover:bg-orange-600 shadow-[0_8px_25px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-1">
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/brochure.txt" download="Kidrove-Workshop-Brochure.txt" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-white/10 border-2 border-white/20 hover:bg-white/20 transition-all shadow-sm">
                Download Brochure
              </a>
            </div>
            
            {/* Trust Badges inline */}
            <div className="mt-10 pt-10 border-t border-white/10 flex flex-wrap gap-4 justify-center lg:justify-start text-sm font-bold text-white/90">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 mr-2 text-brand-primary" />
                8-14 Years
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 mr-2 text-brand-secondary" />
                4 Weeks
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Laptop className="w-5 h-5 mr-2 text-brand-primary" />
                Mode: Online
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <CreditCard className="w-5 h-5 mr-2 text-brand-secondary" />
                Fee: ₹2,999
              </div>
              <div className="flex items-center bg-brand-primary/20 border border-brand-primary/50 px-4 py-2 rounded-full text-white">
                <Calendar className="w-5 h-5 mr-2 text-brand-primary" />
                Starts 15 July
              </div>
            </div>
          </motion.div>

          {/* Visual/Image Side */}
          <motion.div 
            className="lg:col-span-6 mt-16 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-4 flex flex-col items-center justify-center">
              {/* Main 3D Illustration */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src="/hero-illustration.png" 
                  alt="Child interacting with friendly robot" 
                  className="w-[500px] max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl border-[12px] border-white/10 object-cover aspect-square"
                />
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 -left-10 glass p-4 rounded-full z-20 shadow-[0_10px_25px_rgba(249,115,22,0.2)]"
              >
                <Cpu className="w-10 h-10 text-brand-secondary" />
              </motion.div>
              
              <div className="absolute -bottom-6 z-20 text-center w-full px-8">
                 <div className="glass px-8 py-5 rounded-[2rem] inline-block border-brand-primary/20 text-brand-dark shadow-[0_10px_40px_rgba(139,92,246,0.3)] rotate-3 hover:rotate-0 transition-transform bg-white">
                    <p className="font-extrabold text-xl text-brand-primary tracking-tight">Interactive Live Classes</p>
                    <p className="text-sm font-bold opacity-80 mt-1">Learn from top instructors</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Playful SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] lg:h-[120px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#fffdfa]"></path>
        </svg>
      </div>
    </section>
  );
};
