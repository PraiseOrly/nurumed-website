import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

// Floating particle component
interface ParticleProps {
  delay: number;
  duration: number;
  x: number;
  y: number;
  size: number;
}

const Particle: React.FC<ParticleProps> = ({ delay, duration, x, y, size }) => (
  <motion.div
    className="absolute rounded-full bg-[#FFC94A]/30 blur-sm"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`
    }}
    animate={{
      y: [0, -100, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1.2, 0.5]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: 'easeInOut'
    }}
  />
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#1E2A38] via-[#007B83] to-[#1E2A38]">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

      {/* Floating Light Particles */}
      {[...Array(15)].map((_, i) => (
        <Particle
          key={i}
          delay={Math.random() * 5}
          duration={5 + Math.random() * 5}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={4 + Math.random() * 8}
        />
      ))}

      {/* Large Glow Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#FFC94A]/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#007B83]/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-20 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC94A]/10 text-[#FFC94A] text-sm font-semibold mb-6 border border-[#FFC94A]/20 backdrop-blur-sm"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Revolutionizing Chronic Care in Africa</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.25] tracking-tight text-white mb-6">
              Bringing{' '}
              <span className="text-[#FFC94A] inline-block relative">
                Light
                <motion.span
                  className="absolute inset-0 bg-[#FFC94A]/20 blur-lg"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>{' '}
              to <br />
              Chronic Care in Africa
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 mt-4 mb-8 leading-[1.5] font-medium">
              NuruMed connects patients, doctors, insurers, and pharmacies to
              make managing chronic diseases simple, continuous, and filled with
              hope.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="sm" className="border-[#FFC94A] text-[#FFC94A] hover:bg-[#FFC94A] hover:text-[#1E2A38]">
                Download App
              </Button>
              <Button  variant="primary" size="sm" rightIcon={<ArrowRight size={18} />} className="hover:shadow-none hover:text-[#1E2A38] active:hover:bg-[#FFC94A] active:shadow-none text-black">
                Partner with Us
              </Button>
            </div>
          </motion.div>

{/* Visual Content - Dual Crossing Phone Mockups */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
  className="relative h-[400px] max-w-3xl mx-auto flex items-center justify-between px-4 lg:px-8"
>
  {/* First Phone - Left/Back */}
  <motion.div
    animate={{
      y: [-8, 8, -8],
      rotate: [-4, -2, -4]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }}
    className="bg-white rounded-[32px] shadow-2xl border-8 border-black p-1.5 w-48 overflow-hidden"
  >
    {/* Phone Screen 1 */}
    <div className="bg-gray-50 rounded-[26px] overflow-hidden h-[380px] relative">
      {/* App Header */}
      <div className="bg-[#007B83] p-6 pb-10 text-white rounded-b-[32px]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm opacity-80">Good Morning,</p>
            <p className="text-lg font-bold">Sarah Amara</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80"
              alt="User"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Vitals Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm opacity-90">Blood Pressure</span>
            <HeartPulse size={16} className="text-[#FFC94A]" />
          </div>
          <div className="text-3xl font-bold mb-2">120/80</div>
          <div className="inline-flex items-center gap-1.5 text-sm bg-[#22C55E]/20 text-[#22C55E] px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
            Normal
          </div>
        </div>
      </div>

      {/* App Content */}
      <div className="p-6 -mt-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFC94A]/10 flex items-center justify-center text-[#FFC94A]">
              <Smartphone size={20} />
            </div>
            <span className="text-base font-semibold text-gray-800">Consult</span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#007B83]/10 flex items-center justify-center text-[#007B83]">
              <ShieldCheck size={20} />
            </div>
            <span className="text-base font-semibold text-gray-800">Meds</span>
          </div>
        </div>

        <p className="text-base font-bold text-gray-800 mb-3">Upcoming</p>
        <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-[#FFC94A] flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm text-gray-500">OCT</div>
            <div className="text-xl font-bold text-[#1E2A38]">12</div>
          </div>
          <div>
            <div className="font-semibold text-base text-[#1E2A38]">Dr. Omondi</div>
            <div className="text-sm text-gray-500">Cardiologist • 10:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Second Phone - Right/Front */}
  <motion.div
    animate={{
      y: [8, -8, 8],
      rotate: [2, 4, 2]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 0.5
    }}
    className="bg-white rounded-[32px] shadow-2xl border-8 border-black p-1.5 w-48 overflow-hidden"
  >
    {/* Phone Screen 2 */}
    <div className="bg-gray-50 rounded-[26px] overflow-hidden h-[380px] relative">
      {/* App Header */}
      <div className="bg-gradient-to-br from-[#FFC94A] to-[#FFB020] p-6 pb-10 text-[#1E2A38] rounded-b-[32px]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm opacity-80">Today's Medication</p>
            <p className="text-lg font-bold">3 of 4 taken</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-white/40 flex items-center justify-center border border-white/60">
            <HeartPulse size={20} className="text-[#1E2A38]" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold">Progress</span>
            <span className="text-sm font-bold">75%</span>
          </div>
          <div className="h-2.5 bg-white/40 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-[#007B83] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Medication List */}
      <div className="p-6 -mt-6 space-y-4">
        {['Lisinopril', 'Metformin', 'Aspirin'].map((med, idx) => (
          <div
            key={idx}
            className={`bg-white p-4 rounded-2xl shadow-sm border ${
              med === 'Aspirin' ? 'border-l-4 border-[#FFC94A]' : 'border-gray-100'
            } flex items-center gap-4`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                med === 'Aspirin' ? 'bg-[#FFC94A]/10 text-[#FFC94A] font-bold' : 'bg-[#22C55E]/10 text-[#22C55E]'
              }`}
            >
              {med === 'Aspirin' ? '!' : '✓'}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg text-[#1E2A38]">{med}</div>
              <div className="text-base text-gray-500">
                {med === 'Lisinopril'
                  ? '10mg • 8:00 AM'
                  : med === 'Metformin'
                  ? '500mg • 12:00 PM'
                  : '81mg • 6:00 PM (Pending)'}
              </div>
            </div>
          </div>
        ))}
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
    </section>
  );
}