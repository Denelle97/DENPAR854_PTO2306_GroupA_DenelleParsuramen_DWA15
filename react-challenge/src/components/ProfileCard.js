import React, { useState } from 'react';
import ProfileImage from './ProfileImage';
import ProfileDetails from './ProfileDetails';
import './ProfileCard.css';

/**
 * ProfileCard component displays a profile card with an image, details, and social media links.
 * It also includes a button to toggle between day and night themes.
 * @component
 */
export default function ProfileCard() {
  const [theme, setTheme] = useState('day');

  /**
   * Toggles the theme between 'day' and 'night'.
   * Updates the theme state and sets the data-theme attribute on the document element.
   */
  const toggleTheme = () => {
    const newTheme = theme === 'day' ? 'night' : 'day';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="profile-card">
      <ProfileImage />
      <ProfileDetails />
      <div className="profile-footer">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/denelle.parsuramen" target="_blank"rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/denelle_parsuramen" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/denelle-parsuramen-2a7831253/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'day' ? 'Switch to Night' : 'Switch to Day'}
      </button>
    </div>
  );
}