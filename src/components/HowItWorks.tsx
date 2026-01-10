import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, UserCheck, Pill, TrendingUp } from 'lucide-react';
const steps = [{
  icon: <UserPlus className="w-6 h-6" />,
  title: 'Sign Up',
  description: 'Create your profile easily through our mobile app or WhatsApp platform.'
}, {
  icon: <UserCheck className="w-6 h-6" />,
  title: 'Connect',
  description: 'Match with a specialist doctor for your specific condition.'
}, {
  icon: <Pill className="w-6 h-6" />,
  title: 'Get Care',
  description: 'Receive prescriptions and get medication delivered to you.'
}, {
  icon: <TrendingUp className="w-6 h-6" />,
  title: 'Track',
  description: 'Monitor your progress and adjust treatment as needed.'
}];
export function HowItWorks() {
  return <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4 font-heading">
            How NuruMed Works
          </h2>
          <p className="text-lg text-gray-600 font-body">
            Your journey to better health in four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0">
            <motion.div className="h-full bg-[#FFC94A]" initial={{
            width: '0%'
          }} whileInView={{
            width: '100%'
          }} transition={{
            duration: 1.5,
            ease: 'easeInOut'
          }} viewport={{
            once: true
          }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="flex flex-col items-center text-center bg-white p-4">
                <motion.div whileHover={{
              scale: 1.1,
              rotate: 5
            }} className="w-20 h-20 rounded-full bg-[#FFC94A] text-[#1E2A38] flex items-center justify-center mb-6 shadow-xl shadow-[#FFC94A]/20 border-4 border-white relative z-10">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#007B83] text-white text-sm font-bold flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-2 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm font-body">
                  {step.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C240 80 480 80 720 40C960 0 1200 0 1440 40V80H0V40Z" fill="#007B83" />
        </svg>
      </div>
    </section>;
}