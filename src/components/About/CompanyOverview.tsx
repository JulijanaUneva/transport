import { useLanguage } from '../../hooks/useLanguage';
import { Shield, Clock, Globe, Heart, Star, Zap } from 'lucide-react';
import './CompanyOverview.css';

export default function CompanyOverview() {
  const { t } = useLanguage();

  const companyValues = [
    {
      icon: Shield,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description')
    },
    {
      icon: Clock,
      title: t('about.values.punctuality.title'),
      description: t('about.values.punctuality.description')
    },
    {
      icon: Globe,
      title: t('about.values.globalReach.title'),
      description: t('about.values.globalReach.description')
    },
    {
      icon: Heart,
      title: t('about.values.customerCare.title'),
      description: t('about.values.customerCare.description')
    },
    {
      icon: Star,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: Zap,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  const certifications = [
    {
      name: t('about.certifications.iso9001'),
      description: t('about.certifications.iso9001.description')
    },
    {
      name: t('about.certifications.iso14001'),
      description: t('about.certifications.iso14001.description')
    },
    {
      name: t('about.certifications.gdpr'),
      description: t('about.certifications.gdpr.description')
    },
    {
      name: t('about.certifications.adr'),
      description: t('about.certifications.adr.description')
    }
  ];

  return (
    <section className="company-overview">
      <div className="container">
        {/* Company Story */}
        <div className="company-story">
          <h2 className="section-title">{t('about.company.title')}</h2>
          <div className="story-content">
            <div className="story-text">
              <div className="story-paragraphs">
                <p>{t('about.company.story')}</p>
                <p>{t('about.company.paragraph1')}</p>
                <p>{t('about.company.paragraph2')}</p>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" 
                alt="Julijana Transport Fleet"
                className="story-img"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>25+ Years</h4>
                  <p>of Excellence in Transport</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-vision">
          <div className="mission-vision-cards">
            <div className="mv-card">
              <h3>{t('about.mission.title')}</h3>
              <p>{t('about.mission.text')}</p>
            </div>
            <div className="mv-card">
              <h3>{t('about.vision.title')}</h3>
              <p>{t('about.vision.text')}</p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="company-values">
          <h2 className="section-title">{t('about.values.title')}</h2>
          <div className="values-grid">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <IconComponent />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications">
          <h2 className="section-title">{t('about.certifications.title')}</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item">
                <div className="cert-logo">
                  {cert.name}
                </div>
                <h4>{cert.name}</h4>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
