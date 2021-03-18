import React, { useEffect, useState } from "react";

import { confettiFireworks } from "../utils/confettis";

const ProgressBar = ({
  balanceLoaded,
  percentage,
  percentageString,
  backgroundColor = "#000",
  visualParts = [
    {
      percentage: "0%",
      color: "black",
    },
  ],
}) => {
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
    if (percentage >= 100) {
      setTimeout(() => {
        confettiFireworks(4000, { zIndex: 3000 });
      }, 4000);
    }
  }, [balanceLoaded]);

  return (
    <>
      <div
        className="flex h-12 my-4 shadow-lg border border-gray-200"
        style={{
          backgroundColor,
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <>
              <div
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                style={{
                  width: widths[index],
                  backgroundColor: item.color,
                }}
                className="width-transition"
              />
            </>
          );
        })}
      </div>
      <div className="flex bg-transparent">
        {visualParts.map((item, index) => {
          return (
            <>
              <div
                key={index}
                style={{
                  width: widths[index],
                }}
                className="width-transition"
              />
              <div className="-ml-4 text-2xl text-navyBlue -mr-2">
                {percentageString}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProgressBar;
