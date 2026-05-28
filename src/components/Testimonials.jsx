import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      title: "Entrepreneur",
      rating: 5,
      text: "The best financial app I've ever used. The rewards are amazing and the interface is incredibly intuitive.",
      platform: "App Store",
      stats: "4.9/5 (500k+ reviews)",
    },
    {
      name: "Priya Verma",
      title: "Investor",
      rating: 5,
      text: "Premium service with zero compromises. The security features give me complete peace of mind.",
      platform: "Play Store",
      stats: "4.8/5 (450k+ reviews)",
    },
    {
      name: "Amit Patel",
      title: "Business Owner",
      rating: 5,
      text: "Outstanding customer support and seamless transactions. Worth every penny of the premium membership.",
      platform: "App Store",
      stats: "4.9/5 (500k+ reviews)",
    },
  ]

  const stats = [
    { label: "Active Members", value: "2.5M+", color: "text-blue-400" },
    { label: "Avg Rating", value: "4.9/5", color: "text-yellow-400" },
    { label: "Satisfaction", value: "98%", color: "text-green-400" },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Loved by Members
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our community says about their experience with us.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center glass rounded-2xl p-8"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 border border-gray-700 hover:border-accent/50 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="border-t border-gray-700 pt-4 mb-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>

              {/* Platform Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                  {testimonial.platform}
                </span>
                <span className="text-xs text-gray-400">{testimonial.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Member Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 glass rounded-3xl p-12 border border-accent/20 grid md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-gradient text-4xl font-bold mb-2">2.5M+</div>
            <p className="text-gray-400">Total Members</p>
          </div>
          <div>
            <div className="text-gradient text-4xl font-bold mb-2">₹50,000 Cr</div>
            <p className="text-gray-400">Transactions Value</p>
          </div>
          <div>
            <div className="text-gradient text-4xl font-bold mb-2">₹5000 Cr</div>
            <p className="text-gray-400">Rewards Distributed</p>
          </div>
          <div>
            <div className="text-gradient text-4xl font-bold mb-2">24/7</div>
            <p className="text-gray-400">Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
