import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Clock, Eye, Heart, Target, TrendingDown, Wallet, Zap } from 'lucide-react';
import Hero from './Hero';
import { Button } from './ui/Button';

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

// Problem section data
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

// Solution section benefits
const benefits = [
  'Unified health records accessible anywhere',
  'Direct connection to specialists & pharmacies',
  'Automated insurance processing',
  'Real-time vitals monitoring & alerts'
];

// Impact section stats
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

// Counter component for animated numbers
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

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Content Section */}
      <section id="about" className="bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 max-w-6xl">
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

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-white relative">
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
            {problems.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{
                  opacity: 0,
                  y: 30
                }} 
                whileInView={{
                  opacity: 1,
                  y: 0
                }} 
                viewport={{
                  once: true
                }} 
                transition={{
                  delay: index * 0.1 + 0.3
                }} 
                whileHover={{
                  y: -5
                }} 
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1E2A38] mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-[#0D9488] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{
                opacity: 0,
                x: -30
              }} 
              whileInView={{
                opacity: 1,
                x: 0
              }} 
              viewport={{
                once: true
              }} 
              transition={{
                duration: 0.6
              }}
            >
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
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    initial={{
                      opacity: 0,
                      x: -20
                    }} 
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }} 
                    viewport={{
                      once: true
                    }} 
                    transition={{
                      delay: index * 0.1
                    }} 
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-[#F4D03F] flex-shrink-0" size={24} />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Button variant="secondary" size="lg" className="text-gray-900 font-bold">
                Learn How It Works
              </Button>
            </motion.div>

            <motion.div 
              initial={{
                opacity: 0,
                scale: 0.9
              }} 
              whileInView={{
                opacity: 1,
                scale: 1
              }} 
              viewport={{
                once: true
              }} 
              transition={{
                duration: 0.6
              }} 
              className="relative"
            >
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
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-[#007B83] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{
                opacity: 0,
                y: 20
              }} 
              whileInView={{
                opacity: 1,
                y: 0
              }} 
              viewport={{
                once: true
              }} 
              className="text-3xl md:text-4xl font-bold mb-4 font-heading"
            >
              Health Equity Powered by Technology
            </motion.h2>
            <motion.p 
              initial={{
                opacity: 0,
                y: 20
              }} 
              whileInView={{
                opacity: 1,
                y: 0
              }} 
              viewport={{
                once: true
              }} 
              transition={{
                delay: 0.1
              }} 
              className="text-teal-100 text-lg max-w-2xl mx-auto font-body"
            >
              Real impact, measurable results. See how NuruMed is transforming
              chronic care across Africa.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{
                  opacity: 0,
                  scale: 0.8
                }} 
                whileInView={{
                  opacity: 1,
                  scale: 1
                }} 
                viewport={{
                  once: true
                }} 
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }} 
                className="p-4"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#FFC94A] font-heading drop-shadow-md">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-teal-100 font-medium font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

