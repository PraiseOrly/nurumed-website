import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
export function Solution() {
  const benefits = ['Unified health records accessible anywhere', 'Direct connection to specialists & pharmacies', 'Automated insurance processing', 'Real-time vitals monitoring & alerts'];
  return <section id="solution" className="py-20 bg-[#0D9488] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#F4D03F] font-semibold text-sm mb-6 border border-white/10">
              The NuruMed Solution
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              A Complete Ecosystem for{' '}
              <span className="text-[#F4D03F]">Better Health</span>
            </h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              We don't just treat symptoms; we manage health. NuruMed connects
              the entire care continuum—patients, doctors, pharmacies, and
              insurers—into one seamless platform designed for the African
              context.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#F4D03F] flex-shrink-0" size={24} />
                  <span className="text-lg">{benefit}</span>
                </motion.li>)}
            </ul>

            <Button variant="secondary" size="lg" className="text-gray-900 font-bold">
              Learn How It Works
            </Button>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
            {/* Abstract representation of connection */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-white/5 rounded-full animate-pulse" />
              <div className="absolute inset-8 bg-white/10 rounded-full" />
              <div className="absolute inset-16 bg-white/20 rounded-full" />

              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-full shadow-2xl z-20">
                  <div className="text-[#0D9488] font-bold text-xl">
                    NuruMed
                  </div>
                </div>
              </div>

              {/* Satellites */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F4D03F] p-4 rounded-xl shadow-lg z-10 w-32 text-center">
                <p className="text-gray-900 font-bold text-sm">Doctors</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-xl shadow-lg z-10 w-32 text-center">
                <p className="text-gray-900 font-bold text-sm">Patients</p>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg z-10 w-32 text-center">
                <p className="text-gray-900 font-bold text-sm">Pharmacies</p>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg z-10 w-32 text-center">
                <p className="text-gray-900 font-bold text-sm">Insurers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}