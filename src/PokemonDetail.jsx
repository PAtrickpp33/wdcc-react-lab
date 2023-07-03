export default function PokemonDetail({ pokemon }) {
    return (
        <div>
            <h1>#{String(pokemon.dexNumber).padStart(3, '0')}</h1>
            <div>{pokemon.name}</div>
            <img src={pokemon.imageUrl} alt={pokemon.name}></img>
            <h2>{pokemon.dexEntry}</h2>
        </div>
    );
}

