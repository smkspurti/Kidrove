import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number (e.g., +919876543210)")
});

type FormData = z.infer<typeof formSchema>;

export const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      // Use environment variable for API URL if deployed, otherwise fallback to local backend
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/enquiry';
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage(result.message || "Failed to submit enquiry.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:gap-16 items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Ready to Spark Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">Curiosity?</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
              Join thousands of parents who have empowered their children with future-ready skills. Limited seats available for the summer batch.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <ShieldCheck className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Secure Registration</h4>
                  <p className="text-white/60 text-sm">Your data is safe with us.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Limited Seats</h4>
                  <p className="text-white/60 text-sm">Only 15 students per batch.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div 
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl text-brand-dark relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {isSuccess ? (
                <div className="text-center py-16">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">Registration Successful!</h3>
                  <p className="text-brand-dark/70 mb-8">
                    Thank you for enrolling. Our team will contact you shortly with the next steps.
                  </p>
                  <button onClick={() => setIsSuccess(false)} className="text-brand-primary font-bold hover:underline">
                    Submit another response
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-8 text-center">Enroll Now</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">Parent / Guardian Name</label>
                      <input 
                        {...register("name")}
                        type="text" 
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-brand-primary/50 transition-all outline-none ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-2 font-medium">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">Email Address</label>
                      <input 
                        {...register("email")}
                        type="email" 
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-brand-primary/50 transition-all outline-none ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-2 font-medium">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-brand-dark mb-2">Phone Number</label>
                      <input 
                        {...register("phone")}
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-brand-primary/50 transition-all outline-none ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium">{errors.phone.message}</p>}
                    </div>

                    {errorMessage && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-brand-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Submit Registration"
                      )}
                    </button>
                  </form>
                  <p className="text-center text-xs text-brand-dark/50 mt-6">
                    By registering, you agree to our Terms of Service & Privacy Policy.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
