'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-30 px-6 sm:px-10 bg-gradient-to-br from-emerald-100/40 to-teal-100/30 dark:from-emerald-900/20 dark:to-teal-900/10 border-b border-gray-100 dark:border-gray-700/30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 max-w-4xl mx-auto w-full"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></span>
            Powered by AI Technology
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Your intelligent companion for tracking expenses and managing your finances with cutting-edge AI-powered insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="group border-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 px-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-1 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
            Our Mission
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Transforming Financial Management with{' '}
            <span className="text-emerald-600 dark:text-emerald-400">AI</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            We leverage AI to revolutionize how individuals achieve financial wellness, offering personalized insights and smarter budgeting tools.
          </p>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: '🤖',
              title: 'AI-Powered Insights',
              text: 'Get intelligent analysis of your spending patterns with personalized AI recommendations.',
            },
            {
              icon: '✨',
              title: 'Smart Categorization',
              text: 'Automatically categorize expenses with accuracy and personalized suggestions.',
            },
            {
              icon: '📊',
              title: 'Intelligent Dashboard',
              text: 'Experience real-time analytics and visualizations that make sense of your data.',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 text-white text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
