import React from 'react';
import { Truck, Package, Globe, Clock, Shield, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { ServiceCard } from '../../types';
import './Services.css';
import lagerImg from '/src/assets/lager1.png';
import internationalImg from '/src/assets/international.png';


export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services: ServiceCard[] = [
    {
      id: 'road-transport',
      title: t('services.roadTransport.title'),
      description: t('services.roadTransport.description'),
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: [
        t('services.roadTransport.feature1'),
        t('services.roadTransport.feature2'),
        t('services.roadTransport.feature3'),
        t('services.roadTransport.feature4')
      ]
    },
    {
      id: 'logistics',
      title: t('services.logistics.title'),
      description: t('services.logistics.description'),
      image: lagerImg,
      features: [
        t('services.logistics.feature1'),
        t('services.logistics.feature2'),
        t('services.logistics.feature3'),
        t('services.logistics.feature4')
      ]
    },
    {
      id: 'international',
      title: t('services.international.title'),
      description: t('services.international.description'),
      image: internationalImg,
      features: [
        t('services.international.feature1'),
        t('services.international.feature2'),
        t('services.international.feature3'),
        t('services.international.feature4')
      ]
    },
    {
      id: 'express',
      title: t('services.express.title'),
      description: t('services.express.description'),
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: [
        t('services.express.feature1'),
        t('services.express.feature2'),
        t('services.express.feature3'),
        t('services.express.feature4')
      ]
    },
    {
      id: 'specialized',
      title: t('services.specialized.title'),
      description: t('services.specialized.description'),
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: [
        t('services.specialized.feature1'),
        t('services.specialized.feature2'),
        t('services.specialized.feature3'),
        t('services.specialized.feature4')
      ]
    },
    {
      id: 'consulting',
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: [
        t('services.consulting.feature1'),
        t('services.consulting.feature2'),
        t('services.consulting.feature3'),
        t('services.consulting.feature4')
      ]
    }
  ];

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'road-transport':
        return <Truck className="service-icon" />;
      case 'logistics':
        return <Package className="service-icon" />;
      case 'international':
        return <Globe className="service-icon" />;
      case 'express':
        return <Clock className="service-icon" />;
      case 'specialized':
        return <Shield className="service-icon" />;
      case 'consulting':
        return <Users className="service-icon" />;
      default:
        return <Truck className="service-icon" />;
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-icon-overlay">
                  {getServiceIcon(service.id)}
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <span className="feature-bullet">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
