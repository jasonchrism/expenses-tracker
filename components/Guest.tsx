'use client';

import { motion } from 'framer-motion';
import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 sm:px-10 bg-gradient-to-br from-emerald-100/40 to-teal-100/30 dark:from-emerald-900/20 dark:to-teal-900/10 border-b border-gray-100 dark:border-gray-700/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.2),_transparent_60%)] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-4xl mx-auto w-full"
        >
          <motion.span
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            AI-Powered Financial Management
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Manage Your Money with{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Track your expenses, manage your budget, and gain AI-driven insights — all in one elegant dashboard built for modern financial control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <SignInButton>
                <button className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
                  Get Started Free →
                </button>
              </SignInButton>
            </motion.div>

            <motion.button
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 px-6 sm:px-10 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '🤖', title: 'AI Insights', desc: 'Smart analysis of your spending patterns' },
            { icon: '✨', title: 'Auto Categories', desc: 'Intelligent expense categorization' },
            { icon: '📊', title: 'Smart Dashboard', desc: 'A beautiful and intuitive overview' },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-xl shadow-md">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-16 px-6 sm:px-10 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Everything you need to know about how ExpenseTracker AI helps manage your finances.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              q: 'What is ExpenseTracker AI?',
              a: 'An intelligent financial management tool that uses AI to track, categorize, and optimize your spending habits.',
            },
            {
              q: 'How does the AI work?',
              a: 'It analyzes your transactions, learns your behavior, and provides smart recommendations and insights.',
            },
            {
              q: 'Is ExpenseTracker AI free?',
              a: 'Yes! You can start for free with essential features. Premium plans unlock advanced analytics and AI interactions.',
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-left hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {faq.q}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-16 px-6 sm:px-10 bg-white dark:bg-gray-900"
      >
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Join thousands who have improved their financial habits with ExpenseTracker AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah L.',
              review:
                'ExpenseTracker AI has completely transformed my budgeting. The AI insights are incredibly helpful!',
            },
            {
              name: 'John D.',
              review:
                'The AI categorization is so accurate — I finally understand where my money goes each month.',
            },
            {
              name: 'Emily R.',
              review:
                'Beautiful interface and powerful insights. It’s like having a personal finance assistant.',
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Verified User
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                “{t.review}”
              </p>
              <div className="text-emerald-500 text-xs">⭐⭐⭐⭐⭐</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Guest;
