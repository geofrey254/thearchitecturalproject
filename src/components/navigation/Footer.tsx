import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowRight,
  Award,
  Users,
  Building,
  Calendar
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const services = [
    'Residential Design',
    'Commercial Architecture', 
    'Interior Design',
    'Urban Planning',
    'Sustainable Design',
    '3D Visualization'
  ];

  const quickLinks = [
    'About Us',
    'Our Portfolio',
    'Design Process',
    'Awards & Recognition',
    'Careers',
    'News & Insights'
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-amber-400 transform rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-amber-400 transform rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-amber-400 transform -rotate-45"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 border border-amber-400 transform rotate-30"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto px-12">
        
        {/* Newsletter Section */}
        <div className="py-16 border-b border-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-4">
              Stay Updated with <span className="text-amber-400 font-semibold">Design Insights</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Subscribe to our newsletter for the latest architectural trends, project showcases, and industry insights.
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 focus:border-amber-400 focus:outline-none text-white placeholder-slate-400 rounded-l-lg"
              />
              <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-r-lg transition-colors duration-300 flex items-center">
                Subscribe
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 transform rotate-45 rounded-sm"></div>
                <div className="absolute inset-1 bg-slate-900 transform rotate-45 rounded-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-amber-400 text-lg">A</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light tracking-wider">
                  ARCHI<span className="font-bold text-amber-400">STUDIO</span>
                </h3>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Transforming visions into architectural masterpieces. We design spaces that inspire, innovate, and endure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-slate-800 rounded-lg">
                <div className="text-amber-400 font-bold text-xl">15+</div>
                <div className="text-slate-400 text-xs uppercase tracking-wide">Years</div>
              </div>
              <div className="text-center p-3 bg-slate-800 rounded-lg">
                <div className="text-amber-400 font-bold text-xl">200+</div>
                <div className="text-slate-400 text-xs uppercase tracking-wide">Projects</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-slate-400 group-hover:text-slate-900" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 opacity-60 group-hover:opacity-100"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3 opacity-60 group-hover:opacity-100"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Get In Touch
            </h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-slate-800 rounded-lg mt-0.5">
                  <MapPin size={16} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    123 Architecture Avenue<br />
                    Design City, DC 12345<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-slate-800 rounded-lg">
                  <Phone size={16} className="text-amber-400" />
                </div>
                <div>
                  <a href="tel:+15551234567" className="text-slate-400 hover:text-amber-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-slate-800 rounded-lg">
                  <Mail size={16} className="text-amber-400" />
                </div>
                <div>
                  <a href="mailto:hello@archi.studio" className="text-slate-400 hover:text-amber-400 transition-colors">
                    hello@archi.studio
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <div className="flex items-center justify-center w-8 h-8 bg-slate-800 rounded-lg mt-0.5">
                  <Clock size={16} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Monday - Friday: 9:00 - 18:00<br />
                    Saturday: 10:00 - 16:00<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a href="/consultation">
                  <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 py-3 px-6 font-semibold rounded-lg transition-colors duration-300 uppercase tracking-wide text-sm">
                    Schedule Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="py-8 border-t border-b border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Award size={20} className="text-amber-400" />
              <span className="text-slate-400 text-sm">Certified by AIA • LEED Accredited • Award-winning Design</span>
            </div>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-amber-400" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building size={16} className="text-amber-400" />
                <span>3 Office Locations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} ArchiStudio. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}