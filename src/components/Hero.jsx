import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-50" />
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10"
      />
      
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 glass rounded-full text-accent text-sm font-semibold">
            ✨ Welcome to Premium Finance
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight"
        >
          Financial <span className="text-gradient">Freedom</span>, <br />
          Reimagined
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          An exclusive financial platform designed for members who demand excellence, security, and rewards.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium px-8 py-4 text-lg flex items-center justify-center gap-2"
          >
            Join Now <ArrowRight size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold border-2 border-accent rounded-lg hover:bg-accent hover:text-black transition-all"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-700"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">2.5M+</div>
            <p className="text-gray-400">Active Members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">$50B+</div>
            <p className="text-gray-400">Transactions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
            <p className="text-gray-400">Uptime</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
