import { ethers } from "ethers";
import ProgressBar from "./progressBar";

const Funding = ({ balanceInEth }) => {
  const goalInEth = 100;

  // Extremely small percentages get rounded up a lot i.e. 0.2799 at 4 places becomes basically 0 but it'll be fine when Eth starts coming in
  // const percentage = parseFloat(
  //   (parseFloat(balanceInEth).toFixed(4) / goalInEth) * 100
  // ).toFixed();

  // pinned now
  const percentage = 100;

  const percentageString = percentage.toString() + "%";

  return (
    <div className="w-full flex flex-grow">
      <div className="container px-8 pt-8 pb-16  mx-auto flex flex-col items-center justify-around text-center text-xl md:text-2xl lg:text-4xl leading-9 font-bold md:font-extrabold text-navyBlue w-full">
        <div className="w-full h-32 items-center">
          <button className={`items-center  px-5 py-3 border border-transparent text-2xl leading-6 font-medium rounded-md text-offWhite rounded-md shadow bg-navyBlue hover:bg-saturatedDarkBlue focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:cursor-not-allowed transition duration-150 ease-in-out `} >
           <a href="https://opensea.io/assets/treedao-nftree">Buy NFTs now on OpenSea.io</a>
          </button>
        </div>

        <div className="flex flex-col text-center w-full">
          <p className="font-normal mb-8">
            The TreeDAO is buying, planting, rewilding and protecting woodland and bringing trees your
            favourite NFT platform.
          </p>
          <br />
          <span className="flex font-normal justify-center mr-2">
            <p className="mr-2">👉</p>
            <a
              href="https://docs.google.com/document/d/12pXHn7X1PDRK_D8YshHIktGklM7PgE-n4udueQVx8Cs/edit"
              target="_blank"
              className="font-bold"
            >
              Read the whitepaper
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Funding;
