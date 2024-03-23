import { createContext, useState } from "react";

export const SelectPokeContext = createContext();

export default function SelectPokeContextProvider(props) {
  const [selectPokemon, setSelectPokemon] = useState(null);
  const [selectOpponent, setSelectOpponent] = useState(null);

  return (
    <SelectPokeContext.Provider
      value={{
        selectPokemon,
        setSelectPokemon,
        selectOpponent,
        setSelectOpponent,
      }}
    >
      {props.children}
    </SelectPokeContext.Provider>
  );
}
