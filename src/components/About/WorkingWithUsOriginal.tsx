import { useLanguage } from '../../hooks/useLanguage';
import { Handshake, Shield, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import './WorkingWithUs.css';
import { Link } from 'react-router-dom';

export default function WorkingWithUs() {
  const { t } = useLanguage();
  const benefits = [
    {
      icon: Shield,
      title: t('about.working.benefits.reliablePartnership.title'),
      description: t('about.working.benefits.reliablePartnership.description')
    },
    {
      icon: Clock,
      title: t('about.working.benefits.support24.title'),
      description: t('about.working.benefits.support24.description')
    },
    {
      icon: Award,
      title: t('about.working.benefits.qualityAssurance.title'),
      description: t('about.working.benefits.qualityAssurance.description')
    },
    {
      icon: CheckCircle,
      title: t('about.working.benefits.provenTrackRecord.title'), 
      description: t('about.working.benefits.provenTrackRecord.description')
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: t('about.working.process.step1.title'),
      description: t('about.working.process.step1.description')
    },
    {
      step: "02", 
      title: t('about.working.process.step2.title'),
      description: t('about.working.process.step2.description')
    },
    {
      step: "03",
      title: t('about.working.process.step3.title'),
      description: t('about.working.process.step3.description')
    },
    {
      step: "04",
      title: t('about.working.process.step4.title'),
      description: t('about.working.process.step4.description')
    }
  ];

  const partnershipTypes = [
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

  return (
    <section className="working-with-us">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{t('about.working.title')}</h2>
          <p className="section-description">
            {t('about.working.description')}
          </p>
        </div>

        {/* Benefits */}
        <div className="benefits-section">
          <h3 className="subsection-title">
            <Handshake className="title-icon" />
            {t('about.working.benefits.title')}
          </h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <IconComponent />
                  </div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process */}
        <div className="process-section">
          <h3 className="subsection-title">{t('about.working.process.title')}</h3>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector">
                    <ArrowRight className="connector-arrow" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="partnership-section">
          <h3 className="subsection-title">{t('about.working.solutions.title')}</h3>
          <div className="partnership-grid">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="partnership-card">
                <h4 className="partnership-title">{type.title}</h4>
                <p className="partnership-description">{type.description}</p>
                <ul className="partnership-features">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="partnership-feature">
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
            <p>
              {t('about.working.cta.description')}
            </p>
            <div className="cta-buttons">
              {/* <a href="/#contact" className="primary-button">
                {t('about.working.cta.getStarted')}
              </a> */}
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
