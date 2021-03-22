import React from "react";

import ModalButton from "./modalButton";

const TopBar = ({ setNotification, setTransactionSuccess }) => (
  <div className="flex w-full bg-natural-light h-24 mx-auto py-4 px-4 items-center justify-between shadow-md">
    <img
      src="/TreeDaoLogoCropped.png"
      alt="TreeDAO Logo"
      style={{ height: "100%" }}
    />
    <div>
      <ModalButton
        setNotification={setNotification}
        setTransactionSuccess={setTransactionSuccess}
      >
        <p>Sold out! 🎉</p>
      </ModalButton>
    </div>
  </div>
);

export default TopBar;
