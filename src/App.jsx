import { useState, useContext } from "react";
import { DataContext } from "./context/DataContext";
import Authentication from "./components mathieu/Authentification.jsx";
import MainContent from "./components mathieu/MainContent";
import { BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";
import Battle from "./components/Battle.jsx";
import OnePokemon from "./components mathieu/OnePokemon.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleAuthenticate = (username) => {
    setAuthenticated(true);
    setUsername(username);
  };

  return (
    <div>
      {authenticated ? (
       <BrowserRouter>
       <MainContent/>
       <Landing />
       <OnePokemon/>
       <Battle />
     </BrowserRouter>
      ) : (
        <Authentication onAuthenticate={handleAuthenticate} />
      )}
      
    </div>
  );
}

export default App;
