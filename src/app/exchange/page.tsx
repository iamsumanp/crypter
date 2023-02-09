"use client";
import { coinExchangeData } from "@/data/coinExchangeData";
import React, { Suspense } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import Loading from "../../components/loading";

// ? const coinsExchangeData = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "ea4afc88f8mshe9c07843689f0f4p153de1jsn2cdc8454bc6f",
//       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     },
//   };
//   const res = await fetch(
//     "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc",
//     options
//   ).then((resp) => resp.json());

//   return res.data.exchanges;
// };

const column = [
  {
    name: "Rank",
    selector: (row: any) => row.rank,
  },

  {
    name: "Name",
    selector: (row: any) => row.name,
  },
  {
    name: "Number Of Markets",
    selector: (row: any) => row.numberOfMarkets,
  },
  {
    name: "btcPrice",
    selector: (row: any) => row.btcPrice,
  },

  {
    name: "Price",
    selector: (row: any) => row.price,
  },
];

createTheme(
  "solarized",
  {
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
    background: {
      default: "#1C1E21",
    },
    context: {
      background: "#1C1E21",
      text: "#FFFFFF",
    },
    divider: {
      default: "#919191",
    },
  },
  "dark"
);
const data = [
  {
    rank: 1,
    title: "data.name",
    numberOfMarkets: "data.numberOfMarkets",
    btcPrice: "data.btcPrice",
    // hVolume:data.24hVolume,
    price: "data.price",
  },
  {
    rank: 1,
    title: "data.name",
    numberOfMarkets: "data.numberOfMarkets",
    btcPrice: "data.btcPrice",
    // hVolume:data.24hVolume,
    price: "data.price",
  },
];

const Exchange = () => {
  const customStyles = {
    rows: {
      style: {
        fontWeight: "bold",
        fontSize: "0.8rem",
      },
    },
    headCells: {
      style: {
        fontWeight: "bolder",
        // fontSize: "1.2rem",
      },
    },
  };

  return (
    <div className="flex flex-col w-full space-y-8">
      <span>Exchanges</span>
      <Suspense fallback={<Loading />}>
        <DataTable
          columns={column}
          data={coinExchangeData}
          responsive={true}
          customStyles={customStyles}
          theme="solarized"
        ></DataTable>
      </Suspense>
    </div>
  );
};

export default Exchange;
