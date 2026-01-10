import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, ShieldCheck, Users, HeartPulse, Sparkles } from 'lucide-react';
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
}) => <motion.div className="absolute rounded-full bg-[#FFC94A]/30 blur-sm" style={{
  width: size,
  height: size,
  left: `${x}%`,
  top: `${y}%`
}} animate={{
  y: [0, -100, 0],
  opacity: [0, 0.8, 0],
  scale: [0.5, 1.2, 0.5]
}} transition={{
  duration: duration,
  repeat: Infinity,
  delay: delay,
  ease: 'easeInOut'
}} />;
export function Hero() {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#1E2A38] via-[#007B83] to-[#1E2A38]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

      {/* Floating Light Particles */}
      {[...Array(15)].map((_, i) => <Particle key={i} delay={Math.random() * 5} duration={5 + Math.random() * 5} x={Math.random() * 100} y={Math.random() * 100} size={4 + Math.random() * 8} />)}

      {/* Large Glow Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#FFC94A]/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#007B83]/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="max-w-2xl">
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC94A]/10 text-[#FFC94A] text-sm font-semibold mb-6 border border-[#FFC94A]/20 backdrop-blur-sm">
              <Sparkles size={14} className="animate-pulse" />
              <span>Revolutionizing Chronic Care in Africa</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 font-heading">
              Bringing{' '}
              <span className="text-[#FFC94A] inline-block relative">
                Light
                <motion.span className="absolute inset-0 bg-[#FFC94A]/20 blur-lg" animate={{
                opacity: [0.5, 0.8, 0.5]
              }} transition={{
                duration: 2,
                repeat: Infinity
              }} />
              </span>{' '}
              to <br />
              Chronic Care in Africa
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-body">
              NuruMed connects patients, doctors, insurers, and pharmacies to
              make managing chronic diseases simple, continuous, and filled with
              hope.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" rightIcon={<ArrowRight size={18} />} className="shadow-[#FFC94A]/25 shadow-xl">
                Download App
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#007B83]">
                Partner with Us
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-gray-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#FFC94A]" size={20} />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="text-[#FFC94A]" size={20} />
                <span>1,000+ Patients</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - 3D Phone Mockup */}
          <motion.div initial={{
          opacity: 0,
          x: 30,
          rotateY: 10
        }} animate={{
          opacity: 1,
          x: 0,
          rotateY: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: 'easeOut'
        }} className="relative perspective-1000">
            <motion.div animate={{
            y: [-10, 10, -10]
          }} transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="relative z-10 bg-white rounded-[40px] shadow-2xl border-8 border-[#1E2A38] p-2 max-w-sm mx-auto lg:mx-0 lg:ml-auto overflow-hidden">
              {/* Phone Screen */}
              <div className="bg-gray-50 rounded-[32px] overflow-hidden h-[600px] relative">
                {/* App Header */}
                <div className="bg-[#007B83] p-6 pb-10 text-white rounded-b-[32px]">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-xs opacity-80">Good Morning,</p>
                      <p className="text-lg font-bold">Sarah Amara</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                      <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80" alt="User" className="h-full w-full object-cover rounded-full" />
                    </div>
                  </div>

                  {/* Vitals Card in App */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm opacity-90">Blood Pressure</span>
                      <HeartPulse size={16} className="text-[#FFC94A]" />
                    </div>
                    <div className="text-3xl font-bold mb-1">120/80</div>
                    <div className="inline-flex items-center gap-1 text-xs bg-[#22C55E]/20 text-[#22C55E] px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                      Normal
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 -mt-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-[#FFC94A]/10 flex items-center justify-center text-[#FFC94A]">
                        <Smartphone size={20} />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        Consult
                      </span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-2 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-[#007B83]/10 flex items-center justify-center text-[#007B83]">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">
                        Meds
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-gray-800 mb-3">
                    Upcoming
                  </p>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-[#FFC94A] flex items-center gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-xs text-gray-500">OCT</div>
                      <div className="text-lg font-bold text-[#1E2A38]">12</div>
                    </div>
                    <div>
                      <div className="font-semibold text-[#1E2A38]">
                        Dr. Omondi
                      </div>
                      <div className="text-xs text-gray-500">
                        Cardiologist • 10:00 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements around Phone */}
            <motion.div animate={{
            y: [0, -15, 0]
          }} transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'easeInOut',
            delay: 1
          }} className="absolute top-1/3 -right-4 lg:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-[#22C55E]/10 p-2 rounded-full text-[#22C55E]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1E2A38]">
                    Insurance Verified
                  </p>
                  <p className="text-xs text-gray-500">Coverage Active</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 65C96 70 192 80 288 81.7C384 83.3 480 76.7 576 65C672 53.3 768 36.7 864 31.7C960 26.7 1056 33.3 1152 45C1248 56.7 1344 73.3 1392 81.7L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="white" />
        </svg>
      </div>
    </section>;
}