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
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  function handleCardClick(pokemonName) {
    // if the pokemon has been clicked
    if (clickedPokemon.includes(pokemonName)) {
      // randomize the list
      setPokemon([...pokemon].sort(() => Math.random() - 0.5));
      // update the score if the best score was higher
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      // reset the current score
      setCurrentScore(0);
      // reset the array
      setClickedPokemon([]);
    } else {
      // add the clicked pokemon to the list
      setClickedPokemon([...clickedPokemon, pokemonName]);
      // increment the score and randomize
      setCurrentScore(currentScore + 1);
      setPokemon([...pokemon].sort(() => Math.random() - 0.5));
    }
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
          <p>Score: {currentScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </div>
      <div className="pokemon-grid">
        {pokemon.map((pokemon) => {
          return (
            <Card
              handleClick={() => handleCardClick(pokemon.name)}
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
