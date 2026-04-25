'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Check, AlertCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bold CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden mb-24"
        >
          {/* Bold Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-indigo-900" />
          
          {/* Decorative Mesh/Shapes */}
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/20 blur-[120px]" />
          
          <div className="relative p-12 sm:p-20 flex flex-col items-center text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-sm">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
              Join hundreds of innovative companies already scaling effortlessly with Bridgely Pro's expert virtual solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-primary bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Contact Methods (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-foreground mb-4">Get in <span className="text-primary">Touch</span></h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Have questions? Our team is ready to help you optimize your operations.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Mail, title: 'Email Us', desc: 'hello@bridgelypro.com' },
                  { icon: Phone, title: 'Call Us', desc: '+1 (800) 123-4567' },
                  { icon: MessageSquare, title: 'Live Chat', desc: 'Available 24/7' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-card p-8 sm:p-10 rounded-3xl shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <p className="text-green-600 font-medium">Your message has been sent successfully!</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-background border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground ${errors.name ? 'border-red-500' : 'border-border'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-red-500" />}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-background border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground ${errors.email ? 'border-red-500' : 'border-border'}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-red-500" />}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Acme Inc"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 bg-background border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-red-500" />}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold transition-all hover:-translate-y-1 py-4 text-lg shadow-[0_8px_30px_rgb(9,223,240,0.3)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
