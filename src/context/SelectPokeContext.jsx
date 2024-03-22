import { createContext, useState } from "react";

export const SelectPokeContext = createContext();

export default function SelectPokeContextProvider(props) {
  const [selectPokemon, setSelectPokemon] = useState(null);
  return (
    <SelectPokeContext.Provider value={{ selectPokemon, setSelectPokemon }}>
      {props.children}
    </SelectPokeContext.Provider>
  );
}
