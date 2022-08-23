import React, { useState, useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaFacebook, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";

export const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams() //creando el link dinamico gracias al endpoint en App.js de /:coinId

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className="rounded-div my-12 py-8">
      <div className="flex py-8">
        <img className="w-20 mr-8" src={coin.image?.large} alt={coin.id} />
        <div>
          <p className="text-3xl font-bold">{coin.name} price:</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between">
            <p className="text-3xl font-bold">
              {coin.market_data?.current_price.usd.toLocaleString()}
            </p>
            <p>7 Days</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Cap</p>
              <p>
                $
                {coin.market_data?.market_cap.usd
                  ? coin.market_data?.market_cap.usd.toLocaleString()
                  : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Volume (24h)</p>
              <p>
                $
                {coin.market_data?.total_volume.usd
                  ? coin.market_data?.total_volume.usd.toLocaleString()
                  : "N/A"}
              </p>
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">24 High</p>
              <p>
                $
                {coin.market_data?.high_24h.usd
                  ? coin.market_data?.high_24h.usd.toLocaleString()
                  : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">24 Low</p>
              <p>
                $
                {coin.market_data?.low_24h.usd
                  ? coin.market_data?.low_24h.usd.toLocaleString()
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Market Rank</p>
              <p>{coin.market_cap_rank}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Hashing Algorithm</p>
              <p>{coin.hashing_algorithm ? coin.hashing_algorithm : "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Trust Score</p>
              <p>{coin.tickers ? coin.liquidity_score.toFixed(2) : "N/A"}</p>
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Price Change (24h)</p>
              <p
                className={
                  coin.market_data?.price_change_percentage_24h >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {coin.market_data
                  ? coin.market_data?.price_change_percentage_24h.toFixed(2)
                  : "N/A"}
                %
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (7d)</p>
              <p
                className={
                  coin.market_data?.price_change_percentage_7d >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {coin.market_data
                  ? coin.market_data?.price_change_percentage_7d.toFixed(2)
                  : "N/A"}
                %
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (14d)</p>
              <p
                className={
                  coin.market_data?.price_change_percentage_14d >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {coin.market_data
                  ? coin.market_data?.price_change_percentage_14d.toFixed(2)
                  : "N/A"}
                %
              </p>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">Price Change (30d)</p>
              <p
                className={
                  coin.market_data?.price_change_percentage_30d >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {coin.market_data
                  ? coin.market_data?.price_change_percentage_30d.toFixed(2)
                  : "N/A"}
                %
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (60d)</p>
              <p
                className={
                  coin.market_data?.price_change_percentage_60d >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {coin.market_data
                  ? coin.market_data?.price_change_percentage_60d.toFixed(2)
                  : "N/A"}
                %
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Price Change (1y)</p>
              <p
                className={
                  coin.market_data?.price_change_percentage_1y >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {coin.market_data
                  ? coin.market_data?.price_change_percentage_1y.toFixed(2)
                  : "N/A"}
                %
              </p>
            </div>
          </div>
          <div className="flex justify-around p-8 text-accent">
            <FaTwitter className=" hover:scale-150 duration-300 ease-in-out" />
            <FaFacebook className=" hover:scale-150 duration-300 ease-in-out" />
            <FaReddit className=" hover:scale-150 duration-300 ease-in-out" />
            <FaGithub className=" hover:scale-150 duration-300 ease-in-out" />
          </div>
        </div>
      </div>

      {/* descripcion de las ciptomoneda */}
      <div>
        <p className="text-xl font-bold">About {coin.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};
