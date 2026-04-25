import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Careers - Join Bridgely Pro Team',
  description: 'Explore career opportunities at Bridgely Pro and join our growing team.',
};

const jobs = [
  {
    id: 1,
    title: 'Senior Virtual Assistant',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-Time',
    experience: '5+ years',
    description: 'We are looking for an experienced Virtual Assistant to join our operations team and support our clients with administrative tasks.',
    requirements: [
      'Proven experience in administrative support',
      'Excellent organizational and time management skills',
      'Strong communication abilities',
      'Proficiency in Microsoft Office and Google Workspace',
    ],
  },
  {
    id: 2,
    title: 'BPO Project Manager',
    department: 'Service Delivery',
    location: 'USA (Remote)',
    type: 'Full-Time',
    experience: '7+ years',
    description: 'Lead cross-functional teams to deliver high-quality business process outsourcing solutions to our enterprise clients.',
    requirements: [
      'Project management certification (PMP or CAPM preferred)',
      'Experience managing BPO/offshore teams',
      'Strong stakeholder management skills',
      'Expertise in process optimization',
    ],
  },
  {
    id: 3,
    title: 'Data Entry Specialist',
    department: 'Data Services',
    location: 'Remote',
    type: 'Full-Time',
    experience: '2+ years',
    description: 'Perform accurate data entry, verification, and quality control for various business documents and databases.',
    requirements: [
      'High accuracy and attention to detail',
      'Fast typing speed (60+ WPM)',
      'Experience with data management tools',
      'Ability to work under tight deadlines',
    ],
  },
  {
    id: 4,
    title: 'Customer Support Specialist',
    department: 'Client Support',
    location: 'USA (Remote)',
    type: 'Full-Time',
    experience: '3+ years',
    description: 'Provide exceptional customer support to clients via phone, email, and chat, ensuring their satisfaction and resolving issues promptly.',
    requirements: [
      'Excellent communication skills',
      'Customer service experience in BPO/outsourcing',
      'Problem-solving abilities',
      'Ability to handle multiple queries simultaneously',
    ],
  },
  {
    id: 5,
    title: 'Policy Processing Analyst',
    department: 'Insurance Services',
    location: 'Remote',
    type: 'Full-Time',
    experience: '3+ years',
    description: 'Process insurance policies, handle underwriting tasks, and maintain accurate documentation for insurance clients.',
    requirements: [
      'Knowledge of insurance policies and procedures',
      'Experience with insurance software systems',
      'Meticulous attention to detail',
      'Understanding of compliance requirements',
    ],
  },
  {
    id: 6,
    title: 'Finance & Accounting Associate',
    department: 'Finance',
    location: 'USA (Remote)',
    type: 'Full-Time',
    experience: '4+ years',
    description: 'Manage accounts payable, accounts receivable, and general ledger functions for multiple clients.',
    requirements: [
      'Accounting degree or equivalent experience',
      'Proficiency in accounting software',
      'Strong Excel skills',
      'Knowledge of GAAP principles',
    ],
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Header />
      
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Talented Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build your career with Bridgely Pro. We are looking for passionate professionals to join our growing organization.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Why Join Bridgely Pro?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Remote Flexibility',
                  description: 'Work from anywhere. Enjoy the flexibility to work from home while collaborating with a global team.',
                  icon: '🌍',
                },
                {
                  title: 'Career Growth',
                  description: 'Continuous learning opportunities and career advancement paths tailored to your goals.',
                  icon: '📈',
                },
                {
                  title: 'Competitive Benefits',
                  description: 'Attractive compensation, health insurance, and performance bonuses for top performers.',
                  icon: '💰',
                },
                {
                  title: 'Team Culture',
                  description: 'Work with a diverse, inclusive, and supportive team that values collaboration and innovation.',
                  icon: '👥',
                },
                {
                  title: 'Professional Development',
                  description: 'Access to training programs, certifications, and mentorship from industry experts.',
                  icon: '📚',
                },
                {
                  title: 'Work-Life Balance',
                  description: 'We prioritize your well-being with flexible schedules and generous time-off policies.',
                  icon: '⚖️',
                },
              ].map((benefit, index) => (
                <div key={index} className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              {jobs.length} exciting opportunities available
            </p>

            <div className="space-y-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span>{job.type}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{job.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-gray-600">
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="text-blue-600 font-semibold">{job.experience} Experience</span>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Don&apos;t see your ideal role?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Send us your resume and let us know about your interests. We review all applications.
            </p>
            <a
              href="mailto:careers@bridgelypro.com"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"
            >
              Send Your Resume
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
