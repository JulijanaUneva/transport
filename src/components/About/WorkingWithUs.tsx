import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { 
  Shield, Clock, Award, CheckCircle, Heart, Star, Zap, Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './WorkingWithUs.css';

// 1. ДЕФИНИРАЊЕ НА ТИПОВИ (За TypeScript да биде среќен)
interface MarqueeItem {
  icon?: React.ElementType; // Ова прифаќа било која React компонента (икона)
  text?: string;
  name?: string;
  desc?: string;
}

interface PartnershipType {
  title: string;
  description: string;
  features: string[];
}

export default function WorkingWithUs() {
  const { t } = useLanguage();

  // 2. ПОДАТОЦИ ЗА ДВИЖЕЧКИТЕ КАРТИЧКИ
  const topRow: MarqueeItem[] = [
  { 
    icon: Shield, 
    text: t('about.values.reliability.title'), 
    desc: t('about.values.reliability.description') // Твојот веќе постоечки опис
  },
  { 
    icon: Clock, 
    text: t('about.values.punctuality.title'), 
    desc: t('about.values.punctuality.description') 
  },
  { 
    icon: Heart, 
    text: t('about.values.customerCare.title'), 
    desc: t('about.values.customerCare.description') 
  },
  { 
    icon: Zap, 
    text: t('about.values.innovation.title'), 
    desc: t('about.values.innovation.description') 
  },
  { 
    icon: Award, 
    text: t('about.working.benefits.qualityAssurance.title'), 
    desc: t('about.working.benefits.qualityAssurance.description') 
  },
  { 
    icon: Star, 
    text: t('about.values.excellence.title'), 
    desc: t('about.values.excellence.description') 
  },
];
  // const topRow: MarqueeItem[] = [
  //   { icon: Shield, text: t('about.values.reliability.title') },
  //   { icon: Clock, text: t('about.values.punctuality.title') },
  //   { icon: Heart, text: t('about.values.customerCare.title') },
  //   { icon: Zap, text: t('about.values.innovation.title') },
  //   { icon: Award, text: t('about.working.benefits.qualityAssurance.title') },
  //   { icon: Star, text: t('about.values.excellence.title') },
  // ];

  const bottomRow: MarqueeItem[] = [
    { name: "ISO 9001", desc: t('about.certifications.iso9001') },
    { name: "ISO 14001", desc: t('about.certifications.iso14001') },
    { name: "GDPR", desc: t('about.certifications.gdpr') },
    { name: "ADR", desc: t('about.certifications.adr') },
    { name: "Global", desc: t('about.values.globalReach.title') },
  ];

  // 3. ПОДАТОЦИ ЗА ПАРТНЕРСТВА (Овој дел не го менуваме визуелно)
  const partnershipTypes: PartnershipType[] = [
    {
      title: t('about.working.partnerships.sme.title'),
      description: t('about.working.partnerships.sme.description'),
      features: [
        t('about.working.partnerships.sme.feature1'),
        t('about.working.partnerships.sme.feature2'),
        t('about.working.partnerships.sme.feature3'),
        t('about.working.partnerships.sme.feature4')
      ]
    },
    {
      title: t('about.working.partnerships.enterprise.title'),
      description: t('about.working.partnerships.enterprise.description'),
      features: [
        t('about.working.partnerships.enterprise.feature1'),
        t('about.working.partnerships.enterprise.feature2'),
        t('about.working.partnerships.enterprise.feature3'),
        t('about.working.partnerships.enterprise.feature4')
      ]
    },
    {
      title: t('about.working.partnerships.ecommerce.title'),
      description: t('about.working.partnerships.ecommerce.description'),
      features: [
        t('about.working.partnerships.ecommerce.feature1'),
        t('about.working.partnerships.ecommerce.feature2'),
        t('about.working.partnerships.ecommerce.feature3'),
        t('about.working.partnerships.ecommerce.feature4')
      ]
    }
  ];

  // 4. ФУНКЦИЈА ЗА РЕНДЕРИРАЊЕ СО ТИПИЗИРАНИ ПАРАМЕТРИ
  const renderTrack = (items: MarqueeItem[], type: 'lila' | 'green') => {
  const doubledItems = [...items, ...items, ...items, ...items];
  return doubledItems.map((item, idx) => {
    const IconComponent = item.icon;
    
    return (
      <div key={idx} className={`trust-card ${type}`}>
        {/* Header: Икона + Наслов */}
        <div className="card-header">
          {IconComponent ? (
            <>
              <div className="icon-wrapper">
                <IconComponent size={24} />
              </div>
              <span className="card-title">{item.text}</span>
            </>
          ) : (
            <div className="cert-container">
               <div className="cert-badge">{item.name}</div>
            </div>
          )}
        </div>
        
        {/* Content: Описот е веднаш тука, чист и читлив */}
        {item.desc && (
          <div className="card-description">
            <p>{item.desc}</p>
          </div>
        )}
      </div>
    );
  });
};
//   const renderTrack = (items: MarqueeItem[], type: 'lila' | 'green') => {
//   const doubledItems = [...items, ...items, ...items, ...items];
//   return doubledItems.map((item, idx) => {
//     const IconComponent = item.icon;
    
//     return (
//       <div key={idx} className={`trust-card ${type}`}>
//         {/* Главниот дел што секогаш се гледа */}
//         <div className="card-main-content">
//           {IconComponent ? (
//             <>
//               <IconComponent size={20} />
//               <span className="card-title">{item.text}</span>
//             </>
//           ) : (
//             <div className="cert-tag">{item.name}</div>
//           )}
//         </div>
        
//         {/* Овој дел ќе се „отвори“ на hover */}
//         {item.desc && (
//           <div className="card-description">
//             <p>{item.desc}</p>
//           </div>
//         )}
//       </div>
//     );
//   });
// };

  return (
    <section className="working-with-us">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{t('about.working.title')}</h2>
          <p className="section-description">{t('about.working.description')}</p>
        </div>

        {/* Marquee Section (Values & Certs) */}
        <div className="marquee-trust-container">
          <div className="marquee-wrapper">
            <div className="marquee-track top-track">
              <div className="marquee-content scroll-right">
                {renderTrack(topRow, 'lila')}
              </div>
            </div>
            <div className="marquee-track bottom-track">
              <div className="marquee-content scroll-left">
                {renderTrack(bottomRow, 'green')}
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="partnership-section">
          <h3 className="subsection-title">
            <Handshake className="title-icon" />
            {t('about.working.solutions.title')}
          </h3>
          <div className="partnership-grid">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="partnership-card">
                <h4 className="partnership-title">{type.title}</h4>
                <p className="partnership-description">{type.description}</p>
                <ul className="partnership-features">
                  {type.features.map((feature, fIndex) => (
                    <li key={fIndex} className="partnership-feature">
                      <CheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="working-cta">
          <div className="cta-content">
            <h3>{t('about.working.cta.title')}</h3>
            <p>{t('about.working.cta.description')}</p>
            <div className="cta-buttons">
              <Link to="/#contact" className="primary-button">
                {t('about.working.cta.getStarted')}
              </Link>
              <a href="tel:+38978475744" className="secondary-button">
                {t('about.working.cta.callNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}