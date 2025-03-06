
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fidcent-green focus:border-fidcent-green"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fidcent-green focus:border-fidcent-green"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fidcent-green focus:border-fidcent-green"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fidcent-green focus:border-fidcent-green"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button className="w-full gradient-bg text-white hover:opacity-90 transition-opacity">
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-fidcent-green" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Our Address</h3>
                <p className="text-gray-600 mt-1">
                  16, Feenas Street, Adj mast, Ibafo, <br />
                  Ogun State, Nigeria
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-fidcent-green" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone Number</h3>
                <p className="text-gray-600 mt-1">
                  <a href="tel:+2348165131008" className="hover:text-fidcent-green">
                    +234 816 513 1008
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <MailIcon className="h-6 w-6 text-fidcent-green" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email Address</h3>
                <p className="text-gray-600 mt-1">
                  <a href="mailto:contact@fidcent.com" className="hover:text-fidcent-green">
                    contact@fidcent.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <ClockIcon className="h-6 w-6 text-fidcent-green" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Business Hours</h3>
                <p className="text-gray-600 mt-1">
                  Monday - Friday: 9:00 AM - 6:00 PM <br />
                  Saturday: 10:00 AM - 2:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/fidcent" className="bg-gray-100 p-3 rounded-full hover:bg-fidcent-green hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/fidcent" className="bg-gray-100 p-3 rounded-full hover:bg-fidcent-green hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://facebook.com/fidcent" className="bg-gray-100 p-3 rounded-full hover:bg-fidcent-green hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
