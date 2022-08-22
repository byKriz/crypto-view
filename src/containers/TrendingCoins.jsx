import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendCoin } from "../components/TrendCoin";

export const TrendingCoins = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      // console.log(response.data.coins);
    });
  }, []);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h2 className="text-2xl font-bold py-4">Trending Coins</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin) => (
          <TrendCoin coin={coin} key={coin.item.id} />
        ))}
      </div>
    </div>
  );
};
