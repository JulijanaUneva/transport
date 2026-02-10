import { useLanguage } from '../../hooks/useLanguage';
import { Shield, Clock, Globe, Heart, Star, Zap } from 'lucide-react';
import './CompanyOverview.css';
import ourCompanyImg from '/src/assets/ourCompany1.png';
import europaMap from '/src/assets/europaMap.png';

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
        {/* Company Story with Map */}
<div className="story-with-map">
  <h2 className="section-title">{t('about.company.title')}</h2>
  
    {/* Left: Text */}
      <div className="story-map-grid">
    <div className="story-text-compact">
      <p className="story-intro">
        Основана во 2015 година, LKW КОНЕКТ израсна од мала фирма во доверлив логистички партнер низ цела Европа.
      </p>
      <ul className="story-highlights">
        <li>✓ Професионално координирање на возила</li>
        <li>✓ Активни во Европа и Скандинавија</li>
        <li>✓ 10+ години искуство</li>
        <li>✓ Партнерство со водечки компании</li>
      </ul>
    </div>

    {/* Right: Europe Map with Pins */}
    <div className="europe-map-container">
      <img 
        src={europaMap}
        alt="Europe Map" 
        className="europe-map-img"
      />
      
      {/* Pin 1: Macedonia */}
      <div className="map-pin pin-macedonia">
        <div className="pin-dot"></div>
        <div className="pin-tooltip tooltip-1">
          <strong>📍 Македонија</strong>
          <p>Наша база</p>
        </div>
      </div>

      {/* Pin 2: Germany */}
      <div className="map-pin pin-germany">
        <div className="pin-dot"></div>
        <div className="pin-tooltip tooltip-2">
          <strong>📍 Германија</strong>
          <p>Централна Европа</p>
        </div>
      </div>

      {/* Pin 3: Scandinavia */}
      <div className="map-pin pin-scandinavia">
        <div className="pin-dot"></div>
        <div className="pin-tooltip tooltip-3">
          <strong>📍 Скандинавија</strong>
          <p>Северна Европа</p>
        </div>
      </div>
    </div>
  </div>
</div>
         {/* <div className="story-card">
        <h2 className="story-title">{t('about.company.title')}</h2>
        <div className="story-paragraphs">
          <p>{t('about.company.story')}</p>
          <p>{t('about.company.paragraph1')}</p>
          <p>{t('about.company.paragraph2')}</p>
        </div>
      </div> */}

      {/* Image + Mission/Vision Grid */}
      <div className="bottom-grid">
        {/* Image Section */}
        <div className="story-image">
          <img 
            src={ourCompanyImg}
            alt="LKW CONNECT Transport Fleet"
            className="story-img"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <h4>10+ Years</h4>
              <p>of Excellence in Transport</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mission-vision-stack">
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

      </div>
      {/* NEW MARQUEE SECTION - TEST */}
<div className="marquee-section">
  <h2 className="section-title">{t('about.values.title')} & {t('about.certifications.title')}</h2>
  
  <div className="marquee-wrapper">
    {/* ПРВА ЛЕНТА - Values (десно→лево) */}
    <div className="marquee-track">
      <div className="marquee-content scroll-right">
        {[...companyValues, ...companyValues, ...companyValues].map((value, index) => {
          const IconComponent = value.icon;
          return (
            <div key={index} className="marquee-card purple">
  {/* ИКОНА + НАСЛОВ ВО ИСТ РЕД */}
  <div className="marquee-header">
    <div className="marquee-icon">
      <IconComponent size={20} />
    </div>
    <h5>{value.title}</h5>
  </div>
  
  {/* ОПИС ДОЛУ ЦЕНТРИРАН */}
  <div className="marquee-text">
    <p>{value.description}</p>
  </div>
</div>
          );
        })}
      </div>
    </div>

    {/* ВТОРА ЛЕНТА - Certifications (лево→десно) */}
    <div className="marquee-track">
      <div className="marquee-content scroll-left">
        {[...certifications, ...certifications, ...certifications, ...certifications].map((cert, index) => (
          <div key={index} className="marquee-card green">
            <div className="cert-badge-marquee">
              {cert.name}
            </div>
            <p className="cert-desc-marquee">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
