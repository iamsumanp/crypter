// import h from "html-react-parser";
import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const CoinDetailC = ({ coinDetail, singleCoinDetail }: any) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col md:flex-row space-x-0 space-y-6 md:space-y-0 md:space-x-6 justify-between">
        <div className="flex flex-col w-full bg-dark p-4">
          <span className="mb-6">{coinDetail?.name} statistics:</span>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3">
              <span>Price at USD:</span>
              <span>{singleCoinDetail?.price}</span>
            </div>
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Rank:</span>
              <span>{singleCoinDetail?.rank}</span>
            </div>
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Listed At:</span>
              <span>{singleCoinDetail?.listedAt}</span>
            </div>

            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Market Cap:</span>
              <span>{singleCoinDetail?.marketCap}</span>
            </div>
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Change:</span>
              <span>{singleCoinDetail?.change}</span>
            </div>
            <div className="flex flex-row justify-between  pb-3 pt-3">
              <span>Tier:</span>
              <span>{singleCoinDetail?.tier}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-dark p-4">
          <span className="mb-6">Other statistics:</span>
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3">
              <span>Fully Diluted Market Cap:</span>
              <span>{singleCoinDetail?.fullyDilutedMarketCap}</span>
            </div>
            <div className="flex flex-row justify-between border-b border-slate-400 pb-3 pt-4">
              <span>Number of Markets:</span>
              <span>{singleCoinDetail?.numberOfMarkets}</span>
            </div>
            <div className="flex flex-row justify-between  pb-3 pt-4">
              <span>Number of Exchanges:</span>
              <span>{singleCoinDetail?.numberOfExchanges}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-x-0 space-y-6 md:space-y-0 md:space-x-6 justify-between">
        <div className="pt-4 flex flex-col">
          <span className="text-cyan text-xl">
            What is {singleCoinDetail?.name} ?
          </span>
          <span className="pt-4">
            {ReactHtmlParser(singleCoinDetail?.description)}
          </span>
        </div>
        <div className="bg-dark rounded-md flex flex-col w-full p-4">
          <span>
            <span className="text-cyan text-lg">{singleCoinDetail?.name}</span>{" "}
            Links:
          </span>
          {singleCoinDetail?.links.map((data: any, id: number) => (
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

export default CoinDetailC;
