import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Truck } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { TranslationKeys } from '../../types';
import './Footer.css';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const quickLinks: Array<{ labelKey: TranslationKeys; href: string }> = [
    { labelKey: 'nav.home', href: '/' },
    { labelKey: 'nav.services', href: '#services' },
    { labelKey: 'nav.about', href: '/about' },
    { labelKey: 'nav.contact', href: '#contact' }
  ];

  const serviceKeys: TranslationKeys[] = [
    'services.roadTransport.title',
    'services.logistics.title',
    'services.international.title',
    'services.express.title',
    'services.specialized.title',
    'services.consulting.title'
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-brand">
                <div className="footer-logo">
                  <Truck className="logo-icon" />
                  <span className="logo-text">Julijana</span>
                </div>
                <p className="footer-description">
                  {t('footer.description')}
                </p>
              </div>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="social-icon" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.quickLinks')}</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.services')}</h3>
              <ul className="footer-links">
                {serviceKeys.map((serviceKey, index) => (
                  <li key={index}>
                    <span className="footer-service">{t(serviceKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">{t('footer.contactInfo')}</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div className="contact-text">
                    <p>Hauptstraße 123</p>
                    <p>12345 Berlin, Germany</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div className="contact-text">
                    <p>+49 123 456 7890</p>
                    <span>Mon-Fri 8:00-18:00</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div className="contact-text">
                    <p>info@transportco.com</p>
                    <span>24/7 response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="footer-map">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.0974576548!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sen!2sde!4v1635789123456!5m2!1sen!2sde"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
            className="google-map"
          ></iframe>
          
          <div className="map-overlay">
            <div className="map-info">
              <h4>Visit Our Office</h4>
              <p>Hauptstraße 123, Berlin</p>
              <a 
                href="https://maps.google.com/maps?q=Hauptstraße+123,+Berlin,+Germany"
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {new Date().getFullYear()} Julijana Transport. {t('footer.rights')}</p>
            </div>
            
            <div className="footer-legal">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <a href="/terms" className="legal-link">Terms of Service</a>
              <a href="/cookies" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
