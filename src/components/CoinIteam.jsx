import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

export const CoinIteam = ({ coin }) => {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="flex items-center">
          <img src={coin.image} alt={coin.id} className="w-6 mr-2 rounded-full" />
          <p className="hidden sm:table-cell">{coin.name}</p>
        </div>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td
        className={
          coin.price_change_percentage_24h >= 0
            ? "text-center text-green-600"
            : "text-center text-red-600"
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td className="w-[180px] hidden md:table-cell">${coin.total_volume.toLocaleString()}</td>
      <td className="w-[180px] hidden sm:table-cell">${coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};
