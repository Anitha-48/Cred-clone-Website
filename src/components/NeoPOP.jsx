import React from 'react'
import { motion } from 'framer-motion'

export default function NeoPOP() {
  const buttons = [
    { label: "Premium", color: "from-blue-600 to-cyan-500" },
    { label: "Exclusive", color: "from-purple-600 to-pink-500" },
    { label: "Elite", color: "from-orange-600 to-yellow-500" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            NeoPOP Design System
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Bold, modern interactions. Premium aesthetics. Smooth transitions.
          </p>
        </motion.div>

        {/* Glassmorphism cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ boxShadow: "0 0 40px rgba(0, 212, 255, 0.3)" }}
            className="glass rounded-3xl p-12 border-2 border-accent/30 hover:border-accent transition-all cursor-pointer group"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">Glassmorphism</h3>
              <p className="text-gray-300">
                Beautiful blur effects with semi-transparent backgrounds create a modern, premium feel that adapts to any design.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full h-32 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-2xl flex items-center justify-center"
            >
              <span className="text-gray-400">Hover for effect</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ boxShadow: "0 0 40px rgba(0, 212, 255, 0.3)" }}
            className="glass rounded-3xl p-12 border-2 border-accent/30 hover:border-accent transition-all cursor-pointer"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4">3D Interactions</h3>
              <p className="text-gray-300">
                Depth and perspective with smooth 3D transforms. Every element responds to user interaction with precision.
              </p>
            </div>
            <motion.div
              whileHover={{ rotateX: 10, rotateY: 10 }}
              style={{ perspective: "1000px" }}
              className="w-full h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center"
            >
              <span className="text-white font-bold">Hover for 3D</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Button showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-3xl p-12 border border-accent/20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Premium Button States</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">
            {buttons.map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r ${btn.color} shadow-lg hover:shadow-2xl transition-all`}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Bold shadows showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20 }}
              className={`h-48 rounded-2xl bg-gradient-to-br ${
                i === 1
                  ? 'from-blue-600 to-cyan-500'
                  : i === 2
                  ? 'from-purple-600 to-pink-500'
                  : 'from-orange-600 to-yellow-500'
              } shadow-premium hover:shadow-2xl transition-shadow`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
