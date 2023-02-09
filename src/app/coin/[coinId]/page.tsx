import Chart from "@/components/Chart";
import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import React from "react";
import { Line } from "react-chartjs-2";
interface coinDetaisIdParams {
  params: { coinId: string };
}

const CoinDetails = async ({ params }: coinDetaisIdParams) => {
  // const { coinId = "Qwsogvtv82FCd" } = params;
  const coinId = "Qwsogvtv82FCd";
  // console.log(coinId);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ea4afc88f8mshe9c07843689f0f4p153de1jsn2cdc8454bc6f",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const coinDetail = await fetch(
    `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
    options
  )
    .then((resp) => resp.json())
    .then((resp) => resp.data.coin);

  const singleCoinDetail = await fetch(
    `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=7d`,
    options
  )
    .then((resp) => resp.json())
    .then((data) => data.data.coin);
  // console.log(singleCoinDetail);
  const {
    name,
    description,
    price,
    rank,
    listedAt,
    marketCap,
    change,
    tier,
    numberOfMarkets,
    numberOfExchanges,
    fullyDilutedMarketCap,
    links,
    url,
  } = singleCoinDetail;
  //   console.log(coinDetail);
  return (
    <div className="flex flex-col space-y-8 w-full">
      <span className="flex flex-col md:flex-row   space-x-4 items-center">
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-cyan">{coinDetail?.name}</span>
          <span className="text-sm"> Price Chart </span>
        </div>
        <span className="text-sm text-slate-400">
          -1970&apos;s timestamps are provided by coinranking(rapidAPI)
        </span>
      </span>
      {/* <Line data={data} /> */}
      <Chart id={coinId} />

      <div className="flex flex-col md:flex-row space-x-0 space-y-6 md:space-y-0 md:space-x-6 justify-between">
        <div className="flex flex-col w-full bg-dark p-4">
          <span className="mb-6">{coinDetail?.name} statistics:</span>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3">
              <span>Price at USD:</span>
              <span>{price}</span>
            </div>
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Rank:</span>
              <span>{rank}</span>
            </div>
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Listed At:</span>
              <span>{listedAt}</span>
            </div>

            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Market Cap:</span>
              <span>{marketCap}</span>
            </div>
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Change:</span>
              <span>{change}</span>
            </div>
            <div className="flex flex-row justify-between  pb-3 pt-3">
              <span>Tier:</span>
              <span>{tier}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-dark p-4">
          <span className="mb-6">Other statistics:</span>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3">
              <span>Fully Diluted Market Cap:</span>
              <span>{fullyDilutedMarketCap}</span>
            </div>
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Number of Markets:</span>
              <span>{numberOfMarkets}</span>
            </div>
            <div className="flex flex-row justify-between  pb-3 pt-4">
              <span>Number of Exchanges:</span>
              <span>{numberOfExchanges}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-0 space-y-6 md:space-y-0 md:space-x-6 justify-between">
        <div className="pt-4 flex flex-col">
          <span className="text-cyan text-xl">What is {name} ?</span>
          <span className="pt-4">{HTMLReactParser(description)}</span>
        </div>
        <div className="bg-dark rounded-md flex flex-col w-full p-4">
          <span>
            <span className="text-cyan text-lg">{name}</span> Links:
          </span>
          {links.map((data: any, id: number) => (
            <div
              className="flex flex-row justify-between space-x-8 pb-3 pt-4"
              key={id}
            >
              <span className="text-sm">{data.type}</span>

              <span className=" text-slate-400 text-end hover:text-cyan cursor-pointer">
                <Link href={data.url} target="_blank">
                  {data.name}
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
