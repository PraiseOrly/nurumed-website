import { motion } from 'framer-motion';
import { ArrowRight, Eye, Heart, Target, Zap } from 'lucide-react';
import Hero from './Hero';
import { Button } from './ui/Button';

const contentItems = [
  {
    icon: Heart,
    title: 'Who We Are',
    description: 'NuruMed is a digital health platform revolutionizing chronic care in Africa. We connect patients, doctors, insurers, and pharmacies to make managing chronic diseases simple, continuous, and filled with hope.',
    color: 'bg-[#DC2626]/10',
    iconColor: 'text-[#DC2626]',
    accent: 'border-[#DC2626]/20'
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make continuous, affordable, and connected healthcare accessible to everyone living with chronic conditions across Africa.',
    color: 'bg-[#007B83]/10',
    iconColor: 'text-[#007B83]',
    accent: 'border-[#007B83]/20'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A healthier Africa where no one is left behind in chronic care. We envision a continent where chronic disease management is seamless, affordable, and empowers patients to live their best lives.',
    color: 'bg-[#FFC94A]/10',
    iconColor: 'text-[#FFC94A]',
    accent: 'border-[#FFC94A]/20'
  },
  {
    icon: Zap,
    title: 'Our Approach',
    description: 'We combine AI-driven insights, digital therapeutics, and real-time care coordination to support patients through every stage of their health journey. Technology meets compassionate care.',
    color: 'bg-[#14B8A6]/10',
    iconColor: 'text-[#14B8A6]',
    accent: 'border-[#14B8A6]/20'
  }
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* Hero Section from Hero Component */}
      <Hero />

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 max-w-6xl">
        {/* Content Items */}
        {contentItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-start gap-5">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 rounded-xl ${item.color} ${item.iconColor} flex items-center justify-center flex-shrink-0`}
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-6">{item.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}

       
      </div>
    </section>
  );
}

