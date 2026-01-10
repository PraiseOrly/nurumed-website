import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, Sparkles } from 'lucide-react';
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
export function CTASection() {
  return <section className="py-24 bg-gradient-to-br from-[#007B83] via-[#00666D] to-[#1E2A38] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFC94A]/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC94A]/5 rounded-full blur-[100px]" />

      {/* Floating Light Particles */}
      {[...Array(10)].map((_, i) => <Particle key={i} delay={Math.random() * 5} duration={4 + Math.random() * 4} x={Math.random() * 100} y={Math.random() * 100} size={3 + Math.random() * 6} />)}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-4xl mx-auto">
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

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-teal-100 text-sm font-body">
              Questions? Contact us at{' '}
              <a href="mailto:hello@nurumed.com" className="text-[#FFC94A] font-semibold hover:underline">
                hello@nurumed.com
              </a>{' '}
              or call{' '}
              <a href="tel:+254700123456" className="text-[#FFC94A] font-semibold hover:underline">
                +254 700 123 456
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
}