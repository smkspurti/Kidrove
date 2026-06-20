import { motion } from 'framer-motion';

const timeline = [
  {
    week: "Week 1",
    title: "Introduction to AI",
    description: "Discover what AI is, how it works, and train your first simple model.",
    color: "bg-blue-500"
  },
  {
    week: "Week 2",
    title: "Robotics Basics",
    description: "Understand the hardware. Learn about sensors, motors, and microcontrollers.",
    color: "bg-indigo-500"
  },
  {
    week: "Week 3",
    title: "Projects",
    description: "Combine AI and Robotics to build interactive, smart mini-projects.",
    color: "bg-purple-500"
  },
  {
    week: "Week 4",
    title: "Final Showcase",
    description: "Polish projects and present them to parents and peers in a grand showcase.",
    color: "bg-pink-500"
  }
];

export const Journey = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Top SVG Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] lg:h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-brand-light"></path>
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center mb-16">
          <h2 className="text-brand-secondary font-bold tracking-wide uppercase text-sm mb-2">Curriculum</h2>
          <h3 className="text-4xl font-extrabold text-white">Workshop Journey</h3>
        </div>

        <div className="relative">
          {/* Glowing Animated Timeline Line */}
          <div className="absolute left-[23px] lg:left-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {timeline.map((step, idx) => (
              <motion.div 
                key={idx}
                className="relative flex flex-col lg:flex-row items-start lg:items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-dark rounded-full border-4 border-brand-dark flex items-center justify-center z-10 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                    <div className={`w-4 h-4 rounded-full ${idx % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-secondary'} animate-pulse`} />
                  </div>
                </div>

                {/* Empty Half (for alternating layout) */}
                <div className={`hidden lg:block lg:w-1/2 ${idx % 2 === 0 ? 'lg:order-last' : ''}`}></div>
                
                {/* Content */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${idx % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className="bg-white/5 backdrop-blur-lg p-6 lg:p-8 rounded-2xl border border-white/10 hover:border-brand-primary/30 transition-colors shadow-xl">
                    <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold text-white mb-4 ${idx % 2 === 0 ? 'bg-brand-primary' : 'bg-brand-secondary'}`}>
                      {step.week}
                    </span>
                    <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-white/70 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] lg:h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};
