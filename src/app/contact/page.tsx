'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { clinicData } from '@/data/clinic-data';
import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const { t, isRTL } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#1e3a5f] mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">{t.contact.contactUs}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3a5f] p-3 rounded-full">
                    <Phone className="text-[#c9a227]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">{t.contact.phone}</h3>
                    <a href={`tel:${clinicData.contact.phone}`} className="text-gray-600 hover:text-[#c9a227] transition-colors">
                      {clinicData.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3a5f] p-3 rounded-full">
                    <Mail className="text-[#c9a227]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">{t.contact.email}</h3>
                    <a href={`mailto:${clinicData.contact.email}`} className="text-gray-600 hover:text-[#c9a227] transition-colors">
                      {clinicData.contact.email}
                    </a>
                  </div>
                </div>
                {/* Mohandeseen Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3a5f] p-3 rounded-full">
                    <MapPin className="text-[#c9a227]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">{isRTL ? 'المهندسين' : 'Mohandeseen'}</h3>
                    <p className="text-gray-600">{clinicData.contact.locations[0].address}</p>
                    <p className="text-gray-600 text-sm">{clinicData.contact.locations[0].building}</p>
                    <a
                      href={clinicData.contact.locations[0].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c9a227] hover:text-[#b8921f] transition-colors text-sm"
                    >
                      {t.contact.getDirections}
                    </a>
                  </div>
                </div>
                {/* Sheikh Zayed Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3a5f] p-3 rounded-full">
                    <MapPin className="text-[#c9a227]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">{isRTL ? 'الشيخ زايد' : 'Sheikh Zayed'}</h3>
                    <p className="text-gray-600">{clinicData.contact.locations[1].address}</p>
                    <p className="text-gray-600 text-sm">{clinicData.contact.locations[1].building}</p>
                    <a
                      href={clinicData.contact.locations[1].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c9a227] hover:text-[#b8921f] transition-colors text-sm"
                    >
                      {t.contact.getDirections}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1e3a5f] p-3 rounded-full">
                    <Clock className="text-[#c9a227]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1e3a5f] mb-1">{t.contact.workingHours}</h3>
                    <p className="text-gray-600">{isRTL ? 'المهندسين: ' : 'Mohandeseen: '}{clinicData.contact.workingHours.mohandeseen}</p>
                    <p className="text-gray-600">{isRTL ? 'الشيخ زايد: ' : 'Sheikh Zayed: '}{clinicData.contact.workingHours.sheikhZayed}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">{t.contact.sendMessage}</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.yourName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-colors"
                    placeholder={t.contact.yourName}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.yourEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-colors"
                    placeholder={t.contact.yourEmail}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.yourPhone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-colors"
                    placeholder="+20 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-colors"
                  >
                    <option value="">{t.contact.selectService}</option>
                    {clinicData.services.map((service) => {
                      const serviceNameMap: Record<string, string> = {
                        'Dental Implants': t.services.dentalImplants,
                        'Veneers': t.services.veneers,
                        'Aligners': t.services.aligners,
                        'All-on-4 & All-on-6': t.services.allOn4,
                        'Dental Surgeries': t.services.dentalSurgeries,
                        'Root Canal Treatment': t.services.rootCanal,
                        'Composite Veneers': t.services.compositeVeneers,
                        'Periodontics': t.services.periodontics,
                        'Teeth Whitening': t.services.teethWhitening,
                        'Orthodontics': t.services.orthodontics,
                        'Pedodontics': t.services.pedodontics,
                        'Digital Dentistry': t.services.digitalDentistry,
                      };
                      return (
                        <option key={service.id} value={service.name}>
                          {serviceNameMap[service.name] || service.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a227] focus:border-transparent transition-colors resize-none"
                    placeholder={isRTL ? 'أخبرنا عن احتياجاتك...' : 'Tell us about your dental needs...'}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1e3a5f] text-white px-8 py-4 rounded-full hover:bg-[#2d4a6f] transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{t.contact.submit}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Both Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">{isRTL ? 'موقعنا' : 'Find Us'}</h2>
            <p className="text-gray-600">{isRTL ? 'زور إحدى عيادتنا' : 'Visit one of our clinics'}</p>
          </motion.div>

          {/* Two Maps Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mohandeseen Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 bg-[#1e3a5f] text-white">
                  <h3 className="text-2xl font-bold mb-2">{isRTL ? 'المهندسين' : 'Mohandeseen'}</h3>
                  <p className="text-gray-300 text-sm">{clinicData.contact.locations[0].address}</p>
                  <p className="text-[#c9a227] text-sm mt-1">{clinicData.contact.locations[0].building}</p>
                </div>
                <div className="h-80">
                  <iframe
                    src={clinicData.contact.locations[0].embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <a
                    href={clinicData.contact.locations[0].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#c9a227] hover:text-[#b8921f] transition-colors font-semibold"
                  >
                    <MapPin size={18} className="mr-2" />
                    {t.contact.getDirections}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Sheikh Zayed Location */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 bg-[#1e3a5f] text-white">
                  <h3 className="text-2xl font-bold mb-2">{isRTL ? 'الشيخ زايد' : 'Sheikh Zayed'}</h3>
                  <p className="text-gray-300 text-sm">{clinicData.contact.locations[1].address}</p>
                  <p className="text-[#c9a227] text-sm mt-1">{clinicData.contact.locations[1].building}</p>
                </div>
                <div className="h-80">
                  <iframe
                    src={clinicData.contact.locations[1].embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <a
                    href={clinicData.contact.locations[1].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#c9a227] hover:text-[#b8921f] transition-colors font-semibold"
                  >
                    <MapPin size={18} className="mr-2" />
                    {t.contact.getDirections}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
