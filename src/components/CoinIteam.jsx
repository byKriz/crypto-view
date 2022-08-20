import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

export const CoinIteam = ({ coin }) => {
  return (
    <tr>
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
      <td
        className={
          coin.price_change_percentage_24h >= 0
            ? "text-center text-green-500"
            : "text-center text-red-500"
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>{coin.total_volume}</td>
      <td>{coin.market_cap}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};
