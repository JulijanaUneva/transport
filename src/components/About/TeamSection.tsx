import { useLanguage } from '../../hooks/useLanguage';
import { Mail, Phone, Linkedin } from 'lucide-react';
import './TeamSection.css';

export default function TeamSection() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: 1,
      name: "Marcus Weber",
      position: t('about.team.member1.position'),
      bio: t('about.team.member1.bio'),
      email: "marcus.weber@LKW-connect-transport.de",
      phone: "+49 123 456 789",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Elena Müller",
      position: t('about.team.member2.position'),
      bio: t('about.team.member2.bio'),
      email: "elena.mueller@transport.de",
      phone: "+49 123 456 790",
      linkedin: "#",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
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
