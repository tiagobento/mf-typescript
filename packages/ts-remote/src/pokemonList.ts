import "./remotes.d";

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    type: "Fire",
  },
  {
    name: "Bulbafoo",
    type: "Earth",
  },
];

export const getList = (nameFilter: string) => {
  return pokemon.filter(({ name }) => name.includes(nameFilter));
};
