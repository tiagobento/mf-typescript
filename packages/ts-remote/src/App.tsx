import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";

import { getList } from "./pokemonList";
import { PokemonListView } from "./PokemonListView";

const App = () => (
  <div>
    <h1>TS-REMOTE</h1>
    <PokemonListView list={getList("Bulb")} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
