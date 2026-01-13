import { motion } from "framer-motion";
import { Activity, AlertTriangle, ShieldOff } from "lucide-react";

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative pt-24 pb-32 bg-white overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#FFC94A]/10 rounded-full blur-[100px] animate-pulse -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#007B83]/20 rounded-full blur-[100px] -z-10" />

      {/* Noise Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light opacity-20 pointer-events-none"
      />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-heading font-extrabold text-center text-[#1E2A38] mb-8"
        >
          <span className="text-[#FFC94A] inline-block relative">The Problem</span>
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-heading font-bold text-[#1E2A38] text-center mb-10"
        >
          Chronic Diseases Are Africa's Silent Epidemic
        </motion.h3>

        {/* Intro Paragraph */}
        <p className="max-w-3xl mx-auto text-center text-base md:text-lg lg:text-xl font-body font-medium text-gray-700 mb-12 leading-relaxed">
          Managing chronic conditions in Africa has been difficult, expensive, and fragmented. 
          Millions suffer preventable complications every year.
        </p>

        {/* Stats */}
        <div className="text-center space-y-4 mb-16 font-body font-semibold">
          <p className="text-2xl md:text-3xl text-[#1E2A38]">
            Over <span className="text-[#DC2626] font-bold">40%</span> of adults in Africa have high blood pressure.
          </p>
          <p className="text-2xl md:text-3xl text-[#1E2A38]">
            Fewer than{" "}
            <span className="text-[#007B83] font-bold">1 in 5</span> receive continuous care.
          </p>
          <p className="text-2xl md:text-3xl text-[#1E2A38]">
            Leading to preventable heart attacks, strokes, and kidney failure.
          </p>
        </div>

        {/* Barriers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h4 className="text-2xl font-heading font-bold text-[#1E2A38] text-center mb-12">
            Key Barriers
          </h4>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Barrier 1 - Fragmented Care */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Prominent Illustration */}
              <div className="w-full h-64 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] flex items-center justify-center p-4">
                <img
                  src="/illustrations/fragmented-care.svg"
                  alt="Fragmented Care Illustration"
                  className="w-full h-full object-contain max-h-56"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="text-[#FFC94A]" size={28} />
                  <h5 className="text-xl font-heading font-bold text-[#1E2A38]">
                    Fragmented Care
                  </h5>
                </div>
                <p className="text-gray-600 font-body leading-relaxed">
                  No link between doctors, pharmacies, and labs. Healthcare providers work in silos, creating gaps in patient care.
                </p>
              </div>
              
              {/* Gradient Accent Border */}
              <div className="h-[4px] w-full bg-gradient-to-r from-[#1E2A38] via-[#007B83] to-[#1E2A38]" />
            </motion.div>

            {/* Barrier 2 - Financial Barriers */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Prominent Illustration */}
              <div className="w-full h-64 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] flex items-center justify-center p-4">
                <img
                  src="/illustrations/financial-barriers.svg"
                  alt="Financial Barriers Illustration"
                  className="w-full h-full object-contain max-h-56"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldOff className="text-[#DC2626]" size={28} />
                  <h5 className="text-xl font-heading font-bold text-[#1E2A38]">
                    Financial Barriers
                  </h5>
                </div>
                <p className="text-gray-600 font-body leading-relaxed">
                  High out-of-pocket costs and limited insurance coverage prevent millions from accessing essential medications and treatments.
                </p>
              </div>
              
              <div className="h-[4px] w-full bg-gradient-to-r from-[#1E2A38] via-[#007B83] to-[#1E2A38]" />
            </motion.div>

            {/* Barrier 3 - Limited Access */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Prominent Illustration */}
              <div className="w-full h-64 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] flex items-center justify-center p-4">
                <img
                  src="/illustrations/limited-access.svg"
                  alt="Limited Access Illustration"
                  className="w-full h-full object-contain max-h-56"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="text-[#007B83]" size={28} />
                  <h5 className="text-xl font-heading font-bold text-[#1E2A38]">
                    Limited Access
                  </h5>
                </div>
                <p className="text-gray-600 font-body leading-relaxed">
                  Long wait times, travel distances, and lack of specialists in rural and underserved areas create significant barriers to care.
                </p>
              </div>
              
              <div className="h-[4px] w-full bg-gradient-to-r from-[#1E2A38] via-[#007B83] to-[#1E2A38]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#1E2A38]">
            We're <span className="text-[#FFC94A] relative">changing</span> that.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}

