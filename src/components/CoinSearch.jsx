import React from "react";
import { CoinIteam } from "./CoinIteam";

export const CoinSearch = ({ coins }) => {
  // console.log(coins);
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type="text" placeholder="Search a coin" />
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
          {coins.map((coin) => (
            <CoinIteam coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
