import { ethers } from "ethers";
import ProgressBar from "./progressBar";

const Funding = ({ balanceInEth }) => {
  const goalInEth = 100;

  // Extremely small percentages get rounded up a lot i.e. 0.2799 at 4 places becomes basically 0 but it'll be fine when Eth starts coming in
  const percentage = parseFloat(
    (parseFloat(balanceInEth).toFixed(4) / goalInEth) * 100
  ).toFixed();

  const percentageString = percentage.toString() + "%";

  return (
    <div className="w-full flex flex-grow">
      <div className="container px-4 pt-8 pb-16  mx-auto flex flex-col items-center justify-around text-center text-xl md:text-2xl lg:text-4xl leading-9 font-bold md:font-extrabold text-navyBlue w-full">
        {!balanceInEth ? (
          <div className="w-full h-32 py-8 font-normal">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="w-full h-32">
            <ProgressBar
              balanceLoaded={balanceInEth}
              percentage={percentage}
              percentageString={percentageString}
              backgroundColor="white"
              visualParts={[
                {
                  percentage: percentageString,
                  color: "#13648d",
                },
              ]}
            />
          </div>
        )}

        <div className="flex flex-col text-center w-full">
          <p className="font-normal mb-8">
            The TreeDAO is raising{" "}
            <b>
              {goalInEth} {ethers.constants.EtherSymbol}
            </b>{" "}
            and putting a protected old-growth woodland near London on your
            favourite NFT platform.
          </p>
          <br />
          <p className="font-normal mb-8">
            Pre-sale live now - read the FAQ carefully before sending funds.
          </p>
          <br />
          <span className="flex font-normal justify-center mr-2">
            <p className="mr-2">👉</p>
            <a
              href="https://github.com/simonvc/treedao.org/blob/docs/faq.md"
              target="_blank"
              className="font-bold"
            >
              FAQs
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Funding;
