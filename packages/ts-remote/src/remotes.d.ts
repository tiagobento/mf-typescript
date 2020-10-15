// Ideally, this would live in a TS file.
type Pokemon = {
  name: string;
  type: string;
};

// Ideally, this would be generated from a TS file.
declare module "ts-remote-types/pokemonList" {
  export const getList: (nameFilter: string) => Pokemon[];
}

// Ideally, this would be generated from a TSX file.
declare module "ts-remote-types/PokemonListView" {
  import * as React from "react";
  export const PokemonListView: React.FC<{
    list: Pokemon[];
  }>;
}
