import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePokemonsListScreen from '../screens/HomePokemonsListScreen/HomePokemonsListScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen/PokemonDetailsScreen';
import PokedexScreen from '../screens/PokedexScreen/PokedexScreen';


const Router =() => {
    return(
        <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={HomePokemonsListScreen}/>
          <Route exact path={"/pokemon/:name"} component={PokemonDetailsScreen} />
            <Route exact path={"/pokedex"} component={PokedexScreen }/>
            <div>Erro: Página não encontrada</div>
        </Switch>
      </BrowserRouter>
    )
}

export default Router