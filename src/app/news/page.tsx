import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "../../components/loading";

interface financeData {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  guid: string;
}

const getFinanceData = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ea4afc88f8mshe9c07843689f0f4p153de1jsn2cdc8454bc6f",
      "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
    },
  };
  const res = await fetch(
    "https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news",
    options
  ).then((resp) => resp.json());

  return res;
};

const News = async () => {
  const financialData = await getFinanceData();
  return (
    <div className="flex flex-col w-full space-y-8">
      <span>News</span>
      <Suspense fallback={<Loading />}>
        <div className="grid 	grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xs md:text-base  gap-6">
          {
            financialData
              ?.filter((data: financeData, id: number) => id < 9)
              .map((data: financeData, id: number) => (
                <div key={id}>
                  <Link href={data.link} target="_blank">
                    <div className="bg-dark p-4 rounded-md  flex flex-col space-y-8">
                      <span>{data.title}</span>
                      <div className="flex flex-col md:flex-row justify-between">
                        <span className="text-gray-400 text-xs md:text-sm">
                          source
                        </span>
                        <span> {data.source}</span>
                      </div>
                      <div className="flex flex-col md:flex-row justify-between">
                        <span className="text-gray-400 text-xs md:text-sm">
                          Published Date
                        </span>
                        <span> {data.pubDate}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            // ?.filter((data: any, id: number) => id < 9)
          }
          {/* <Image
            src="https://cdn.airdropalert.com/images/icon/Ezfinance1.jpeg"
            alt="logo"
            width={50}
            height={50}
          ></Image> */}
        </div>
      </Suspense>
    </div>
  );
};

export default News;
