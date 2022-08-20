import React from "react";
import { AiOutlineStar } from "react-icons/ai";

export const CoinSearch = ({ coins }) => {
  console.log(coins);
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
            <tr key={coin.id}>
              <td>
                <AiOutlineStar />
              </td>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div className="flex gap-2">
                  <img src={coin.image} alt={coin.id} className=" h-5" />
                  <p>{coin.name}</p>
                </div>
              </td>
              <td className=" text-center">{coin.symbol}</td>
              <td>{coin.current_price}$</td>
              <td className={coin.price_change_percentage_24h >= 0 ? "text-center text-green-500" : "text-center text-red-500"}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>{coin.total_volume}</td>
              <td>{coin.market_cap}</td>
              <td>{coin.sparkline_in_7d.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
