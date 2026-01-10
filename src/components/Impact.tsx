import React from 'react';
import { motion } from 'framer-motion';
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
const Counter = ({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) => {
  return <motion.span initial={{
    opacity: 0
  }} whileInView={{
    opacity: 1
  }} viewport={{
    once: true
  }} className="inline-block">
      <motion.span initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 2
    }}>
        {value}
      </motion.span>
      {suffix}
    </motion.span>;
};
export function Impact() {
  return <section id="impact" className="py-24 bg-[#007B83] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Health Equity Powered by Technology
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
        }} className="text-teal-100 text-lg max-w-2xl mx-auto font-body">
            Real impact, measurable results. See how NuruMed is transforming
            chronic care across Africa.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          type: 'spring',
          stiffness: 100
        }} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-[#FFC94A] font-heading drop-shadow-md">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-teal-100 font-medium font-body">
                {stat.label}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}