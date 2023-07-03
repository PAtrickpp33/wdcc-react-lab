import styles from './RedButton.module.css';

export default function PokemonList({ mons, setSelectedPokemon }) {
    return (
        <ul>
            {mons.map((mon, index) => (
                <li key={mon.dexNumber} 
                    className={index % 2 === 0 ? styles.red : styles.white} 
                    onClick={() => setSelectedPokemon(mon)}
                >
                    {String(mon.dexNumber).padStart(3, '0')} - {mon.name}
                </li>
            ))}
        </ul>
    );
}

