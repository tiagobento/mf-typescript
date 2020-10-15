import * as React from "react";
import "./remotes.d";

export const PokemonListView = ({ list }: { list: Pokemon[] }) => (
  <table>
    <tbody>
      {list.map(({ name, type }) => (
        <tr key={name}>
          <td>
            <strong>{name}</strong>
          </td>
          <td>{type}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
