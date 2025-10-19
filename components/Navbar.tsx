'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30 shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link
              href="/"
              className="flex items-center gap-3 group transition-transform duration-300"
            >
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent tracking-tight">
                ExpenseTracker AI
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {['Home', 'About', 'Contact'].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium transition-colors duration-200 group"
                >
                  <span>{item}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:block">
              <SignedOut>
                <SignInButton>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-transform duration-300"
                  >
                    Sign In
                  </motion.button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        'w-9 h-9 hover:scale-110 transition-transform duration-200',
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 px-6 py-4 space-y-4"
          >
            {['Home', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-300 text-base font-medium py-2 transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {item}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <SignedOut>
                <SignInButton>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMenuOpen(false)}
                    className="w-full py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition-transform duration-300"
                  >
                    Sign In
                  </motion.button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className="flex justify-center mt-2">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox:
                          'w-10 h-10 hover:scale-110 transition-transform duration-200',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
