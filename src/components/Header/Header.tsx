import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import type { NavItem } from '../../types';
import './Header.css';
import logoImage from '../../assets/lkw connect logo photo.jpeg';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { currentLanguage, availableLanguages, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setIsLanguageOpen(!isLanguageOpen);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    // If it's an anchor link and we're not on home page, navigate to home first
    if (href.startsWith('#') && location.pathname !== '/') {
      window.location.href = '/' + href;
    } else if (href.startsWith('#')) {
      // We're on home page, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For regular routes, React Router will handle navigation
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    setIsMenuOpen(false);
    
    // If we're already on the home page, scroll to top instead of navigating
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Otherwise, let React Router handle the navigation to home
  };

  const navItems: NavItem[] = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.contact', href: '#contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleHomeClick}>
          <img src={logoImage} alt="LKW Connect Logo" className="logo-image" />
          <span className="logo-text">Julijana</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map(item => {
            if (item.href === '/') {
              return (
                <Link 
                  key={item.key} 
                  to={item.href} 
                  className="nav-link"
                  onClick={handleHomeClick}
                >
                  {t(item.key)}
                </Link>
              );
            } else if (item.href.startsWith('#')) {
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link nav-button"
                >
                  {t(item.key)}
                </button>
              );
            } else {
              return (
                <Link key={item.key} to={item.href} className="nav-link">
                  {t(item.key)}
                </Link>
              );
            }
          })}
        </nav>

        {/* Language Switcher */}
        <div className="language-switcher">
          <button
            onClick={toggleLanguage}
            className="language-button"
            aria-label="Switch language"
          >
            <Globe className="language-icon" />
            <span>{currentLanguage.flag}</span>
          </button>
          
          {isLanguageOpen && (
            <div className="language-dropdown">
              {availableLanguages.map(language => (
                <button
                  key={language.code}
                  onClick={() => {
                    setLanguage(language);
                    setIsLanguageOpen(false);
                  }}
                  className={`language-option ${
                    currentLanguage.code === language.code ? 'active' : ''
                  }`}
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="nav-mobile">
          {navItems.map(item => {
            if (item.href === '/') {
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  className="nav-link-mobile"
                  onClick={handleHomeClick}
                >
                  {t(item.key)}
                </Link>
              );
            } else if (item.href.startsWith('#')) {
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link-mobile nav-button-mobile"
                >
                  {t(item.key)}
                </button>
              );
            } else {
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  className="nav-link-mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              );
            }
          })}
        </nav>
      )}
    </header>
  );
};
