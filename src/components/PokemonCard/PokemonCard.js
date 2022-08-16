import React from 'react'
import { PokeCardContainer, PokeImg, ButtonsContainer, ImgContainer } from './styled';

const PokemonCard =({pokemon}) => {
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
                <button>
                    Ver detalhes
                </button>
            </ButtonsContainer>
        </PokeCardContainer>
    )
}
export default PokemonCard