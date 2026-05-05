'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { clinicData } from '@/data/clinic-data';
import { useLanguage } from '@/i18n/LanguageContext';
import { Sparkles, Smile, Shield, Activity, Scissors, Sun, Heart, AlignLeft, Baby, Monitor, Layers, ArrowRight, CheckCircle } from 'lucide-react';

// Custom Tooth icon
const ToothIcon = ({ size = 32, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C8.5 2 5 4.5 5 8c0 2.5 1.5 4.5 3 6l-1 5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5l-1-5c1.5-1.5 3-3.5 3-6 0-3.5-3.5-6-7-6z" />
  </svg>
);

const iconMap = {
  tooth: ToothIcon,
  sparkles: Sparkles,
  smile: Smile,
  shield: Shield,
  activity: Activity,
  scissors: Scissors,
  sun: Sun,
  heart: Heart,
  'align-left': AlignLeft,
  baby: Baby,
  monitor: Monitor,
  layers: Layers
};

// Extended service details like original website
const serviceDetails: Record<string, { features: string[]; fullDescription: string }> = {
  'Dental Implants': {
    features: [
      'Advanced 3D-guided implant placement using CBCT',
      'Premium titanium posts with 97% success rate',
      'Minimally invasive procedures',
      'Custom porcelain crowns & bridges',
      'Permanent, natural-looking results'
    ],
    fullDescription: 'At our dental clinic, we specialize in dental implants, providing patients with permanent, natural-looking tooth replacements. With advanced 3D-guided implant placement using CBCT, we achieve fast, accurate, and minimally invasive procedures. Each dental implant consists of a high quality titanium post, designed for optimal bone integration. We exclusively use premium dental implants with a 97 percent success rate over minimum 10 years according to the latest statistics.'
  },
  'Veneers': {
    features: [
      'High-quality porcelain veneers',
      'Natural, translucent appearance',
      'Customized shape and shade',
      'Digital smile design technology',
      'Stain-resistant & durable'
    ],
    fullDescription: 'Our veneers provide a natural, translucent, and highly esthetic appearance. Our expert dentists ensure each veneer is fully customized to match the patients unique smile. With digital smile design technology, we create personalized treatment plans for predictable and satisfactory results. Veneers are durable, stain-resistant, and minimally invasive, making them an ideal choice for a long-lasting, beautiful smile.'
  },
  'Aligners': {
    features: [
      'Nearly invisible clear aligners',
      'Comfortable & removable',
      'Used before veneers for malalignment',
      'Creates restorative space',
      'Discreet teeth straightening'
    ],
    fullDescription: 'Clear aligners for discreet teeth straightening - nearly invisible and comfortable. Many patients who consider veneers explore aligners for correcting major misalignments before the veneer placement. This approach allows us to be conservative during prep or having no need to prep teeth at all. Aligners are also used in cases of no restorative space, bringing back the space needed for restorations.'
  },
  'All-on-4 & All-on-6': {
    features: [
      'Fixed full-arch restoration',
      'Permanent solution for missing teeth',
      'Over 1,000 successful cases',
      'Immediate function & aesthetics',
      'Advanced implant technology'
    ],
    fullDescription: 'Our All-on-4 and All-on-6 supported dentures provide a permanent solution for edentulous patients. With over 1,000 successful cases, this treatment offers fixed, full-arch restoration that looks and functions like natural teeth. Using advanced implant technology, we can provide immediate function and aesthetics with minimal recovery time.'
  },
  'Dental Surgeries': {
    features: [
      'Orthognathic surgeries',
      'Complex case management',
      'Precision & expertise',
      'Advanced surgical techniques',
      'Comprehensive pre & post care'
    ],
    fullDescription: 'Our dental surgery services include advanced procedures with precision and expertise, including orthognathic surgeries. Dr. Eman Tantawy, with her extensive experience in oral surgeries, can manage even the most complicated cases with ease. We provide comprehensive pre and post-operative care to ensure optimal outcomes.'
  },
  'Root Canal Treatment': {
    features: [
      'Painless procedure',
      '97% success rate',
      'Latest technology',
      'Stress-free experience',
      'Preserves natural tooth'
    ],
    fullDescription: 'Our root canal treatment is a painless and stress-free procedure with a 97% success rate using the latest technology. We understand that many patients fear root canals, which is why we prioritize comfort and use advanced techniques to ensure a smooth experience. Our goal is to preserve your natural tooth while eliminating pain and infection.'
  },
  'Composite Veneers': {
    features: [
      'Aesthetic dental restorations',
      'Composite materials',
      'Natural-looking results',
      'Conservative approach',
      'Quick procedure'
    ],
    fullDescription: 'Composite veneers and dental fillings provide aesthetic dental restorations using composite materials for beautiful, natural-looking results. This conservative approach allows us to enhance your smile with minimal tooth preparation. The procedure is quick and can often be completed in a single visit.'
  },
  'Periodontics': {
    features: [
      'Gum health treatment',
      'Gum contouring',
      'Implant site preparation',
      'Foundation for successful treatments',
      'Healthy gum maintenance'
    ],
    fullDescription: 'Periodontics focuses on gum health treatment, gum contouring, and implant site preparation. Healthy gums are the foundation for successful aligners, dental implants, and veneers. Our periodontal services ensure your gums are in optimal condition before proceeding with any cosmetic or restorative treatments.'
  },
  'Teeth Whitening': {
    features: [
      'Laser whitening technology',
      'Up to 4 shades lighter',
      'Instant results',
      'Pain-free procedure',
      'Can combine with aligners'
    ],
    fullDescription: 'Our laser whitening technology provides instant, pain-free results up to 4 shades lighter. Teeth whitening can be combined with aligners to create a Hollywood smile without extensive restorative work. The procedure is quick, effective, and can dramatically enhance your smile in just one visit.'
  },
  'Orthodontics': {
    features: [
      'Metal braces',
      'Ceramic braces',
      'Invisible braces',
      'Combined with aligners',
      'For all ages'
    ],
    fullDescription: 'We offer comprehensive orthodontic services including metal, ceramic, and invisible braces for healthy and confident smiles. Our orthodontic treatments can be combined with aligners for best results, and we provide options suitable for all ages. Whether you need minor adjustments or complex correction, we have the right solution for you.'
  },
  'Pedodontics': {
    features: [
      'Specialized for children',
      'Stress-free environment',
      'Child-friendly approach',
      'Preventive care focus',
      'Comfortable experience'
    ],
    fullDescription: 'Our pedodontic services provide specialized dental care for children in a stress-free environment. We understand that children need special attention and a gentle approach. Our team is trained to make dental visits comfortable for kids, creating positive experiences that set the foundation for a lifetime of good oral health.'
  },
  'Digital Dentistry': {
    features: [
      'CBCT imaging',
      'Dental lasers',
      'State-of-the-art equipment',
      'Accurate diagnostics',
      'Digital smile design'
    ],
    fullDescription: 'Our digital dentistry services include CBCT imaging, dental lasers, and state-of-the-art equipment for accurate diagnostics, implant planning, and veneer smile design. Digital technology allows us to achieve predictable results with enhanced precision and reduced treatment time. We continuously adopt the latest advancements to provide the best possible care.'
  }
};

export default function Services() {
  const { t, isRTL } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section - Like Original Website */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-[#c9a227] font-semibold mb-4 uppercase tracking-wide">{t.nav.services}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">
              {t.servicesPage.heroTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.servicesPage.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Service Sections - Like Original Website */}
      <section className="py-10">
        {clinicData.services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] || ToothIcon;
          const details = serviceDetails[service.name] || { features: [], fullDescription: service.description };
          const isEven = index % 2 === 0;
          
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
          const translatedName = serviceNameMap[service.name] || service.name;
          
          return (
            <div key={service.id} className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
              <div className="max-w-7xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-[400px] object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-white font-bold text-2xl">{translatedName}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={isEven ? 'lg:order-2' : 'lg:order-1'}
                  >
                    <p className="text-[#c9a227] font-semibold mb-2 uppercase tracking-wide">{translatedName}</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">{details.fullDescription}</p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {details.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle size={20} className="text-[#c9a227] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 bg-[#1e3a5f] text-white px-6 py-3 rounded-full hover:bg-[#2d4a6f] transition-colors font-semibold group"
                    >
                      <span>{t.servicesPage.learnMore}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to schedule your consultation and learn more about our services
            </p>
            <a
              href={`tel:${clinicData.contact.phone}`}
              className="inline-flex items-center space-x-2 bg-[#c9a227] text-white px-8 py-4 rounded-full hover:bg-[#b8921f] transition-colors font-semibold"
            >
              <span>Call Us Now</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
