import { motion } from 'framer-motion';
import { Lightbulb, Wrench, Sparkles, Video, Users, Medal } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-brand-primary" />,
    title: "Future-Ready Skills",
    description: "Prepare them for tomorrow's careers with foundational AI knowledge.",
    color: "bg-purple-100"
  },
  {
    icon: <Wrench className="w-8 h-8 text-brand-secondary" />,
    title: "Hands-On Projects",
    description: "Learning by doing. Build real mini-projects every week.",
    color: "bg-orange-100"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-brand-primary" />,
    title: "Beginner Friendly",
    description: "No prior coding experience required. We start from the absolute basics.",
    color: "bg-blue-100"
  },
  {
    icon: <Video className="w-8 h-8 text-brand-secondary" />,
    title: "Live Mentorship",
    description: "Expert instructors guide students in real-time, clearing doubts instantly.",
    color: "bg-pink-100"
  },
  {
    icon: <Users className="w-8 h-8 text-brand-primary" />,
    title: "Small Batch Learning",
    description: "Personalized attention ensuring no child is left behind.",
    color: "bg-indigo-100"
  },
  {
    icon: <Medal className="w-8 h-8 text-brand-secondary" />,
    title: "Certificate of Completion",
    description: "Showcase their new skills with an official Kidrove certificate.",
    color: "bg-yellow-100"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Why Choose Kidrove</h2>
          <h3 className="text-4xl font-extrabold text-brand-dark">Why Parents Love This Workshop</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-brand-dark/5 hover:shadow-xl hover:border-brand-primary/20 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark">{feature.title}</h3>
              <p className="text-brand-dark/70 font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
