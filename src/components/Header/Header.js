import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./styled";
import { goToPokedex } from "../../routes/coordinator";

const Header = ({ leftButtonFunction, title, showRightButton }) => {
  const history = useHistory();

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokémons":
        return "Ir para Pokedex";
      case "Pokédex":
        return "Voltar para lista de pokemons";
      default:
        return "Voltar";
    }
  };

  return (
    <HeaderContainer>
      <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </LeftHeaderButton>
      <h1>{title}</h1>
      {showRightButton && (
        <RightHeaderButton onClick={() => goToPokedex(history)}>
          Ir para pokedex
        </RightHeaderButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
