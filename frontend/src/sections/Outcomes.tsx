import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  "Build AI-powered mini projects",
  "Learn robotics fundamentals",
  "Understand sensors and automation",
  "Create simple machine learning models",
  "Improve logical thinking and problem solving",
  "Develop a growth mindset towards technology"
];

export const Outcomes = () => {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-secondary/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">What They'll Learn</h2>
            <h3 className="text-4xl font-extrabold text-brand-dark mb-6">Real Outcomes,<br/> Tangible Skills</h3>
            <p className="text-xl text-brand-dark/70 leading-relaxed mb-8">
              By the end of this 4-week journey, your child won't just consume technology—they will know how to create it. We focus on practical, project-based learning.
            </p>
            <div className="relative mt-8 lg:mt-12">
            <div className="absolute inset-0 bg-brand-primary/10 transform rotate-3 rounded-3xl z-0 blur-xl"></div>
            <img 
              src="/outcomes-illustration.png" 
              alt="Child learning robotics" 
              className="relative z-10 rounded-3xl shadow-2xl border-8 border-white object-cover w-full"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 z-20 glass p-4 rounded-2xl shadow-xl flex items-center bg-white border border-brand-primary/20">
               <CheckCircle2 className="w-8 h-8 text-brand-secondary mr-3" />
               <div>
                  <p className="font-bold text-brand-dark">Guaranteed</p>
                  <p className="text-xs text-brand-dark/60 font-medium">Tangible Results</p>
               </div>
            </div>
          </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-brand-dark/5">
              <ul className="space-y-6">
                {outcomes.map((outcome, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all">
                       <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="text-brand-dark/80 font-medium text-lg pt-0.5">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
