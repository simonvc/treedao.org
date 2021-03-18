import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";

const Web3ReadOnlyContext = createContext();

const Web3ReadOnlyProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [web3ReadOnlyProvider, setWeb3ReadOnlyProvider] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.InfuraProvider("homestead", {
      projectId: process.env.projectId,
    });

    setWeb3ReadOnlyProvider(provider);

    const getDaoBalance = async () => {
      const daoBalance = await provider.getBalance("treedao.eth");
      setBalance(daoBalance);
    };

    getDaoBalance();

    setLoading(false);
  }, [loading]);

  return (
    <Web3ReadOnlyContext.Provider
      value={{
        web3ReadOnlyProvider,
        balance,
      }}
    >
      {children}
    </Web3ReadOnlyContext.Provider>
  );
};

const useWeb3ReadOnly = () => {
  const context = React.useContext(Web3ReadOnlyContext);
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3ReadOnlyProvider");
  }
  return context;
};

export { Web3ReadOnlyProvider, useWeb3ReadOnly };
