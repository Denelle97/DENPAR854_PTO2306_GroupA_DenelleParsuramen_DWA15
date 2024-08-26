import React from 'react';
import profilePic from '../images/profile-pic.jpg'; 

/**
 * ProfileImage component displays the profile picture.
 * @component
 * @returns {JSX.Element} The ProfileImage component.
 */
export default function ProfileImage() {
  return <img src={profilePic} alt="Profile" className="profile-image" />;
}