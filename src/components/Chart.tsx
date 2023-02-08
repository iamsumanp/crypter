"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ id }: any) => {
  const [coinData, setCoinData] = useState([]);
  const [timeString, setTimeString] = useState("7d");
  const coinTimeStamp: Array<string> = [];
  const coinPrice: Array<string> = [];

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ea4afc88f8mshe9c07843689f0f4p153de1jsn2cdc8454bc6f",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  //   const optionsTime = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://coinranking1.p.rapidapi.com/coin/${id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timeString}`,
        options
        // options
      );
      const json = await response.json();
      setCoinData(json.data.history);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, timeString]);
  coinData.forEach((element: any) =>
    coinTimeStamp.push(new Date(element.timestamp).toLocaleDateString())
  );
  coinData.forEach((element: any) => coinPrice.push(element.price));
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD (7 day)",
        data: coinPrice,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      {/* <select
        defaultValue="7d"
        className="bg-dark w-3/12 outline-none"
        placeholder="Select Timeperiod"
        onChange={(value: any) => setTimeString(value)}
      >
        {optionsTime.map((data: any, id: number) => (
          <option key={id} className="outline-none">
            {data}
          </option>
        ))}
      </select> */}
      <Line data={data} />
    </div>
  );
};

export default Chart;
