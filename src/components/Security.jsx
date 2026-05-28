import React from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, AlertCircle, CheckCircle } from 'lucide-react'

export default function Security() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "256-bit Encryption",
      description: "Bank-grade encryption protects all your data in transit and at rest.",
    },
    {
      icon: AlertCircle,
      title: "Fraud Detection",
      description: "Real-time monitoring with AI-powered fraud detection systems.",
    },
    {
      icon: Eye,
      title: "Two-Factor Authentication",
      description: "Multi-layer security with biometric and 2FA options.",
    },
    {
      icon: CheckCircle,
      title: "PCI DSS Certified",
      description: "Full compliance with international security standards.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="security" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background animated security icons */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
            }}
            className="absolute text-accent"
            style={{
              left: `${i * 20}%`,
              top: `${i * 15}%`,
            }}
          >
            <Lock size={100} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Security First
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your financial security is our top priority. We implement industry-leading security protocols at every step.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {securityFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="glass rounded-2xl p-8 border border-gray-700 hover:border-accent/50 group transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-all flex-shrink-0">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Security Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl p-12 border border-accent/20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Compliance & Certifications</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {["ISO 27001", "SOC 2 Type II", "GDPR Ready", "RBI Compliant"].map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 border border-gray-700 rounded-xl hover:border-accent/50 transition-all"
              >
                <p className="font-semibold text-lg text-accent">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            Every transaction is protected by state-of-the-art security measures. We continuously monitor and update our systems to stay ahead of emerging threats. Your trust is our most valuable asset.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-8"
          >
            <button className="btn-premium px-8 py-4 text-lg">
              Learn About Our Security
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
