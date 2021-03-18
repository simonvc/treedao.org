import React, { useState } from "react";
import { ethers } from "ethers";

import { confettiFireworks } from "../utils/confettis";

import Modal from "react-modal";
import Button from "./button";

const terms = [
  "I understand TreeDAO is currently in pre-sale. If we don’t reach 100 ETH or are unable to secure a woodland of appropriate quality, ETH will be returned to the sending wallet, minus ETH fees.",
  "I understand that if I send from an Exchange account (i.e. Kraken, Coinbase), I will not get my ETH back or my NFTs.",
  "I understand that the minimum pre-sale commitment is 0.5 ETH due to fees.",
  "I understand that 1% of NFTs are being given to the dev team, and 1% reserved for future dev work.",
  "I understand that the value of the NFTs may be more or less than the value of the ETH.",
  "I understand that voting rights associated with DAO are deferred 12 months so we can build the DAO website.",
  "I understand that the total number of NFTs created will be between 5000 and 7500 depending on over funding and that the DAO may vote to mint new NFTs in the future to cover the expenses of maintaining the infrastructure and woodlands.",
];

const ModalButton = ({ setNotification, setTransactionSuccess, children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [checkboxTicked, setCheckboxTicked] = useState(false);
  const [modalPane, setModalPane] = useState("one");
  const [amount, setAmount] = useState("0.5");
  const [inputError, setInputError] = useState(null);

  const minimumAmount = 0.5; // in ETH

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setCheckboxTicked(false);
    setModalPane("one");
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={async () => {
          if (typeof window.ethereum !== "undefined") {
            console.log("MetaMask detected 👍");
            setNotification(null);
            openModal();
          } else {
            console.log("MetaMask not detected 🥺");
            setNotification(
              "⚠️  MetaMask is not detected! Please use a browser with Metamask installed to continue."
            );
          }
        }}
      >
        {children}
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="agreement"
        ariaHideApp={false}
        className="flex items-center relative h-3/4 w-5/6 md:w-3/4 bg-natural-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg border rounded border-black px-8 py-8 overflow-auto outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-25"
      >
        <div
          className="absolute top-0 right-0 mr-4 mt-2 cursor-pointer"
          onClick={() => {
            closeModal();
          }}
        >
          <p className="text-xl">&#10005;</p>
        </div>
        <div className="min-w-full min-h-full flex flex-col justify-around">
          {modalPane === "one" && (
            <>
              <h1 className="text-center font-extrabold text-2xl lg:text-4xl xl:text-6xl text-navyBlue mb-8">
                TreeDAO Agreement
              </h1>
              <p className="font-medium text-base xl:text-2xl text-navyBlue mb-2">
                I have read the FAQs and:
              </p>
              <br />
              <div className="ml-4">
                <ul className="list-disc">
                  {terms.map((t) => {
                    return (
                      <li className="font-normal text-base xl:text-xl text-navyBlue mb-2">
                        <p>{t}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <br />
              <div className="flex items-center mb-12">
                <input
                  type="checkbox"
                  id="consent"
                  defaultChecked={checkboxTicked}
                  onChange={() => {
                    setCheckboxTicked(!checkboxTicked);
                  }}
                />
                <label for="consent">
                  <p className="font-bold text-base xl:text-2xl text-navyBlue ml-2">
                    I understand the terms and agree.
                  </p>
                </label>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  width="w-half"
                  disabled={!checkboxTicked}
                  onClick={() => {
                    setModalPane("two");
                  }}
                >
                  <p className="text-center text-2xl leading-6">
                    Enter amount 👉
                  </p>
                </Button>
              </div>
            </>
          )}
          {modalPane === "two" && (
            <>
              <h1 className="text-center font-extrabold text-2xl lg:text-4xl xl:text-6xl text-navyBlue pt-4">
                How much do you want?
              </h1>
              <div>
                <p className="text-center font-medium text-xl xl:text-2xl text-navyBlue mb-2 xl:mb-8">
                  Please enter the amount you would like to send (minimum 0.5
                  ETH).
                </p>
                <br />
                <p className="text-center font-medium text-3xl text-navyBlue mb-2 xl:mb-8">
                  {amount ? amount : "0"} ETH
                </p>
                <br />
                <div className="flex items-center justify-center">
                  <input
                    className="w-1/3 h-12 text-gray-800 font-medium text-xl py-2 px-4 border-2 border-gray-500 shadow-lg"
                    type="text"
                    id="name"
                    name="name"
                    value={amount}
                    required
                    minlength="1"
                    maxlength="8"
                    size="10"
                    onChange={(e) => {
                      if (!e.target.value) {
                        setInputError(
                          "⚠️ Please enter more than the minimum of 0.5 ETH."
                        );
                        setAmount(e.target.value);
                      } else if (e.target.value.match(/^\d{1,}(\.\d{0,4})?$/)) {
                        if (parseFloat(e.target.value) < minimumAmount) {
                          setInputError(
                            "⚠️ Please enter more than the minimum of 0.5 ETH."
                          );
                        } else {
                          setInputError(null);
                        }
                        setAmount(
                          e.target.value.replace(/^(0{1,}(?=((0.)|[1-9])))/, "")
                        );
                      }
                    }}
                  />
                </div>
              </div>
              <div className="h-8 text-xl xl:text-2xl text-center font-medium text-navyBlue">
                {inputError ? (
                  <p>{inputError}</p>
                ) : (
                  <p>
                    If the above amount looks ok, click the button to open
                    Metamask and complete the transaction.
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center pb-4">
                <Button
                  width="w-half"
                  disabled={inputError}
                  onClick={async () => {
                    const priceInEthString = amount;
                    const priceInWeiBN = ethers.utils.parseEther(
                      priceInEthString
                    );
                    const priceInWeiString = priceInWeiBN.toHexString();
                    const accounts = await ethereum.request({
                      method: "eth_requestAccounts",
                    });
                    if (!accounts[0]) {
                      setNotification("Unable to connect to MetaMask.");
                      closeModal();
                      return;
                    } else if (ethereum.chainId !== "0x1") {
                      setNotification(
                        "Chain ID does not match Ethereum Mainnet. Please check your MetaMask network."
                      );
                      closeModal();
                      return;
                    }
                    ethereum
                      .request({
                        method: "eth_sendTransaction",
                        params: [
                          {
                            from: accounts[0],
                            to: "0x1cc2a327b1173d0d82b0103b212b160114e4ff6f", // treedao.eth ens name not accepted by Metamask
                            value: priceInWeiString,
                          },
                        ],
                      })
                      .then((txHash) => {
                        setTransactionSuccess(true);
                        setNotification(
                          `Transaction successful! Hash: ${txHash}`,
                          "success"
                        );
                        confettiFireworks(4000, { zIndex: 3000 });
                      })
                      .catch((error) => {
                        if (!error.message.includes("MetaMask")) {
                          setNotification(`MetaMask error: ${error.message}`);
                        } else {
                          setNotification(error.message);
                        }
                      });
                    closeModal();
                  }}
                >
                  <p className="text-center text-2xl leading-6">
                    Take me to MetaMask 🦊
                  </p>
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalButton;
