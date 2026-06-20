import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do children need prior coding experience?",
    answer: "Not at all! This workshop is designed for absolute beginners. We start from the very basics and progressively build up their skills in a fun, engaging way."
  },
  {
    question: "Will session recordings be available?",
    answer: "Yes, all live sessions are recorded and made available within 24 hours. Your child can rewatch them anytime to revise concepts or catch up on missed classes."
  },
  {
    question: "What hardware or software is required?",
    answer: "You only need a laptop or desktop with a stable internet connection and a modern web browser. All the tools and simulators we use are web-based and completely free."
  },
  {
    question: "What is the student to teacher ratio?",
    answer: "We maintain a strict 1:5 ratio to ensure personalized attention for every child, allowing our expert mentors to solve doubts instantly."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-primary font-bold tracking-wide uppercase text-sm mb-2">Got Questions?</h2>
          <h3 className="text-4xl font-extrabold text-brand-dark">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-brand-dark">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-brand-primary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-brand-dark/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
