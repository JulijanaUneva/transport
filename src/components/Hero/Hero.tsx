import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import './Hero.css';
import heroImage from '../../assets/bus photo.jpeg';
import heroImage1 from '../../assets/lkw connect photo.jpeg';
import heroImage2 from '../../assets/lkw connect logo photo.jpeg';

const images = [heroImage, heroImage1, heroImage2];
 
export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Автоматско slideshow секои 5 секунди
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); 

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
        {/* Slideshow */}
        <div className="hero-slideshow">
          <div 
            className="slideshow-track"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="slide">
                <img
                  src={image}
                  alt={`LKW CONNECT ${index + 1}`}
                  className="hero-image"
                />
              </div>
            ))}
          </div>
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
               <Mail/>
              {/* <Mail className="contact-icon" /> */}
            </button>
            {/* <span className="contact-label">Contact</span> */}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};