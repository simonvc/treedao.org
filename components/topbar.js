import React from "react";

import Tree from "./tree";
import ModalButton from "./modalButton";

const TopBar = ({ setNotification, setTransactionSuccess }) => (
  <div className="flex w-full bg-natural-light h-24 mx-auto py-4 px-4 items-center justify-between shadow-md">
    <div className="w-16 h-16 md:w-20 md:h-20">
      <Tree />
    </div>
    <div>
      <ModalButton
        setNotification={setNotification}
        setTransactionSuccess={setTransactionSuccess}
      >
        <p className={buttonDisabled ? "opacity-50" : ""}>Pre-sale 🌳 💸</p>
      </ModalButton>
    </div>
  </div>
);

export default TopBar;
