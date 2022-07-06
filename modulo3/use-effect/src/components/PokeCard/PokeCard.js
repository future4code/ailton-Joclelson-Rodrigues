import React, { useEffect, useState } from "react";
import axios from "axios";
import './styled.css'

export default function PokerCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon();
  }, [props.pokemon]);

  const pegaPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (<img src={pokemon.sprites.front_default} alt={pokemon.name} />)}
    </div>
  );
}
