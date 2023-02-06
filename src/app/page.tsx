import { cryptoData } from "@/data/data";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className="flex flex-col space-y-6  w-full">
      <span className="text-2xl">Crypto rankings in the world</span>
      <div className="grid 	grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xs md:text-base  gap-6  ">
        {cryptoData.map((data: cryptoDataType, id) => (
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
    </div>
  );
}
