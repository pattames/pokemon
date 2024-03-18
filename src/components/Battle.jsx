import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Battle() {
  const data = useContext(DataContext);

  return (
    <>
      {/* {data.map((pokemon) => (
        <h2>{pokemon.name.english}</h2>
      ))} */}
      <h1>Battle</h1>
    </>
  );
}
