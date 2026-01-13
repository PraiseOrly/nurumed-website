import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

// Ambient glow orb component
const AmbientOrb = ({ delay, duration, x, y, size, color, blur }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: `blur(${blur}px)`,
      transform: 'translate(-50%, -50%)'
    }}
    animate={{
      opacity: [0.3, 0.6, 0.3],
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: 'easeInOut'
    }}
  />
);

// Floating light streak component
const LightStreak = ({ delay, duration, x, y, width, height, color }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: width,
      height: height,
      left: `${x}%`,
      top: `${y}%`,
      background: `linear-gradient(90deg, ${color}, transparent)`,
      filter: 'blur(4px)',
      transform: 'rotate(-15deg)'
    }}
    animate={{
      x: [0, 100, 0],
      opacity: [0, 0.5, 0],
      scaleX: [0.5, 1.5, 0.5]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: 'easeInOut'
    }}
  />
);

// Subtle dot pattern component
const DotPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dot-pattern)" />
  </svg>
);

// Mesh gradient overlay component
const MeshGradient = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute w-[800px] h-[800px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(0,123,131,0.2) 0%, transparent 60%)',
        top: '10%',
        left: '10%'
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 30, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 60%)',
        top: '30%',
        right: '10%'
      }}
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, -20, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
    <motion.div
      className="absolute w-[700px] h-[700px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(0,100,120,0.12) 0%, transparent 60%)',
        bottom: '10%',
        left: '30%'
      }}
      animate={{
        scale: [1.1, 1, 1.1],
        rotate: [0, 15, 0]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
    />
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#0a1a1d] via-[#0d2628] to-[#0a1a1d]">
      {/* Mesh Gradient Background */}
      <MeshGradient />
      
      {/* Dot Pattern Overlay */}
      <DotPattern />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>

      {/* Ambient Floating Orbs */}
      {[...Array(8)].map((_, i) => (
        <AmbientOrb
          key={`orb-${i}`}
          delay={Math.random() * 10}
          duration={12 + Math.random() * 8}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={100 + Math.random() * 200}
          color={i % 3 === 0 ? 'rgba(0,123,131,0.4)' : i % 3 === 1 ? 'rgba(20,184,166,0.35)' : 'rgba(0,100,120,0.3)'}
          blur={40 + Math.random() * 40}
        />
      ))}
      
      {/* Light Streaks */}
      {[...Array(5)].map((_, i) => (
        <LightStreak
          key={`streak-${i}`}
          delay={Math.random() * 8}
          duration={8 + Math.random() * 4}
          x={-10 + Math.random() * 30}
          y={Math.random() * 100}
          width={150 + Math.random() * 200}
          height={2 + Math.random() * 3}
          color={i % 2 === 0 ? 'rgba(0,123,131,0.3)' : 'rgba(20,184,166,0.25)'}
        />
      ))}

      {/* Large Glow Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#007B83]/15 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#14B8A6]/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-20 relative z-10 max-w-6xl">
        {/* Backdrop glow for text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#007B83]/5 rounded-full blur-[80px] -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl -mt-32 -ml-16 relative"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC94A]/10 text-[#FFC94A] text-sm font-medium mb-8 border border-[#FFC94A]/20 backdrop-blur-md"
              style={{ fontFamily: '__LocalPoppinsFont_1100c3, __LocalPoppinsFont_Fallback_1100c3, Poppins, sans-serif' }}
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Revolutionizing Chronic Care in Africa</span>
            </motion.div>

            <h1 style={{ fontFamily: '__LocalPoppinsFont_1100c3, __LocalPoppinsFont_Fallback_1100c3, Poppins, sans-serif' }} className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] tracking-tight text-white mb-8">
              Bringing{' '}
              <span className="text-[#FFC94A] relative inline-block">
                Light
                <motion.span
                  className="absolute inset-0 bg-[#FFC94A]/20 blur-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>{' '}
              to <br />
              Chronic Care in Africa
            </h1>

            <p style={{ fontFamily: '__LocalPoppinsFont_1100c3, __LocalPoppinsFont_Fallback_1100c3, Poppins, sans-serif' }} className="text-lg md:text-xl text-gray-400 mt-4 mb-10 leading-[1.6] font-light max-w-lg">
              NuruMed connects patients, doctors, insurers, and pharmacies to
              make managing chronic diseases simple, continuous, and filled with
              hope.
            </p>

            {/* Premium buttons */}
            <div className="flex flex-col sm:flex-row gap-4" style={{ fontFamily: '__LocalPoppinsFont_1100c3, __LocalPoppinsFont_Fallback_1100c3, Poppins, sans-serif' }}>
              <Button variant="outline" size="sm" className="border-[#FFC94A]/40 text-[#FFC94A] hover:bg-[#FFC94A] hover:text-[#0D1821] px-6 transition-all duration-300">
                Download App
              </Button>
              <Button  variant="primary" size="sm" rightIcon={<ArrowRight size={18} />} className="bg-[#FFC94A] text-[#0D1821] hover:bg-[#FFD670] px-6 transition-all duration-300 shadow-lg shadow-[#FFC94A]/20">
                Partner with Us
              </Button>
            </div>
          </motion.div>

{/* Visual Content - Premium Phone Mockups */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
  className="relative h-[450px] max-w-3xl mx-auto flex items-center justify-center px-4 lg:px-8"
>
  {/* Backdrop glow for phones */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#007B83]/10 via-[#0d2628]/5 to-[#14B8A6]/10 rounded-full blur-[60px] -z-10" />
  
  {/* First Phone - Left/Back */}
  <motion.div
    animate={{
      y: [-10, 10, -10],
      rotate: [-5, -3, -5]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut'
    }}
    className="bg-white/95 backdrop-blur-xl rounded-[36px] shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(0,123,131,0.2)] border border-white/20 p-1.5 w-52 overflow-hidden mr-[-20px] z-10"
  >
    {/* Phone Screen 1 */}
    <div className="bg-white rounded-[30px] overflow-hidden h-[420px] relative">
      {/* App Header */}
      <div className="bg-[#007B83] p-5 pb-10 text-white rounded-b-[28px]">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-xs opacity-80">Good Morning,</p>
            <p className="text-lg font-medium">Sarah Amara</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80"
              alt="User"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Vitals Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5">
          <div className="flex justify-between items-start mb-1.5">
            <span className="text-xs opacity-90">Blood Pressure</span>
            <HeartPulse size={14} className="text-[#FFC94A]" />
          </div>
          <div className="text-2xl font-semibold">120/80</div>
          <div className="inline-flex items-center gap-1.5 text-xs bg-[#22C55E]/20 text-[#22C55E] px-2.5 py-1 rounded-full mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
            Normal
          </div>
        </div>
      </div>

      {/* App Content */}
      <div className="p-5 -mt-5">
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 flex flex-col items-center text-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#FFC94A]/10 flex items-center justify-center text-[#FFC94A]">
              <Smartphone size={18} />
            </div>
            <span className="text-sm font-medium text-gray-700">Consult</span>
          </div>
          <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 flex flex-col items-center text-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#007B83]/10 flex items-center justify-center text-[#007B83]">
              <ShieldCheck size={18} />
            </div>
            <span className="text-sm font-medium text-gray-700">Meds</span>
          </div>
        </div>

        <p className="text-sm font-semibold text-gray-800 mb-2.5">Upcoming</p>
        <div className="bg-gray-50 p-3.5 rounded-xl border-l-3 border-[#FFC94A] flex items-center gap-3">
          <div className="text-center min-w-[40px]">
            <div className="text-xs text-gray-400">OCT</div>
            <div className="text-lg font-semibold text-[#1E2A38]">12</div>
          </div>
          <div>
            <div className="font-medium text-sm text-[#1E2A38]">Dr. Omondi</div>
            <div className="text-xs text-gray-400">Cardiologist • 10:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Second Phone - Right/Front */}
  <motion.div
    animate={{
      y: [10, -10, 10],
      rotate: [3, 5, 3]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 0.5
    }}
    className="bg-white/95 backdrop-blur-xl rounded-[36px] shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_60px_rgba(0,123,131,0.2)] border border-white/20 p-1.5 w-52 overflow-hidden z-20"
  >
    {/* Phone Screen 2 */}
    <div className="bg-white rounded-[30px] overflow-hidden h-[420px] relative">
      {/* App Header */}
      <div className="bg-gradient-to-br from-[#FFC94A] to-[#FFB020] p-5 pb-10 text-[#0D1821] rounded-b-[28px]">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-xs opacity-80">Today's Medication</p>
            <p className="text-lg font-medium">3 of 4 taken</p>
          </div>
          <div className="h-9 w-9 rounded-full bg-white/40 flex items-center justify-center border border-white/60">
            <HeartPulse size={18} className="text-[#0D1821]" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-3.5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium">Progress</span>
            <span className="text-xs font-bold">75%</span>
          </div>
          <div className="h-2 bg-white/40 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-[#007B83] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Medication List */}
      <div className="p-5 -mt-5 space-y-3">
        {['Lisinopril', 'Metformin', 'Aspirin'].map((med, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded-xl border ${
              med === 'Aspirin' ? 'bg-[#FFC94A]/5 border-l-3 border-[#FFC94A]' : 'bg-gray-50 border-gray-100'
            } flex items-center gap-3`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                med === 'Aspirin' ? 'bg-[#FFC94A]/10 text-[#FFC94A]' : 'bg-[#22C55E]/10 text-[#22C55E]'
              }`}
            >
              {med === 'Aspirin' ? '!' : '✓'}
            </div>
            <div className="flex-1">
              <div className="font-medium text-base text-[#1E2A38]">{med}</div>
              <div className="text-xs text-gray-400">
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