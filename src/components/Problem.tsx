import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Wallet, Clock, TrendingDown } from 'lucide-react';
const problems = [{
  icon: <AlertCircle className="w-8 h-8" />,
  title: 'Fragmented Care',
  description: 'Patients struggle to coordinate between doctors, pharmacies, and labs, leading to gaps in treatment.',
  color: 'text-[#DC2626]',
  bg: 'bg-[#DC2626]/10'
}, {
  icon: <Wallet className="w-8 h-8" />,
  title: 'Financial Barriers',
  description: 'High out-of-pocket costs and lack of transparent pricing make consistent care unaffordable for many.',
  color: 'text-[#FFC94A]',
  bg: 'bg-[#FFC94A]/10'
}, {
  icon: <Clock className="w-8 h-8" />,
  title: 'Limited Access',
  description: 'Long wait times and distance to specialists prevent timely interventions for chronic conditions.',
  color: 'text-[#007B83]',
  bg: 'bg-[#007B83]/10'
}];
export function Problem() {
  return <section id="problem" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4 font-heading">
            Chronic Diseases Are Africa's Silent Epidemic
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-lg text-gray-600 mb-8 font-body">
            Managing chronic conditions in Africa has been difficult, expensive,
            and disjointed. Millions suffer from preventable complications.
          </motion.p>

          {/* Key Statistics Callout */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="bg-white border border-[#FFC94A]/30 p-8 rounded-2xl text-left mb-12 shadow-xl shadow-[#FFC94A]/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#FFC94A]"></div>
            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-[#DC2626]/10 p-3 rounded-full">
                <TrendingDown className="text-[#DC2626]" size={32} />
              </div>
              <div>
                <p className="text-[#1E2A38] font-bold text-xl mb-2 font-heading">
                  Over 40% of adults in Africa have high blood pressure
                </p>
                <p className="text-gray-600 font-body">
                  But less than 1 in 5 are receiving continuous care. This gap
                  leads to preventable heart attacks, strokes, and kidney
                  failure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1 + 0.3
        }} whileHover={{
          y: -5
        }} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E2A38] mb-3 font-heading">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {item.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}