import { useLanguage } from '../../hooks/useLanguage';
import { Mail, Phone, Linkedin } from 'lucide-react';
import './TeamSection.css';
import MarijaImg from '/src/assets/marijaWeathergirl.png';
import IvaImg from '/src/assets/IvaPhoto.png';

export default function TeamSection() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: 1,
      name: "Iva Novakova",
      position: t('about.team.member1.position'),
      bio: t('about.team.member1.bio'),
      email: "lkwconnectbg@gmail.com",
      phone: "+389 78 475 744",
      linkedin: "#",
      image: IvaImg
    },
    {
      id: 2,
      name: "Marija Vasileva",
      position: t('about.team.member2.position'),
      bio: t('about.team.member2.bio'),
      email: "lkwconnectbg@gmail.com",
      phone: "+389 78 475 744",
      linkedin: "#",
      image: MarijaImg
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.team.title')}</h2>
          <p className="section-description">
            {t('about.team.description')}
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="member-image"
                />
                <div className="image-overlay">
                  <div className="team-social-links">
                    <a href={`mailto:${member.email}`} className="team-social-link">
                      <Mail size={18} />
                    </a>
                    <a href={`tel:${member.phone}`} className="team-social-link">
                      <Phone size={18} />
                    </a>
                    <a href={member.linkedin} className="team-social-link">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
                
                <div className="member-contact">
                  <div className="contact-item">
                    <Mail size={16} />
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} />
                    <a href={`tel:${member.phone}`}>{member.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
