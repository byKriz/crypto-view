import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SaveCoin = () => {
  const [coins, setCoins] = useState([]);

  return (
    <div>
      {coins.length === 0 ? (
        <p>
          You don't have any coin saved. Please save a coin to add into watch
          list
          <Link to="/" className="text-accent">
            {" "}
            Click here to search coins.
          </Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #1</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin?.id} className='h-[60px] overflow-hidden'>
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin?.id}`}>
                    <div className="flex items-center">
                      <img
                        src={coin?.image}
                        alt={coin?.id}
                        className="w-8 mr-4"
                      />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-gray-500 text-left text-sm">{coin?.symbol.toUpperCase()}</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8">
                  <AiOutlineClose className="cursor-pointer"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};