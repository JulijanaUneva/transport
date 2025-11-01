import { useLanguage } from '../../hooks/useLanguage';
import { Calendar, MapPin, Users } from 'lucide-react';
import './TradeFairs.css';
import eventPhoto1 from '../../assets/community event photo 1.jpeg';
import eventPhoto2 from '../../assets/community event photo 2.jpeg';
import eventPhoto3 from '../../assets/community event photo 3.jpeg';
import eventPhoto4 from '../../assets/community event photo 4.jpeg';
import eventPhoto5 from '../../assets/community event photo 5.jpeg';
import eventPhoto6 from '../../assets/community event photo 6.jpeg';
import eventPhoto7 from '../../assets/community event photo 7.jpeg';
import eventPhoto8 from '../../assets/community event photo 8.jpeg';

export default function TradeFairs() {
  const { t } = useLanguage();

  const tradeFairs = [
    {
      id: 1,
      name: "transport logistic 2024",
      location: "Munich, Germany",
      date: "May 7-10, 2024",
      description: "The world's leading trade fair for logistics, mobility, IT and supply chain management",
      status: "completed",
      image: eventPhoto1
    },
    {
      id: 2,
      name: "Logistics Europe 2024",
      location: "Amsterdam, Netherlands",
      date: "September 15-17, 2024",
      description: "European logistics and transport exhibition showcasing latest innovations",
      status: "completed",
      image: eventPhoto2
    },
    {
      id: 3,
      name: "IAA Transportation 2024",
      location: "Hannover, Germany",
      date: "September 17-22, 2024",
      description: "International Motor Show for Commercial Vehicles",
      status: "completed",
      image: eventPhoto3
    },
    {
      id: 4,
      name: "European Transport Conference",
      location: "Vienna, Austria",
      date: "March 12-14, 2025",
      description: "Annual conference bringing together transport professionals across Europe",
      status: "upcoming",
      image: eventPhoto4
    },
    {
      id: 5,
      name: "Green Logistics Summit",
      location: "Copenhagen, Denmark",
      date: "June 20-22, 2025",
      description: "Focus on sustainable transport solutions and environmental initiatives",
      status: "upcoming",
      image: eventPhoto5
    },
    {
      id: 6,
      name: "Digital Transport Expo",
      location: "Berlin, Germany", 
      date: "October 8-10, 2025",
      description: "Showcasing digital transformation in logistics and transportation",
      status: "upcoming",
      image: eventPhoto6
    }
  ];

  const upcomingFairs = tradeFairs.filter(fair => fair.status === 'upcoming');
  const completedFairs = tradeFairs.filter(fair => fair.status === 'completed');

  return (
    <section className="trade-fairs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.tradeFairs.title')}</h2>
          <p className="section-description">
            {t('about.tradeFairs.description')}
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="events-section">
          <h3 className="events-title">
            <Calendar className="title-icon" />
            {t('about.tradeFairs.upcoming')}
          </h3>
          <div className="events-grid">
            {upcomingFairs.map((fair) => (
              <div key={fair.id} className="event-card upcoming">
                <div className="event-image-container">
                  <img src={fair.image} alt={fair.name} className="event-image" />
                  <div className="event-status">{t('about.tradeFairs.upcomingBadge')}</div>
                </div>
                <div className="event-content">
                  <h4 className="event-name">{fair.name}</h4>
                  <div className="event-details">
                    <div className="event-detail">
                      <MapPin size={16} />
                      <span>{fair.location}</span>
                    </div>
                    <div className="event-detail">
                      <Calendar size={16} />
                      <span>{fair.date}</span>
                    </div>
                  </div>
                  <p className="event-description">{fair.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="events-section">
          <h3 className="events-title">
            <Users className="title-icon" />
            {t('about.tradeFairs.recent')}
          </h3>
          <div className="events-grid">
            {completedFairs.map((fair) => (
              <div key={fair.id} className="event-card completed">
                <div className="event-image-container">
                  <img src={fair.image} alt={fair.name} className="event-image" />
                  <div className="event-status completed-status">{t('about.tradeFairs.completedBadge')}</div>
                </div>
                <div className="event-content">
                  <h4 className="event-name">{fair.name}</h4>
                  <div className="event-details">
                    <div className="event-detail">
                      <MapPin size={16} />
                      <span>{fair.location}</span>
                    </div>
                    <div className="event-detail">
                      <Calendar size={16} />
                      <span>{fair.date}</span>
                    </div>
                  </div>
                  <p className="event-description">{fair.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="events-cta">
          <div className="cta-content">
            <h3>{t('about.tradeFairs.cta.title')}</h3>
            <p>
              {t('about.tradeFairs.cta.description')}
            </p>
            <a href="/#contact" className="cta-button">
              {t('about.tradeFairs.cta.button')}
            </a>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="events-section">
          <h3 className="events-title">
            <Users className="title-icon" />
            {t('about.tradeFairs.eventGallery')}
          </h3>
          <div className="photo-gallery">
            <img src={eventPhoto7} alt="Community Event" className="gallery-photo" />
            <img src={eventPhoto8} alt="Community Event" className="gallery-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
