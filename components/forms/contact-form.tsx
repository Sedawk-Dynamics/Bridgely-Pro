'use client';

import { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {status === 'success' && (
        <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-3 animate-fade-in-up">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-700 font-medium">Thank you! Your message has been sent successfully. We will be in touch soon.</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Full Name *
        </label>
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              errors.name ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-red-500" />
          )}
        </div>
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-red-500" />
          )}
        </div>
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 transition-all"
          placeholder="Acme Inc."
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Subject *
        </label>
        <div className="relative">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              errors.subject ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="How can we help?"
          />
          {errors.subject && (
            <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-red-500" />
          )}
        </div>
        {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Message *
        </label>
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
            }`}
            placeholder="Tell us about your project or inquiry..."
          />
          {errors.message && (
            <AlertCircle className="absolute right-3 top-3.5 w-5 h-5 text-red-500" />
          )}
        </div>
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-105"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>

      <p className="text-sm text-gray-600 text-center">
        We&apos;ll get back to you within 24 hours during business days.
      </p>
    </form>
  );
}
