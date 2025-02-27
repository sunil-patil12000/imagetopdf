import React from 'react';
import { FileImage, Shield, Award, Clock, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              About ImageToPDF
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            We're on a mission to make document conversion simple, secure, and accessible to everyone
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors duration-200">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  ImageToPDF was founded in 2023 by a team of document management experts who were frustrated with the existing conversion tools on the market. We saw a need for a simple, fast, and secure solution that didn't compromise on quality or user privacy.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  What started as a small project has grown into a trusted tool used by millions of people worldwide. From students and teachers to professionals and businesses, our users rely on ImageToPDF for their document conversion needs.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Today, we continue to innovate and improve our service, always keeping our core values of simplicity, security, and quality at the heart of everything we do.
                </p>
              </div>
              <div className="md:flex-1">
                <img 
                  className="h-full w-full object-cover" 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Our team working together" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-200">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-300 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Security First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize the security and privacy of your data. All files are automatically deleted after processing, and we never store your personal information.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-200">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-300 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're committed to providing the highest quality conversion results. Our advanced algorithms ensure your PDFs look professional and maintain the integrity of your original images.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-200">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-300 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Time Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We understand the value of your time. Our tool is designed to be fast, intuitive, and hassle-free, allowing you to convert your images to PDF in seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20 bg-blue-600 dark:bg-blue-700 rounded-xl shadow-lg p-8 text-white transition-colors duration-200">
          <h2 className="text-3xl font-bold text-center mb-12">ImageToPDF by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10M+</div>
              <p className="text-xl">PDFs Created</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2M+</div>
              <p className="text-xl">Monthly Users</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-xl">Countries</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden text-center transition-colors duration-200">
              <img 
                className="h-64 w-full object-cover" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Team member" 
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h3>
                <p className="text-blue-600 dark:text-blue-400">Founder & CEO</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Former Google engineer with 15+ years of experience in document management systems.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden text-center transition-colors duration-200">
              <img 
                className="h-64 w-full object-cover" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Team member" 
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sarah Johnson</h3>
                <p className="text-blue-600 dark:text-blue-400">CTO</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  PDF specification expert with a background in image processing algorithms.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden text-center transition-colors duration-200">
              <img 
                className="h-64 w-full object-cover" 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Team member" 
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Michael Chen</h3>
                <p className="text-blue-600 dark:text-blue-400">Lead Developer</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Full-stack developer passionate about creating intuitive user experiences.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden text-center transition-colors duration-200">
              <img 
                className="h-64 w-full object-cover" 
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Team member" 
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Emily Rodriguez</h3>
                <p className="text-blue-600 dark:text-blue-400">Head of Customer Success</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Dedicated to ensuring our users have the best possible experience with our tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors duration-200">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Have questions, feedback, or need assistance? We'd love to hear from you. Our team is here to help you get the most out of ImageToPDF.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-300 mb-4 mx-auto">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  support@imagetopdf.example.com
                </p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-300 mb-4 mx-auto">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Headquarters</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  San Francisco, CA
                </p>
              </div>
              <div>
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-300 mb-4 mx-auto">
                  <FileImage className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Press</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  press@imagetopdf.example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;