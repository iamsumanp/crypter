"use client";

import {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
  useContext,
} from "react";

interface contextProps {
  coinId: string;
  setCoinId: Dispatch<SetStateAction<string>>;
  // coinData : DataType[],
  //   timeString: string;
  // coinTimeStamp : Array,
}

const GlobalContext = createContext<contextProps>({
  coinId: "",
  setCoinId: () => "",
  //   coinData: [],
  //   timeString: "7d",
  //   coinTimeStamp: [],
  //   coinPrice: [],
});

export const GlobalContextProvider = ({ children }: any) => {
  const [coinId, setCoinId] = useState("ddde");
  return (
    <GlobalContext.Provider value={{ coinId, setCoinId }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
