import React from "react";
import Button from "./button";

import ModalButton from "./modalButton";

const TopBar = ({ setNotification, setTransactionSuccess }) => (
  <div className="flex w-full bg-natural-light h-24 mx-auto py-4 px-4 items-center justify-between shadow-md">
    <img
      src="/TreeDaoLogoCropped.png"
      alt="TreeDAO Logo"
      style={{ height: "100%" }}
    />
    <div>
      <Button
        setNotification={setNotification}
        setTransactionSuccess={setTransactionSuccess}
      >
        <p><a href="https://members.treedao.org/">Members Login</a></p>
      </Button>
    </div>
  </div>
);

export default TopBar;
