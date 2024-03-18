import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  //   const [message, setMessage] = useState("Hello");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch("http://localhost:8080/pokemon");
      const data = await res.json();
      console.log(data.data);
      setPokemon(data.data);
    };
    getPokemon();
  }, []);

  return (
    <DataContext.Provider value={pokemon}>
      {props.children}
    </DataContext.Provider>
  );
}
