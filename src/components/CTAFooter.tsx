import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Handshake, HeartPulse, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles, Twitter } from 'lucide-react';
import { Button } from './ui/Button';

// Floating particle component
const Particle = ({
  delay,
  duration,
  x,
  y,
  size
}: {
  delay: number;
  duration: number;
  x: number;
  y: number;
  size: number;
}) => <motion.div className="absolute rounded-full bg-[#FFC94A]/40 blur-sm" style={{
  width: size,
  height: size,
  left: `${x}%`,
  top: `${y}%`
}} animate={{
  y: [0, -50, 0],
  opacity: [0, 0.6, 0]
}} transition={{
  duration: duration,
  repeat: Infinity,
  delay: delay,
  ease: 'easeInOut'
}} />;

// Impact section stats
const stats = [{
  value: 1000,
  suffix: '+',
  label: 'Patients Monitored'
}, {
  value: 75,
  suffix: '%',
  label: 'Adherence Improvement'
}, {
  value: 3,
  suffix: '+',
  label: 'Hospitals Integrated'
}, {
  value: 98,
  suffix: '%',
  label: 'Satisfaction Rate'
}];

// Counter component for animated numbers
const Counter = ({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) => {
  return (
    <motion.span
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 2
      }}
      className="inline-block"
    >
      {value}{suffix}
    </motion.span>
  );
};

export function CTAFooter() {
  return (
    <section className="bg-gradient-to-br from-[#1E2A38] via-[#007B83] to-[#1E2A38] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFC94A]/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC94A]/5 rounded-full blur-[100px]" />

      {/* Floating Light Particles */}
      {[...Array(10)].map((_, i) => <Particle key={i} delay={Math.random() * 5} duration={4 + Math.random() * 4} x={Math.random() * 100} y={Math.random() * 100} size={3 + Math.random() * 6} />)}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Impact Stats Section */}
        <div className="text-center mb-12 pt-8">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
          >
            Health Equity Powered by Technology
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-teal-100 text-lg max-w-2xl mx-auto font-body"
          >
            Real impact, measurable results. See how NuruMed is transforming
            chronic care across Africa.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#FFC94A] font-heading drop-shadow-md">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-teal-100 font-medium font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{
            opacity: 0,
            y: 30
          }} 
          whileInView={{
            opacity: 1,
            y: 0
          }} 
          viewport={{
            once: true
          }} 
          transition={{
            duration: 0.6
          }} 
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FFC94A] text-sm font-semibold mb-8 border border-white/10 backdrop-blur-sm">
            <Sparkles size={14} />
            <span>Start Your Journey Today</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-heading">
            Join the Movement for <br />
            <span className="text-[#FFC94A] drop-shadow-lg">
              Better Chronic Care
            </span>
          </h2>

          <p className="text-xl text-teal-100 mb-10 leading-relaxed max-w-2xl mx-auto font-body">
            Whether you're a patient seeking better health management or a
            healthcare provider looking to expand your reach, NuruMed is here
            for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button variant="primary" size="lg" className="text-[#1E2A38] font-bold shadow-xl hover:shadow-2xl shadow-[#FFC94A]/20" rightIcon={<ArrowRight size={20} />}>
              Download NuruMed App
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-[#007B83] font-bold" leftIcon={<Handshake size={20} />}>
              Partner with Us
            </Button>
          </div>

          <div className="mt-12">
          </div>
        </motion.div>

        {/* Footer Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 pt-8 border-t border-white/10">
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

        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-white/10">
          <p className="text-xs text-gray-400 font-body">
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
    </section>
  );
}

