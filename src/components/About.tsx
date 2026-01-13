import { Eye, Heart, Target, Zap } from 'lucide-react';
import Hero from './Hero';
import Problem from './Problem.tsx';
import Solution from './Solution';

// About content items
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
    <>
      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <Problem />

      {/* Solution Section */}
      <Solution />      
    </>
  );
}

