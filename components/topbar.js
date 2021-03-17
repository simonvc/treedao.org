import React from "react";

import Button from "./button";
import Tree from "./tree";

const buttonDisabled = true;

const TopBar = () => (
  <div className="flex w-full bg-natural-light h-24 mx-auto py-4 px-4 items-center justify-between">
    <div className="w-16 h-16 md:w-20 md:h-20">
      <Tree />
    </div>
    <div>
      <Button disabled={buttonDisabled}>
        <p className={buttonDisabled ? "opacity-50" : ""}>Pre-Sale 🌳 💸</p>
      </Button>
    </div>
  </div>
);

export default TopBar;
