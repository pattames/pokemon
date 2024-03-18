
import React, { useState } from 'react';
import Authentication from './components mathieu/Authentification.jsx';
import MainContent from './components mathieu/MainContent';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleAuthenticate = (username) => {
    setAuthenticated(true);
    setUsername(username);
  };

  return (
    <div>
      {authenticated ? (
        <MainContent username={username} />
      ) : (
        <Authentication onAuthenticate={handleAuthenticate} />
      )}
    </div>
  );
}

export default App;
