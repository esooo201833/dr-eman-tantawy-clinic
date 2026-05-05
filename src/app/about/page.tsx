'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { clinicData } from '@/data/clinic-data';
import { useLanguage } from '@/i18n/LanguageContext';
import { Award, Users, Shield, Heart, Clock, Zap, ArrowLeft, ArrowRight } from 'lucide-react';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBefore, setIsBefore] = useState(true);
  const { t, isRTL } = useLanguage();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % clinicData.images.beforeAfter.length);
    setIsBefore(true);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + clinicData.images.beforeAfter.length) % clinicData.images.beforeAfter.length);
    setIsBefore(true);
  };

  const currentCase = clinicData.images.beforeAfter[currentImageIndex];
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
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">{isRTL ? 'تعرف على د. إيمان طنطاوي' : 'Meet Dr. Eman Tantawy'}</h2>
            <p className="text-gray-600">{isRTL ? 'شاهد قصتنا وتعرف أكثر على عيادتنا' : 'Watch our story and learn more about our clinic'}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
          >
            <iframe
              src="https://www.youtube.com/embed/WRFsVOZVJY4"
              title="Dr. Eman Tantawy Dental Clinic"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] p-8 rounded-2xl text-white"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="text-[#c9a227]" size={32} />
                <h2 className="text-3xl font-bold">{t.about.mission}</h2>
              </div>
              <p className="text-lg leading-relaxed">
                {clinicData.about.mission}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#c9a227] to-[#b8921f] p-8 rounded-2xl text-white"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Award className="text-white" size={32} />
                <h2 className="text-3xl font-bold">{t.about.values}</h2>
              </div>
              <p className="text-lg leading-relaxed">
                {clinicData.about.values}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">{isRTL ? 'لماذا تختارنا' : 'Why Choose Us'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL ? 'ما يجعلنا أفضل عيادة أسنان في مصر' : 'What makes us the best dental clinic in Egypt'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Best dentists in all specialties with years of experience'
              },
              {
                icon: Shield,
                title: 'Sterilization',
                description: 'Strict protocols following latest ADA guidelines'
              },
              {
                icon: Zap,
                title: 'Digital Dentistry',
                description: 'Latest technology for accurate and predictable results'
              },
              {
                icon: Heart,
                title: 'Stress-Free',
                description: 'Comfortable environment for patients of all ages'
              },
              {
                icon: Clock,
                title: 'Convenient Hours',
                description: 'Open daily from 10am to 10pm for your convenience'
              },
              {
                icon: Award,
                title: 'Top Rated',
                description: 'Highest rated on all booking platforms'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-[#1e3a5f] p-3 rounded-full">
                    <item.icon size={24} className="text-[#c9a227]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f]">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">{isRTL ? 'رحلتنا' : 'Our Journey'}</h2>
            <p className="text-gray-300">{isRTL ? 'منذ الثمانينيات' : 'Since the 1980s'}</p>
          </motion.div>
          <div className="space-y-8">
            {[
              { year: '1980s', title: isRTL ? 'البداية' : 'The Beginning', description: isRTL ? 'د. إيمان طنطاوي بدأت رحلتها في طب الأسنان' : 'Dr. Eman Tantawy started her journey in dentistry' },
              { year: '1990s', title: isRTL ? 'خبرة متزايدة' : 'Growing Expertise', description: isRTL ? 'تخصصت في جراحات الفك وطب الأسنان التجميلي' : 'Specialized in oral surgeries and esthetic dentistry' },
              { year: '2000s', title: isRTL ? 'توسيع الخدمات' : 'Expanding Services', description: isRTL ? 'أضافت رعاية شاملة لطب الأسنان مع أحدث التقنيات' : 'Added comprehensive dental care with advanced technology' },
              { year: '2010s', title: isRTL ? 'التحول الرقمي' : 'Digital Transformation', description: isRTL ? 'دمجت طب الأسنان الرقمي للدقة والتوافق' : 'Integrated digital dentistry for precision and accuracy' },
              { year: '2020s', title: isRTL ? 'قيادة الصناعة' : 'Leading the Industry', description: isRTL ? 'تم الاعتراف بها كأفضل عيادة أسنان في مصر' : 'Recognized as the best dental clinic in Egypt' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-[#c9a227] text-white font-bold px-4 py-2 rounded-full">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">{isRTL ? 'تحولات الابتسامة' : 'Smile Transformations'}</h2>
            <p className="text-gray-600">{isRTL ? 'شاهد النتائج المذهلة التي حققناها لمرضانا' : 'See the amazing results we\'ve achieved for our patients'}</p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,162,39,0.4)] hover:ring-4 hover:ring-[#c9a227]/30">
                <motion.img
                  key={isBefore ? 'before' : 'after'}
                  src={isBefore ? currentCase.before : currentCase.after}
                  alt={isBefore ? 'Before' : 'After'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Overlay Label */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                  {isBefore ? (isRTL ? 'قبل' : 'Before') : (isRTL ? 'بعد' : 'After')}
                </div>
                
                {/* Toggle Button */}
                <motion.button
                  onClick={() => setIsBefore(!isBefore)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#c9a227] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b8921f] transition-colors"
                >
                  {isBefore ? (isRTL ? 'عرض بعد' : 'Show After') : (isRTL ? 'عرض قبل' : 'Show Before')}
                </motion.button>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#1e3a5f] text-white p-3 rounded-full hover:bg-[#2d4a6f] transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#1e3a5f] text-white p-3 rounded-full hover:bg-[#2d4a6f] transition-colors"
              >
                <ArrowRight size={24} />
              </button>
              
              {/* Case Info */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{currentCase.title}</h3>
                <p className="text-gray-600">{currentCase.description}</p>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {clinicData.images.beforeAfter.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsBefore(true);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-[#c9a227]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
