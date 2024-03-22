
import React from 'react';

const MainContent = ({ username }) => { // Receive username prop
  return (
    <div>
      <h2>Welcome to the Pokemon World, {username}!</h2>
      <p>POKeshits here</p>
    </div>
  );
};

export default MainContent;