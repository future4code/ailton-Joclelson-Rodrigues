import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PokerCard from "./components/PokeCard/PokeCard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    pokeApi();
  }, []);

  const pokeApi = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onChangePokeName = (e) => {
    setPokeName(e.target.value);
  };

  return (
    <div className="App">
      <select onChange={onChangePokeName} value={pokeName}>
        <option>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokerCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
