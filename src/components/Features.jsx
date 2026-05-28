import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Zap, TrendingUp, Send, Coins, Gift } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: CreditCard,
      title: "Bill Payments",
      description: "Pay credit card bills instantly with zero fees. Manage all your payments in one place.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "Rewards",
      description: "Earn cashback on every transaction. Unlock exclusive rewards and benefits.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: TrendingUp,
      title: "Credit Score",
      description: "Track your credit score in real-time with detailed insights and recommendations.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Send,
      title: "UPI Payments",
      description: "Send money instantly to anyone with UPI. Fast, secure, and convenient.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Coins,
      title: "FinTech Coins",
      description: "Earn proprietary coins on every transaction. Redeem for exclusive perks.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Gift,
      title: "Cashback",
      description: "Get instant cashback on select merchants. No waiting, no hidden conditions.",
      color: "from-pink-500 to-pink-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage your finances with confidence and style.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group glass rounded-2xl p-8 border border-gray-700 hover:border-accent/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className={`mb-6 p-4 bg-gradient-to-br ${feature.color} rounded-xl w-fit`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-6 text-accent font-semibold flex items-center gap-2 group/btn"
                  >
                    Learn more
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
