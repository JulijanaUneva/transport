import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import './Hero.css';
import heroImage from '../../assets/bus photo.jpeg';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        {/* Placeholder for hero image/video */}
        <div className="hero-image-placeholder">
          <img 
            src={heroImage}
            alt="Julijana Transport" 
            className="hero-image"
          />
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('hero.title')}
            </h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="hero-actions">
              <button 
                onClick={scrollToServices}
                className="hero-cta-primary"
              >
                {t('hero.cta')}
                <ArrowRight className="cta-icon" />
              </button>
              <button 
                onClick={scrollToContact}
                className="hero-cta-secondary"
              >
                {t('hero.learnMore')}
              </button>
            </div>
          </div>
          
          {/* Circular Contact Shortcut */}
          <div className="contact-shortcut">
            <button 
              onClick={scrollToContact}
              className="contact-button"
              aria-label="Contact us"
            >
              <Phone className="contact-icon" />
            </button>
            <span className="contact-label">Contact</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};
