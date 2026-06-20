import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    childAge: "a 10-year-old",
    feedback: "My son used to spend hours playing games. Now he spends that time building them! The transformation in his logical thinking is incredible.",
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    name: "Rahul Verma",
    childAge: "a 13-year-old",
    feedback: "The live mentorship made all the difference. The instructors were patient and engaging. Highly recommend this workshop for any curious child.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Anita Desai",
    childAge: "a 9-year-old",
    feedback: "I was skeptical about an online workshop, but Kidrove's interactive approach kept my daughter completely hooked for all 4 weeks.",
    avatar: "https://i.pravatar.cc/150?img=32"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Success Stories</h2>
          <h3 className="text-4xl font-extrabold text-brand-dark">Hear From Our Parents</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-brand-light/40 p-8 rounded-3xl border border-gray-100 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-brand-dark/80 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.feedback}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-xs text-brand-dark/60 uppercase tracking-wider">Parent of {testimonial.childAge}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
