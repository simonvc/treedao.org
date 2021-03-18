import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { useWeb3ReadOnly } from "../utils/web3modal";

import TopBar from "../components/topbar";
import Notification from "../components/notification";
import Hero from "../components/hero";
import Funding from "../components/funding";
import Footer from "../components/footer";

const Index = () => {
  const { balance, web3ReadOnlyProvider } = useWeb3ReadOnly();
  const [balanceInEth, setBalanceInEth] = useState(null);
  const [notification, setNotification] = useState(null);
  const [transactionSuccess, setTransactionSuccess] = useState(null);

  useEffect(() => {
    if (transactionSuccess) {
      const getBalance = async () => {
        const newBalance = await web3ReadOnlyProvider.getBalance("treedao.eth");
        setBalanceInEth(ethers.utils.formatEther(newBalance.toString()));
      };

      getBalance();
    }
  }, [transactionSuccess]);

  useEffect(() => {
    if (balance && !transactionSuccess) {
      setBalanceInEth(ethers.utils.formatEther(balance.toString()));
    }
  }, [balance, transactionSuccess]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar
        setNotification={setNotification}
        setTransactionSuccess={setTransactionSuccess}
      />
      {notification && <Notification notificationText={notification} />}
      <Hero />
      <Funding balanceInEth={balanceInEth} />
      <Footer />
    </div>
  );
};

export default Index;
