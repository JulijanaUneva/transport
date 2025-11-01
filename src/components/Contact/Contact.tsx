import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { ContactFormData } from '../../types';
import './Contact.css';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call - Replace with actual Nodemailer integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h3>{t('contact.getInTouch')}</h3>
              <p>{t('contact.description')}</p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div className="contact-details">
                  <h4>{t('contact.phone')}</h4>
                  <p>+49 123 456 7890</p>
                  <span>{t('contact.hours')}</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail />
                </div>
                <div className="contact-details">
                  <h4>{t('contact.email')}</h4>
                  <p>info@transportco.com</p>
                  <span>{t('contact.response')}</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <MapPin />
                </div>
                <div className="contact-details">
                  <h4>{t('contact.address')}</h4>
                  <p>Hauptstraße 123</p>
                  <span>12345 Berlin, Germany</span>
                </div>
              </div>
            </div>
            
            {/* Company Image */}
            <div className="contact-image">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Transport company office"
                className="company-image"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <User className="label-icon" />
                    {t('contact.form.fullName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder={t('contact.form.fullNamePlaceholder')}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail className="label-icon" />
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <Phone className="label-icon" />
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    <MessageSquare className="label-icon" />
                    {t('contact.form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input form-select"
                  >
                    <option value="">{t('contact.form.subjectPlaceholder')}</option>
                    <option value="road-transport">Road Transport</option>
                    <option value="logistics">Logistics Solutions</option>
                    <option value="international">International Shipping</option>
                    <option value="express">Express Delivery</option>
                    <option value="specialized">Specialized Transport</option>
                    <option value="consulting">Transport Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <MessageSquare className="label-icon" />
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-input form-textarea"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`form-submit ${isSubmitting ? 'submitting' : ''} ${submitStatus}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="submit-icon" />
                    {t('contact.form.send')}
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="submit-message success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="submit-message error">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
