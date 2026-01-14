import { useLanguage } from '../../hooks/useLanguage';
import { ArrowRight, Users, Target, Award } from 'lucide-react';
import './AboutHero.css';
import aboutHeroImage from '../../assets/lkw connect photo.jpeg';
import { Link } from 'react-router-dom';


export const AboutHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="about-hero">
      <div className="about-hero-background">
        <div className="about-hero-overlay"></div>
        <img 
          src={aboutHeroImage}
          alt="LKW Connect Company"
          className="about-hero-image"
        />
      </div>
      
      <div className="about-hero-content">
        <div className="container">
          <div className="about-hero-text">
            <h1 className="about-hero-title">{t('about.hero.title')}</h1>
            <p className="about-hero-subtitle">
              {t('about.hero.subtitle')}
            </p>
            <p className="about-hero-description">
              {t('about.company.story')}
            </p>
            
            <div className="about-hero-stats">
              <div className="hero-stat">
                <div className="stat-icon-wrapper">
                  <Users className="stat-icon" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">2500+</span>
                  <span className="stat-label">{t('about.hero.stat1')}</span>
                </div>
              </div>
              
              <div className="hero-stat">
                <div className="stat-icon-wrapper">
                  <Target className="stat-icon" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">99.8%</span>
                  <span className="stat-label">{t('about.hero.stat2')}</span>
                </div>
              </div>
              
              <div className="hero-stat">
                <div className="stat-icon-wrapper">
                  <Award className="stat-icon" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">{t('about.hero.stat3')}</span>
                </div>
              </div>
            </div>
            
            {/* <button className="about-cta">
              {t('about.hero.cta')}
              <ArrowRight className="cta-icon" />
            </button> */}
              <Link to="/#contact" className="about-cta">
              {t('about.hero.cta')}
              <ArrowRight className="cta-icon" />
              </Link>

          </div>
        </div>
      </div>
    </section>
  );
};
