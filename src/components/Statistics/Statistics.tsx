import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Truck, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { Statistic } from '../../types';
import './Statistics.css';

export const Statistics: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLElement>(null);
  
  const statisticsData = React.useMemo<Statistic[]>(() => [
    {
      id: 'years-experience',
      value: 15,
      label: t('stats.yearsExperience'),
      suffix: '+',
      prefix: ''
    },
    {
      id: 'happy-clients',
      value: 2500,
      label: t('stats.happyClients'),
      suffix: '+',
      prefix: ''
    },
    {
      id: 'vehicles',
      value: 120,
      label: t('stats.vehicles'),
      suffix: '',
      prefix: ''
    },
    {
      id: 'countries',
      value: 28,
      label: t('stats.countries'),
      suffix: '',
      prefix: ''
    }
  ], [t]);

  const getStatIcon = (statId: string) => {
    switch (statId) {
      case 'years-experience':
        return <TrendingUp className="stat-icon" />;
      case 'happy-clients':
        return <Users className="stat-icon" />;
      case 'vehicles':
        return <Truck className="stat-icon" />;
      case 'countries':
        return <Globe className="stat-icon" />;
      default:
        return <TrendingUp className="stat-icon" />;
    }
  };

  const animateValue = (id: string, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutCubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(start + (end - start) * easeOutCubic);
      
      setAnimatedValues(prev => ({
        ...prev,
        [id]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const animateCounters = React.useCallback(() => {
    statisticsData.forEach((stat) => {
      animateValue(stat.id, 0, stat.value, 2000);
    });
  }, [statisticsData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, animateCounters]);

  return (
    <section ref={sectionRef} className="statistics">
      <div className="statistics-background">
        <div className="statistics-overlay"></div>
      </div>
      
      <div className="container">
        <div className="statistics-header">
          <h2 className="section-title statistics-title">{t('statistics.title')}</h2>
          <p className="section-subtitle statistics-subtitle">
            {t('statistics.subtitle')}
          </p>
        </div>
        
        <div className="statistics-grid">
          {statisticsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`statistic-card ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="stat-icon-container">
                {getStatIcon(stat.id)}
              </div>
              
              <div className="stat-content">
                <div className="stat-number">
                  {stat.prefix}
                  <span className="stat-value">
                    {animatedValues[stat.id] !== undefined ? animatedValues[stat.id] : 0}
                  </span>
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
              
              <div className="stat-pulse"></div>
            </div>
          ))}
        </div>
        
        {/* Additional info section */}
        <div className="statistics-info">
          <div className="info-grid">
            <div className="info-item">
              <h4>{t('statistics.reliability')}</h4>
              <p>{t('statistics.reliability.description')}</p>
            </div>
            <div className="info-item">
              <h4>{t('statistics.safety')}</h4>
              <p>{t('statistics.safety.description')}</p>
            </div>
            <div className="info-item">
              <h4>{t('statistics.coverage')}</h4>
              <p>{t('statistics.coverage.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
