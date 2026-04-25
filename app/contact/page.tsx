import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import ContactForm from '@/components/forms/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Bridgely Pro',
  description: 'Get in touch with Bridgely Pro. We are here to help and answer any questions you may have.',
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header />

      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Email */}
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700 mb-1">hello@bridgelypro.com</p>
                <p className="text-sm text-gray-600">We respond within 24 hours</p>
              </div>

              {/* Phone */}
              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-700 mb-1">+1 (800) 123-4567</p>
                <p className="text-sm text-gray-600">Monday to Friday, 9 AM - 6 PM EST</p>
              </div>

              {/* Office */}
              <div className="p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border border-pink-200">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-700 mb-1">123 Business Ave, New York, NY 10001</p>
                <p className="text-sm text-gray-600">Visit us in person</p>
              </div>

              {/* Support */}
              <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Support Hours</h3>
                <p className="text-gray-700 mb-1">24/7 Live Chat Support</p>
                <p className="text-sm text-gray-600">Available anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form Section */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Please fill out the form below and we will get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>

              {/* FAQ or Additional Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Need Help?</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Check our FAQ page for quick answers to common questions.
                    </p>
                    <a href="#" className="text-blue-600 font-semibold hover:underline text-sm">
                      View FAQ →
                    </a>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Our Blog</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Explore insights and resources on our blog.
                    </p>
                    <a href="#blog" className="text-blue-600 font-semibold hover:underline text-sm">
                      Read Blog →
                    </a>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-2">Schedule a Call</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Book a consultation with our team.
                    </p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                      Schedule Now
                    </button>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Response Time</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-900">General Inquiries:</span> 24-48 hours
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Sales Inquiries:</span> Same day
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Support Issues:</span> 2-4 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Office</h2>
            <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center border-2 border-gray-300">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">123 Business Ave, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
