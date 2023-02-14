"use client";

import { useGlobalContext } from "@/app/Context/store";
import Chart from "@/components/Chart";
import CoinDetailC from "@/components/CoinDetailC";
import Loading from "@/components/loading";
import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
interface coinDetaisIdParams {
  params: { coinId: string };
}
interface coinDetail {
  name: string;
}

const CoinDetails = (data: any) => {
  const { setCoinId } = useGlobalContext();
  const [coinDetail, setCoinDetail] = useState<any>();
  const [singleCoinDetail, setSingleCoinDetail] = useState<any>();

  const { coinId } = data.params;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ea4afc88f8mshe9c07843689f0f4p153de1jsn2cdc8454bc6f",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    setCoinId(coinId);

    async function coinDetailfn() {
      const response = await fetch(
        `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
        options
      ).then((resp) => resp.json());
      setCoinDetail(response.data.coin);

      const responseSingleCoinDetail = await fetch(
        `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=7d`,
        options
      ).then((resp) => resp.json());

      setSingleCoinDetail(responseSingleCoinDetail.data.coin);
    }
    coinDetailfn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coinId, setCoinId]);

  return (
    <Suspense fallback={<Loading />}>
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

        <Chart id={coinId} />

        <CoinDetailC
          coinDetail={coinDetail}
          singleCoinDetail={singleCoinDetail}
        />
      </div>
    </Suspense>
  );
};

export default CoinDetails;
