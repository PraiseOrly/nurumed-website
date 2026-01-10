import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Stethoscope, Truck, CreditCard, FileText, Bell, Brain, MapPin } from 'lucide-react';
const features = [{
  icon: <Activity className="w-6 h-6" />,
  title: 'Daily Health Tracking',
  description: 'Monitor blood pressure, glucose levels, heart rate, and other vitals from home.'
}, {
  icon: <Brain className="w-6 h-6" />,
  title: 'AI Health Tips',
  description: 'Get personalized health recommendations and insights based on your vitals.'
}, {
  icon: <Stethoscope className="w-6 h-6" />,
  title: 'Doctor Consultations',
  description: 'Connect with specialists via video or chat for consultations without travel.'
}, {
  icon: <Bell className="w-6 h-6" />,
  title: 'Smart Reminders',
  description: 'Never miss a pill or appointment with automated SMS and app notifications.'
}, {
  icon: <MapPin className="w-6 h-6" />,
  title: 'Pharmacy Finder',
  description: 'Locate partner pharmacies near you and check medication availability.'
}, {
  icon: <Truck className="w-6 h-6" />,
  title: 'Medication Delivery',
  description: 'Get prescriptions delivered directly to your doorstep from partner pharmacies.'
}, {
  icon: <CreditCard className="w-6 h-6" />,
  title: 'Insurance Integration',
  description: 'Seamless billing and claims processing with major health insurance providers.'
}, {
  icon: <FileText className="w-6 h-6" />,
  title: 'Digital Health Records',
  description: 'Securely store and share your medical history with any doctor on the platform.'
}];
export function Features() {
  return <section id="features" className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4 font-heading">
            Everything You Need for Better Health
          </h2>
          <p className="text-lg text-gray-600 font-body">
            Our platform is packed with features designed to make chronic care
            management simple, accessible, and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }} whileHover={{
          y: -5,
          boxShadow: '0 10px 30px -10px rgba(0, 123, 131, 0.15)'
        }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#007B83]/10 text-[#007B83] flex items-center justify-center mb-4 group-hover:bg-[#007B83] group-hover:text-white transition-colors duration-300 relative overflow-hidden">
                <motion.div className="absolute inset-0 bg-[#FFC94A]/20" initial={{
              x: '-100%'
            }} whileHover={{
              x: '100%'
            }} transition={{
              duration: 0.5
            }} />
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1E2A38] mb-2 font-heading">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}