import React, { useContext } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Header from '../../components/Header/Header';
import { PokeListContainer } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import { goToPokedex } from '../../routes/coordinator';

const HomePokemonsListScreen =() => {
    const {pokemons} = useContext(GlobalStateContext)
    const history = useHistory()
return(
    <>
        <Header
        title={"Lista de Pokemons"}
        leftButtonFunction={()=> goToPokedex(history)}
        />
        <PokeListContainer>
        {pokemons &&
        pokemons.map((poke)=>{
            return <PokemonCard key={poke.name} poke={poke}/>
        })}
        </PokeListContainer>
    </>
)
}
export default HomePokemonsListScreen