import { motion } from "framer-motion";
import { Activity, Brain, Heart, Wind } from "lucide-react";

const conditions = [
  {
    id: "cardiovascular-health",
    name: "Cardiovascular Health",
    icon: Heart,
    description: "Comprehensive care for heart and circulatory system conditions",
    stats: "31% of global deaths",
    color: "#EF4444",
    features: [
      "Hypertension management and monitoring",
      "Heart failure treatment programs",
      "Coronary artery disease care",
      "Stroke prevention and rehabilitation",
      "Cholesterol management"
    ]
  },
  {
    id: "metabolic-disorders",
    name: "Metabolic Disorders",
    icon: Activity,
    description: "Integrated treatment for metabolic and endocrine conditions",
    stats: "537 million adults living with diabetes",
    color: "#F59E0B",
    features: [
      "Type 1 & Type 2 diabetes management",
      "Obesity counseling and treatment",
      "Thyroid disorder care",
      "Metabolic syndrome intervention",
      "Nutrition and lifestyle programs"
    ]
  },
  {
    id: "respiratory-conditions",
    name: "Respiratory Conditions",
    icon: Wind,
    description: "Expert care for lung and respiratory system disorders",
    stats: "4 million deaths annually from COPD",
    color: "#14B8A6",
    features: [
      "Asthma management programs",
      "COPD treatment and monitoring",
      "Pneumonia care and recovery",
      "Sleep apnea diagnosis and treatment",
      "Pulmonary rehabilitation"
    ]
  },
  {
    id: "mental-neurological-health",
    name: "Mental & Neurological Health",
    icon: Brain,
    description: "Holistic support for brain and mental health conditions",
    stats: "1 in 4 people affected by mental/neurological conditions",
    color: "#8B5CF6",
    features: [
      "Depression and anxiety treatment",
      "Memory and cognitive care",
      "Migraine and headache management",
      "Epilepsy monitoring and support",
      "Parkinson's disease care"
    ]
  }
];

export function Conditions() {
  return (
    <section id="conditions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1E2A38] mb-4">
            Health Conditions We Address
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NuruMed provides comprehensive care for a wide range of chronic and acute health conditions, 
            ensuring accessible and affordable treatment for all.
          </p>
        </motion.div>

        {/* Conditions Grid */}
        <div className="space-y-24">
          {conditions.map((condition, index) => {
            const Icon = condition.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={condition.id}
                id={condition.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Icon & Stats */}
                <div className="lg:w-1/3">
                  <div 
                    className="w-32 h-32 rounded-3xl flex items-center justify-center mb-6 shadow-lg"
                    style={{ backgroundColor: `${condition.color}20` }}
                  >
                    <Icon 
                      size={64} 
                      style={{ color: condition.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div 
                    className="inline-block px-6 py-3 rounded-full text-white font-semibold text-lg shadow-md"
                    style={{ backgroundColor: condition.color }}
                  >
                    {condition.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold text-[#1E2A38] mb-4">
                    {condition.name}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    {condition.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {condition.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <span 
                          className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: condition.color }}
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-[#1E2A38] rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Care for a Different Condition?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Our comprehensive healthcare platform covers many more conditions. 
              Contact us to learn how we can help manage your specific health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#resources"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC94A] text-[#1E2A38] font-semibold rounded-xl hover:bg-[#FFD670] transition-colors"
              >
                Explore Resources
              </a>
              <a
                href="#hero"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#1E2A38] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Conditions;

