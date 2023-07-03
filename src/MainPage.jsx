import { Outlet } from 'react-router-dom';
import PokemonList from './PokemonList';

function MainPage() {
  return (
    <div>
      <h1>WDCC Pokédex</h1>
      <PokemonList />
      <Outlet />
    </div>
  );
}

export default MainPage;
