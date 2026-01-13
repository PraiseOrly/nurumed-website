import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Activity, Crosshair } from "lucide-react";
import { Button } from "./ui/Button";

const problems = [
  {
    title: "Fragmented Care Systems",
    description:
      "Patients often see multiple unconnected doctors with no unified medical record, leading to poor follow-up and delayed interventions.",
    icon: <AlertTriangle size={28} />,
    bg: "bg-[#FFC94A]/10",
    color: "text-[#FFC94A]",
  },
  {
    title: "Limited Access to Specialists",
    description:
      "In rural areas, chronic disease patients face long travel times, high costs, and few qualified specialists for continuous management.",
    icon: <Crosshair size={28} />,
    bg: "bg-[#007B83]/10",
    color: "text-[#007B83]",
  },
  {
    title: "Rising Complications & Deaths",
    description:
      "Unmanaged hypertension and diabetes silently drive Africa’s rising heart disease and stroke burden — preventable with coordinated care.",
    icon: <Activity size={28} />,
    bg: "bg-[#DC2626]/10",
    color: "text-[#DC2626]",
  },
];

        
export default function Problem() {
  return (
    <section
      id="problem"
      className="relative py-28 bg-gradient-to-b from-[#F9FAFB] to-white overflow-hidden"
    >
      {/* Soft glow overlay from Hero transition */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#1E2A38]/40 to-transparent z-0" />

      {/* Background animated pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#FFC94A]/10 border border-[#FFC94A]/30 text-[#1E2A38] font-semibold text-sm">
            Africa’s Hidden Health Crisis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6 leading-tight">
            Chronic Diseases Are Africa’s Silent Epidemic
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Across Africa, millions live with hypertension and diabetes — yet
            fewer than one in five receive consistent treatment. Fragmented
            systems leave patients in the dark.
          </p>
        </motion.div>

        {/* Featured Stat Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-[#FFC94A]/30 rounded-3xl shadow-xl p-10 mb-20 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC2626] via-[#FFC94A] to-[#007B83]" />
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex items-start gap-6">
              <div className="bg-[#DC2626]/10 p-4 rounded-2xl">
                <TrendingDown className="text-[#DC2626]" size={40} />
              </div>
              <div>
                <p className="text-[#1E2A38] font-bold text-2xl leading-snug">
                  40% of African adults live with hypertension.
                </p>
                <p className="text-gray-600 text-lg mt-2">
                  Yet fewer than 20% receive regular, coordinated care.
                </p>
              </div>
            </div>
            <div className="hidden md:block border-l border-gray-200 pl-10">
              <p className="text-gray-600">
                This silent crisis drives preventable strokes, heart failure,
                and kidney disease — devastating families and communities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 25px 50px -12px rgba(31, 41, 55, 0.1)",
              }}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E2A38] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 bg-gradient-to-r from-[#007B83] via-[#0D9488] to-[#1E2A38] p-10 md:p-12 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Floating lights */}
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 left-0 w-64 h-64 bg-[#FFC94A]/20 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"
          />
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1.1, 0.9, 1.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-80 h-80 bg-[#DC2626]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
          />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              NuruMed is here to change that.
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Empowering patients, doctors, and health systems with connected,
              data-driven care — because no one should face chronic illness
              alone.
            </p>
            <Button
              size="lg"
              className="bg-[#FFC94A] text-[#1E2A38] hover:bg-[#FFC94A]/90 font-bold"
            >
              See How NuruMed Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
