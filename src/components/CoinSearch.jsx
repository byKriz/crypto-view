import React, { useState } from "react";
import { CoinIteam } from "./CoinIteam";

export const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search a coin" />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>% Change 24h</th>
            <th>Volume</th>
            <th>MarketCap</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {/* filtro la busqueda y mapeo los resultados */}
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase()) || value.symbol.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinIteam coin={coin} key={coin.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
