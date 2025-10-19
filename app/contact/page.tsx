'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, HelpCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950 text-gray-800 dark:text-gray-200 transition-all duration-500 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-25 px-6 sm:px-10 bg-gradient-to-br from-emerald-100/40 to-teal-100/30 dark:from-emerald-900/20 dark:to-teal-900/10 border-b border-gray-100 dark:border-gray-700/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto w-full"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-5 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Get in Touch
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight text-gray-900 dark:text-gray-100">
            Contact{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              ExpenseTracker AI
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Need help with your AI-powered expense tracking? Reach out to our team — we’d love to assist.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@expensetracker-ai.com"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
            <a
              href="tel:+11234567890"
              className="border-2 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100/40 dark:hover:bg-emerald-900/30 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Multiple Ways to <span className="text-emerald-600 dark:text-emerald-400">Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Choose the best way to reach our team — we’re flexible, responsive, and always happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Mail className="w-6 h-6 text-white" />,
              title: 'Email Support',
              desc: 'Get detailed help with your inquiries — we usually respond within 24 hours.',
              link: 'mailto:support@expensetracker-ai.com',
              text: 'support@expensetracker-ai.com',
            },
            {
              icon: <Phone className="w-6 h-6 text-white" />,
              title: 'Phone Support',
              desc: 'Call us directly for urgent issues and real-time assistance.',
              link: 'tel:+11234567890',
              text: '+1 (123) 456-7890',
            },
            {
              icon: <MapPin className="w-6 h-6 text-white" />,
              title: 'Office Location',
              desc: 'Come visit our workspace for in-person meetings and partnership discussions.',
              text: '123 AI Innovation St, Tech City, USA',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/70 dark:bg-gray-800/70 p-8 rounded-2xl border border-gray-200/30 dark:border-gray-700/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm font-medium"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                  {item.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Info */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Support Hours */}
          <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-lg border border-gray-100/40 dark:border-gray-700/40">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Support Hours
              </h3>
            </div>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="font-medium">9:00 AM – 6:00 PM PST</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">10:00 AM – 4:00 PM PST</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-gray-500 dark:text-gray-500">Closed</span>
              </li>
            </ul>
            <div className="mt-5 text-sm bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg text-emerald-700 dark:text-emerald-300">
              Email support is available 24/7 with responses within 24 hours.
            </div>
          </div>

          {/* Quick Help */}
          <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-2xl shadow-lg border border-gray-100/40 dark:border-gray-700/40">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-emerald-500" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Quick Help
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Technical Issues', desc: 'Having problems with the app? Check our troubleshooting guide first.' },
                { title: 'AI Features', desc: 'Learn how to get the most out of our AI-powered insights and tools.' },
                { title: 'Account & Billing', desc: 'Need help managing your subscription or payment? Contact us.' },
              ].map((help, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700/40 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                    {help.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{help.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
