import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  //   const [message, setMessage] = useState("Hello");
  const [pokemon, setPokemon] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true); // New loading state

  const getPokemons = async () => {
    const res = await fetch("http://localhost:8080/pokemon");
    const data = await res.json();
    // console.log(data.data);
    setPokemon(data.data);
  };

  const getUsers = async () => {
    const res = await fetch("http://localhost:8080/users/");
    const data = await res.json();
    // console.log(data.data);
    setUsers(data.data);
    setLoading(false); // Set loading to false after users are fetched
  };

  const getUser = async (id) => {
    const res = await fetch(`http://localhost:8080/users/${id}`);
    const data = await res.json();
    // console.log(data.data);
    setUser(data.data);
  };

  useEffect(() => {
    getPokemons();
    getUsers();
    getUser("65fc80004a92c37fd88120c8");
  }, []);

  return (
    <DataContext.Provider value={{ pokemon, users, loading, user }}>
      {props.children}
    </DataContext.Provider>
  );
}
