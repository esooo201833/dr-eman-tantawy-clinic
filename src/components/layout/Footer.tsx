'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { clinicData } from '@/data/clinic-data';
import { useLanguage } from '@/i18n/LanguageContext';

// Custom SVG icons for Facebook and Instagram
const FacebookIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const { t, isRTL } = useLanguage();
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={clinicData.logo.url}
                alt={clinicData.logo.alt}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg">{isRTL ? 'عيادة د. إيمان طنطاوي' : clinicData.name}</h3>
                <p className="text-[#c9a227] text-sm">{t.hero.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.hero.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#c9a227]">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#c9a227]">{t.footer.contactUs}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                <a href={`tel:${clinicData.contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {clinicData.contact.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                <a href={`mailto:${clinicData.contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {clinicData.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-semibold text-[#c9a227]">{isRTL ? 'المهندسين' : 'Mohandeseen'}:</p>
                  <p className="text-sm">{clinicData.contact.locations[0].address}</p>
                  <p className="text-sm text-gray-400">{clinicData.contact.locations[0].building}</p>
                  <p className="font-semibold text-[#c9a227] mt-2">{isRTL ? 'الشيخ زايد' : 'Sheikh Zayed'}:</p>
                  <p className="text-sm">{clinicData.contact.locations[1].address}</p>
                  <p className="text-sm text-gray-400">{clinicData.contact.locations[1].building}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-[#c9a227] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{clinicData.contact.workingHours.mohandeseen}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#c9a227]">{t.footer.followUs}</h4>
            <div className="flex space-x-4">
              <a
                href={clinicData.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a227] hover:bg-[#b8921f] p-3 rounded-full transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={clinicData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a227] hover:bg-[#b8921f] p-3 rounded-full transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={clinicData.socialMedia.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a227] hover:bg-[#b8921f] p-3 rounded-full transition-colors"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright © 2026 {clinicData.name}. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
