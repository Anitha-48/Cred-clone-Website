import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Users } from 'lucide-react'

export default function TrustSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  }

  const cards = [
    {
      icon: Shield,
      title: "Members-Only Club",
      description: "Exclusive access to premium features, priority support, and early access to new products. Join an elite community of discerning individuals.",
    },
    {
      icon: Lock,
      title: "Built on Trust",
      description: "Industry-leading security standards with multi-layer encryption. Your financial data is protected with the highest level of security.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Connect with like-minded individuals. Share insights, opportunities, and experiences within our trusted network.",
    },
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
            Trust, Redefined
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We've built a platform where exclusivity meets innovation. Every feature is designed with your success in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10 }}
                className="group glass rounded-2xl p-8 hover:bg-blue-900/20 transition-all duration-300 border border-gray-700 hover:border-accent"
              >
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-all">
                  <Icon className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Scroll reveal text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass rounded-2xl p-8 max-w-2xl">
            <p className="text-lg text-gray-300 mb-4">
              "We believe that financial services should be transparent, secure, and rewarding. Our platform is built on the principles of integrity and innovation."
            </p>
            <p className="text-accent font-semibold">— Our Promise to You</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
