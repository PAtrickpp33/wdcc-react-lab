import React, { useState } from 'react';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import mons from './pokemon.json';
import styles from './App.module.css';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(mons[0]);

  return (
    <>
    <h1>WDCC Pokédex</h1>
    <div className={styles.container}>
      
      <div className={styles.left}>
        <PokemonList mons={mons} setSelectedPokemon={setSelectedPokemon} />
      </div>
      <div className={styles.right}>
        <div className={styles.squareWindow}>
          <PokemonDetail pokemon={selectedPokemon} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;


