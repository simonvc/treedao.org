import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { useWeb3ReadOnly } from "../utils/web3modal";

import TopBar from "../components/topbar";
import Notification from "../components/notification";
import Hero from "../components/hero";
import Funding from "../components/funding";
import Footer from "../components/footer";

const Index = () => {
  // const { balance, web3ReadOnlyProvider } = useWeb3ReadOnly();
  const [balanceInEth, setBalanceInEth] = useState(null);
  const [notification, setNotification] = useState(null);
  const [transactionSuccess, setTransactionSuccess] = useState(null);


  return (
    <div class=".main-content">
      <TopBar
        setNotification={setNotification}
        setTransactionSuccess={setTransactionSuccess}
      />
      {notification && <Notification notificationText={notification} />}
      <div class="video-container">
        <div class="color-overlay"></div>
        <video autoPlay loop muted>
          <source src="/loop.mp4" type="video/mp4"></source>
        </video>
      </div>
      <Hero />
      <Funding balanceInEth={balanceInEth} />
      <Footer />
    </div>
  );
};

export default Index;
