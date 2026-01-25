import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { useLanguage } from '../../hooks/useLanguage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

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

  const eventPhotos = [
    { id: 1, image: eventPhoto1, alt: 'Transport Logistic Event' },
    { id: 2, image: eventPhoto2, alt: 'Logistics Europe' },
    { id: 3, image: eventPhoto3, alt: 'IAA Transportation' },
    { id: 4, image: eventPhoto4, alt: 'European Transport Conference' },
    { id: 5, image: eventPhoto5, alt: 'Green Logistics Summit' },
    { id: 6, image: eventPhoto6, alt: 'Digital Transport Expo' },
    { id: 7, image: eventPhoto7, alt: 'Community Event' },
    { id: 8, image: eventPhoto8, alt: 'Networking Event' },
  ];

  return (
    <section className="trade-fairs-gallery">
      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">{t('about.tradeFairs.title')}</h2>
          <p className="gallery-description">
            {t('about.tradeFairs.description')}
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="swiper-wrapper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={800}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
           observer={true}
           observeParents={true}
           updateOnWindowResize={true}
           effect="coverflow"
           slidesPerView="auto"

            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            // BREAKPOINTS - Мобилен vs Desktop
            breakpoints={{
              // Мобилен (0-767px) - Обичен carousel
              0: {
                effect: 'slide',
                slidesPerView: 1,
                width: null,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              // Tablet + Desktop (768px+) - Coverflow
              768: {
                effect: 'coverflow',
                slidesPerView: 'auto',
                spaceBetween: 0,
                coverflowEffect: {
                  rotate: 20,
                  stretch: 0,
                  depth: 250,
                  modifier: 1,
                  slideShadows: true,
                },
              },
            }}
            className="events-swiper"
          >
            {eventPhotos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="event-slide">
                  <div className="slide-image-wrapper">
                    <img 
                      src={photo.image} 
                      alt={photo.alt}
                    />
                    <div className="slide-overlay">
                      <div className="overlay-content">
                        <span className="view-text">View Event</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </div>
            <div className="swiper-button-next-custom">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>

            {/* Pagination */}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>

        {/* CTA Button */}
        <div className="gallery-cta">
          <a href="/#contact" className="cta-button">
            {t('about.tradeFairs.cta.button')}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}