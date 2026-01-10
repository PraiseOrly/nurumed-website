import React from 'react';
import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/Button';
export function Footer() {
  return <footer className="bg-[#1E2A38] text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-[#FFC94A] p-2 rounded-xl text-[#1E2A38]">
                <HeartPulse size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold font-heading">
                Nuru<span className="text-[#FFC94A]">Med</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed font-body">
              Empowering patients and connecting healthcare providers across
              Africa. Better health, one tap away.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#007B83] hover:text-white transition-colors">
                  <Icon size={18} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-heading">
              Company
            </h4>
            <ul className="space-y-4 font-body">
              {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map(item => <li key={item}>
                    <a href="#" className="hover:text-[#FFC94A] transition-colors">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-heading">
              Legal
            </h4>
            <ul className="space-y-4 font-body">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'HIPAA Compliance'].map(item => <li key={item}>
                  <a href="#" className="hover:text-[#FFC94A] transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-heading">
              Get in Touch
            </h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#FFC94A] mt-1" size={18} />
                <span>123 Innovation Drive, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#FFC94A]" size={18} />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#FFC94A]" size={18} />
                <span>hello@nurumed.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-body">
            © {new Date().getFullYear()} NuruMed Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="sm" className="font-bold">
              Download App
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
              Partner Login
            </Button>
          </div>
        </div>
      </div>
    </footer>;
}