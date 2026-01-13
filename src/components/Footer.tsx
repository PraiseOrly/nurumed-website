import { Facebook, HeartPulse, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Button } from './ui/Button';
export function Footer() {
  return <footer className="bg-gradient-to-br from-[#1E2A38] via-[#007B83] to-[#1E2A38] backdrop-blur-md text-gray-300 pt-6 pb-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-white">
              <div className="bg-[#FFC94A] p-2 rounded-xl text-[#1E2A38]">
                <HeartPulse size={24} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold font-heading">
                Nuru<span className="text-[#FFC94A]">Med</span>
              </span>
            </div>
            <p className="text-gray-400 mb-3 text-sm leading-relaxed font-body">
              Empowering patients and connecting healthcare providers across
              Africa. Better health, one tap away.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#007B83] hover:text-white transition-colors">
                  <Icon size={16} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-3 font-heading">
              Company
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map(item => <li key={item}>
                    <a href="#" className="hover:text-[#FFC94A] transition-colors">
                      {item}
                    </a>
                  </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-base mb-3 font-heading">
              Legal
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'HIPAA Compliance'].map(item => <li key={item}>
                  <a href="#" className="hover:text-[#FFC94A] transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-3 font-heading">
              Get in Touch
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="text-[#FFC94A] mt-0.5" size={16} />
                <span>123 Innovation Drive, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-[#FFC94A]" size={16} />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-[#FFC94A]" size={16} />
                <span>hello@nurumed.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500 font-body">
            © {new Date().getFullYear()} NuruMed Inc. All rights reserved.
          </p>
          <div className="flex gap-3">
            <Button variant="primary" size="sm" className="font-bold text-xs">
              Download App
            </Button>
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white text-xs">
              Partner Login
            </Button>
          </div>
        </div>
      </div>
    </footer>;
}
