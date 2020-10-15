import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";

import "ts-remote";
import { getList } from "ts-remote-types/pokemonList";
import { PokemonListView } from "ts-remote-types/PokemonListView";

const App = () => (
  <div>
    <h1>TS-HOST (this consumes TS-REMOTE modules)</h1>
    <PokemonListView list={getList("Bulb")} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
