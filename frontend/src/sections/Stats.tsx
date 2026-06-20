import { motion } from 'framer-motion';
import { Calendar, Clock, MonitorPlay, IndianRupee } from 'lucide-react';

const stats = [
  {
    label: "Duration",
    value: "4 Weeks",
    icon: Clock,
    color: "text-brand-primary"
  },
  {
    label: "Age Group",
    value: "8–14 Years",
    icon: Calendar,
    color: "text-brand-secondary"
  },
  {
    label: "Mode",
    value: "Live Online",
    icon: MonitorPlay,
    color: "text-brand-primary"
  },
  {
    label: "Fee",
    value: "₹2,999",
    icon: IndianRupee,
    color: "text-green-500"
  }
];

export const StatsStrip = () => {
  return (
    <div className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="glass rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex-1 flex items-center justify-center pt-6 md:pt-0 first:pt-0 w-full">
            <div className={`p-4 rounded-full bg-brand-light mr-4 ${stat.color}`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-brand-dark/60 font-medium uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold text-brand-dark">{stat.value}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
