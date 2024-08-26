import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

/**
 * App component serves as the root component of the application.
 * It renders the ProfileCard component.
 * @component
 * @returns {JSX.Element} The App component.
 */
function App() {
  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

export default App;