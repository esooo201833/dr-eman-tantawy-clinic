'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Calendar, Star } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { clinicData } from '@/data/clinic-data';
import { useLanguage } from '@/i18n/LanguageContext';

// Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: clinicData.name,
  image: clinicData.images.hero,
  description: clinicData.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: clinicData.contact.locations[0].address,
    addressLocality: 'Cairo',
    addressCountry: 'EG'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.0546219,
    longitude: 31.1990275
  },
  url: 'https://dentistemantantawy.com',
  telephone: clinicData.contact.phone,
  email: clinicData.contact.email,
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '10:00',
      closes: '22:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '4'
  }
};

export default function Home() {
  const { t, isRTL, language } = useLanguage();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-[#1e3a5f] mb-6"
              >
                {t.hero.tagline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl text-[#c9a227] font-semibold mb-4"
              >
                {t.hero.experience} {isRTL ? '' : 'of Experience'}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-600 mb-8"
              >
                {t.hero.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://wa.me/2001062078492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#1e3a5f] text-white px-8 py-4 rounded-full hover:bg-[#2d4a6f] transition-colors font-semibold"
                >
                  <Calendar size={20} />
                  <span>{t.hero.bookNow}</span>
                </a>
                <a
                  href={`tel:${clinicData.contact.phone}`}
                  className="flex items-center justify-center space-x-2 bg-[#c9a227] text-white px-8 py-4 rounded-full hover:bg-[#b8921f] transition-colors font-semibold"
                >
                  <Phone size={20} />
                  <span>{t.hero.callNow}</span>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,162,39,0.4)] hover:ring-4 hover:ring-[#c9a227]/30">
                <motion.img
                  src={clinicData.images.hero}
                  alt="Dr. Eman Tantawy Dental Clinic"
                  className="w-full h-auto object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/50 to-transparent group-hover:from-[#1e3a5f]/30 transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: t.stats.yearsExperience, value: clinicData.stats.yearsOfExperience },
              { label: t.stats.successfulSurgeries, value: clinicData.stats.successfulSurgeries },
              { label: t.stats.smileMakeovers, value: clinicData.stats.smileMakeovers },
              { label: t.stats.fullMouthRehab, value: clinicData.stats.fullMouthRehabCases }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#c9a227] mb-2">
                  {stat.value.toLocaleString()}+
                </div>
                <div className="text-white text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">{t.services.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicData.services.slice(0, 6).map((service, index) => {
              const serviceKeys: Record<string, { name: string; desc: string }> = {
                'Dental Implants': { name: t.services.dentalImplants, desc: t.services.dentalImplantsDesc },
                'Veneers': { name: t.services.veneers, desc: t.services.veneersDesc },
                'Aligners': { name: t.services.aligners, desc: t.services.alignersDesc },
                'All-on-4 & All-on-6': { name: t.services.allOn4, desc: t.services.allOn4Desc },
                'Dental Surgeries': { name: t.services.dentalSurgeries, desc: t.services.dentalSurgeriesDesc },
                'Root Canal Treatment': { name: t.services.rootCanal, desc: t.services.rootCanalDesc },
                'Composite Veneers': { name: t.services.compositeVeneers, desc: t.services.compositeVeneersDesc },
                'Periodontics': { name: t.services.periodontics, desc: t.services.periodonticsDesc },
                'Teeth Whitening': { name: t.services.teethWhitening, desc: t.services.teethWhiteningDesc },
                'Orthodontics': { name: t.services.orthodontics, desc: t.services.orthodonticsDesc },
                'Pedodontics': { name: t.services.pedodontics, desc: t.services.pedodonticsDesc },
                'Digital Dentistry': { name: t.services.digitalDentistry, desc: t.services.digitalDentistryDesc },
              };
              const translated = serviceKeys[service.name] || { name: service.name, desc: service.description };
              return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{translated.name}</h3>
                  <p className="text-gray-600 text-sm">{translated.desc}</p>
                </div>
              </motion.div>
            );})}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-[#c9a227] font-semibold hover:text-[#b8921f] transition-colors"
            >
              <span>{t.services.viewAll}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">{t.videos.title}</h2>
            <p className="text-gray-600">{t.videos.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'KK94kTI6oWU', title: 'Dental Care Video 1' },
              { id: 'zP6_D6ZZVso', title: 'Dental Care Video 2' },
              { id: 'WRFsVOZVJY4', title: 'Dental Care Video 3' }
            ].map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">{t.testimonials.title}</h2>
            <p className="text-gray-600">{t.testimonials.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinicData.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#c9a227] fill-[#c9a227]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-[#1e3a5f]">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
            <p className="text-gray-300 mb-8 text-lg">
              {t.cta.subtitle}
            </p>
            <a
              href="https://wa.me/2001062078492"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#c9a227] text-white px-8 py-4 rounded-full hover:bg-[#b8921f] transition-colors font-semibold"
            >
              <span>{t.cta.bookNow}</span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
