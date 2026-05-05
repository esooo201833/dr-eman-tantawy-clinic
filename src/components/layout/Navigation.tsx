'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { clinicData } from '@/data/clinic-data';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.contact, href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                src={clinicData.logo.url}
                alt={clinicData.logo.alt}
                className="h-14 w-14 rounded-full object-cover"
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#1e3a5f]">{isRTL ? 'عيادة د. إيمان طنطاوي' : clinicData.name}</h1>
              <p className="text-sm text-[#c9a227]">{t.hero.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
              >
                <motion.span
                  className="text-[#1e3a5f] font-medium hover:text-[#c9a227] transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a227]"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Contact Buttons & Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href={`tel:${clinicData.contact.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-[#1e3a5f] text-white px-4 py-2 rounded-full hover:bg-[#2d4a6f] transition-colors"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">{t.hero.callNow}</span>
            </motion.a>
            <motion.a
              href={`mailto:${clinicData.contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-[#c9a227] text-white px-4 py-2 rounded-full hover:bg-[#b8921f] transition-colors"
            >
              <Mail size={18} />
              <span className="hidden lg:inline">{t.contact.email}</span>
            </motion.a>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[#1e3a5f] font-medium hover:text-[#c9a227] transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${clinicData.contact.phone}`}
                  className="flex items-center space-x-2 text-[#1e3a5f] font-medium"
                >
                  <Phone size={18} />
                  <span>{clinicData.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${clinicData.contact.email}`}
                  className="flex items-center space-x-2 text-[#1e3a5f] font-medium"
                >
                  <Mail size={18} />
                  <span>{clinicData.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
