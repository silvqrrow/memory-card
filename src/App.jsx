import { useState, useEffect } from "react";
import Card from "./components/Card";

const POKEMON_NAMES = [
  "pikachu",
  "mew",
  "celebi",
  "jirachi",
  "victini",
  "meltan",
  "marshadow",
  "ditto",
  "hoopa",
  "magearna",
  "manaphy",
  "arceus",
];

function App() {
  const [pokemon, setPokemon] = useState([]);

  function handleCardClick() {
    setPokemon([...pokemon].sort(() => Math.random() - 0.5));
  }

  useEffect(
    () => {
      const pokemonPromises = POKEMON_NAMES.map(async (name) => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`,
          );

          const pokemonData = await response.json();

          return {
            name: pokemonData.name,
            image: pokemonData.sprites.other["official-artwork"].front_default,
          };
        } catch (error) {
          console.error(error);
        }
      });

      Promise.all(pokemonPromises).then((values) => {
        setPokemon(values);
      });

      return () => {
        // cleanup function on unmounting or re-running effect
      };
    },
    // optional dependency array
    [],
  );

  return (
    <>
      <div className="header">
        <h1>Memory Card</h1>
        <div className="scores">
          <p>Score</p>
          <p>Best Score</p>
        </div>
      </div>
      <div className="pokemon-grid">
        {pokemon.map((pokemon) => {
          return (
            <Card
              handleClick={handleCardClick}
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
