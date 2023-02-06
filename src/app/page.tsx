/* eslint-disable @next/next/no-img-element */
import { cryptoData } from "@/data/data";
import Image from "next/image";
import { Suspense } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";
// import Loading from "./loading";

interface cryptoDataType {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
}

const getCoins = async () => {
  const options = {
    method: "GET",

    headers: {
      "X-RapidAPI-Key": "ea4afc88f8mshe9c07843689f0f4p153de1jsn2cdc8454bc6f",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const res = await await fetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
    options
  ).then((resp) => resp.json());

  return res.data.coins;
};

export default async function Home() {
  const coinsData = await getCoins();

  return (
    <div className="flex flex-col space-y-6  w-full">
      <span className="text-2xl">Crypto rankings in the world</span>
      {/* <Suspense fallback={<Loading />}> */}
      <div className="grid 	grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xs md:text-base  gap-6  ">
        {coinsData
          .filter((data: any) => data.rank < 10)
          .map((data: cryptoDataType, id: any) => (
            <div key={id} className="bg-dark p-4 rounded-md  flex flex-col">
              <div className="flex flex-col md:flex-row justify-between pb-10">
                <span>
                  {id + 1}.{data.name}
                </span>
                <Image
                  src={data.iconUrl}
                  alt="cryptIcon"
                  height={20}
                  width={20}
                ></Image>
                {/* <span>hello</span> */}
              </div>
              <div className="flex justify-between items-center pb-3">
                <span>marketCap:</span>
                <span className="text-gray-400 text-xs md:text-sm">
                  {data.marketCap}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span>price:</span>
                <span className="text-gray-400 text-xs md:text-sm">
                  {parseFloat(data.price).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span>listed at:</span>
                <span className="text-gray-400 text-xs md:text-sm">
                  {data.listedAt}
                </span>
              </div>
              <div className="flex justify-between items-center pb-3">
                <span>change:</span>
                <span className="text-gray-400 text-xs md:text-sm">
                  {data.change}
                </span>
              </div>
            </div>
          ))}
      </div>
      {/* </Suspense> */}
    </div>
  );
}
