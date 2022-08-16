import React from 'react'
import { goToPokemonsDetail } from '../../routes/coordinator';
import { PokeCardContainer, PokeImg, ButtonsContainer, ImgContainer } from './styled';
import { useHistory } from 'react-router-dom';

const PokemonCard =({pokemon}) => {
    const history = useHistory()
    return(
        <PokeCardContainer>
            <ImgContainer>
            <PokeImg
            src={pokemon.sprites && pokemon.sprites.front_default} 
            alt={pokemon.name} />
            </ImgContainer>
            <ButtonsContainer>
                <button>
                    Adcionar a Pokedex
                </button>
                <button onClick ={()=>goToPokemonsDetail(history, pokemon.name)}>
                    Ver detalhes
                </button>
            </ButtonsContainer>
        </PokeCardContainer>
    )
}
export default PokemonCard