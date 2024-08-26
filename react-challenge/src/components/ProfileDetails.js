import React from 'react';

/**
 * ProfileDetails component displays the details of the profile.
 * It includes the name, title, email button, about section, and interests section.
 * @component
 * @returns {JSX.Element} The ProfileDetails component.
 */
export default function ProfileDetails() {
  return (
    <div className="profile-details">
      <h1>Denelle Parsuramen</h1>
      <h2>Software Developer</h2>

      <button>Email</button>

      <section>
        <h3>About</h3>
        <p>I am a part time student that is currently studying software development with CodeSpace. I am working for Jenny Internet which 
            is an Internet service provider that assists customers with internet services as well as web hosting and domain registrations.
             I am always looking for new things to learn.</p>
      </section>
      <section>
        <h3>Interests</h3>
        <ul>
            <li>Self development</li>
            <li>Digital Art and Design</li>
            <li>Travel and Culture</li>
            <li>Reading</li>
        </ul>
      </section>
    </div>
  );
}