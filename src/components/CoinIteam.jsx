import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const CoinIteam = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false);
  const [starState, setStarState] = useState(false);
  const { user } = UserAuth();

  // Logica para hover de la estrella
  const handleStarOver = () => setStarState(true);
  const handleStarOut = () => setStarState(!starState);
  const checkStar = () => {
    if (savedCoin === true || starState === true) {
      return <AiFillStar />;
    } else {
      return <AiOutlineStar />;
    }
  };

  // La lógica para guardar la moneda
  const coinPath = doc(db, "users", `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol.toUpperCase(),
        }),
      });
    } else {
      alert("Please sign in to save a coin in your watch list");
    }
  };

  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td
        onMouseOver={handleStarOver}
        onMouseOut={handleStarOut}
        onClick={saveCoin}
      >
        {/* {starState ? <AiFillStar /> : <AiOutlineStar />} */}
        {/* {savedCoin ? <AiFillStar /> : <AiOutlineStar />} */}
        {checkStar()}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              src={coin.image}
              alt={coin.id}
              className="w-6 mr-2 rounded-full"
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
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
      <td className="w-[180px] hidden md:table-cell">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};
