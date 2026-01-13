import { motion } from "framer-motion";
import { Activity, Bell, Brain, GraduationCap, Heart, Wind } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const conditions = [
  {
    id: "cardiovascular-health",
    name: "Cardiovascular Health",
    icon: Heart,
    color: "#EF4444",
    description: "Comprehensive care for your heart health with continuous monitoring and personalized treatment plans.",
    subConditions: ["Hypertension", "Heart Failure", "Arrhythmia"]
  },
  {
    id: "metabolic-disorders",
    name: "Metabolic Disorders",
    icon: Activity,
    color: "#F59E0B",
    description: "Manage your metabolic health with AI-powered insights and evidence-based interventions.",
    subConditions: ["Type 2 Diabetes", "Obesity", "Metabolic Syndrome"]
  },
  {
    id: "respiratory-conditions",
    name: "Respiratory Conditions",
    icon: Wind,
    color: "#14B8A6",
    description: "Breathing easier with smart monitoring and proactive respiratory care management.",
    subConditions: ["Asthma", "COPD"]
  },
  {
    id: "mental-neurological-health",
    name: "Mental & Neurological Health",
    icon: Brain,
    color: "#8B5CF6",
    description: "Supporting your mental wellbeing and cognitive health with personalized therapeutic approaches.",
    subConditions: ["Depression", "Stress Management", "Sleep Disorders"]
  }
];

const features = [
  {
    icon: GraduationCap,
    title: "AI-powered education modules",
    description: "Personalized learning content to help you understand your condition"
  },
  {
    icon: Bell,
    title: "Evidence-based treatment reminders",
    description: "Smart notifications for medications and appointments"
  },
  {
    icon: Activity,
    title: "Remote monitoring tools",
    description: "Track your vitals and symptoms from home"
  }
];

export function Conditions() {
  const location = useLocation();
  const hash = location.hash.slice(1);

  // Filter conditions based on hash - show specific condition or all
  const displayedConditions = hash
    ? conditions.filter(c => c.id === hash)
    : conditions;

  useEffect(() => {
    // If there's a hash in the URL, scroll to that section
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Only show when viewing all conditions */}
      {!hash && (
        <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6">
                Supported Conditions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                NuruMed helps manage a wide range of chronic and preventive conditions with personalized care and AI-powered insights.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Single Condition Hero - Shown when accessing specific condition */}
      {hash && (
        <section className="pt-32 pb-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Link to="/conditions" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                View All Conditions
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6">
                {conditions.find(c => c.id === hash)?.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {conditions.find(c => c.id === hash)?.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Conditions as Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24 mb-24">
            {displayedConditions.map((condition, index) => {
              const Icon = condition.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={condition.id}
                  id={condition.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Side */}
                  <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="w-48 h-48 md:w-64 md:h-64 rounded-3xl flex items-center justify-center shadow-2xl shadow-gray-200"
                      style={{ backgroundColor: `${condition.color}15` }}
                    >
                      <Icon
                        size={120}
                        style={{ color: condition.color }}
                        strokeWidth={1}
                      />
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">
                      {condition.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {condition.description}
                    </p>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        Includes support for:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {condition.subConditions.map((sub, subIndex) => (
                          <li
                            key={subIndex}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <span
                              className="w-3 h-3 rounded-full flex-shrink-0"
                              style={{ backgroundColor: condition.color }}
                            />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Features Section - Only show when viewing all conditions */}
          {!hash && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-12"
            >
              <h3 className="text-2xl font-bold text-[#1E2A38] text-center mb-8">
                Each condition includes:
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#14B8A20d] flex items-center justify-center">
                        <Icon
                          size={32}
                          className="text-[#14B8A6]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-[#1E2A38] mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="#resources"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC94A] text-[#1E2A38] font-semibold rounded-xl hover:bg-[#FFD670] transition-colors"
            >
              Explore Resources
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Conditions;

