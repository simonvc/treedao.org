import "../styles/index.css";
// import { Web3ReadOnlyProvider } from "../utils/web3modal";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>TreeDAO</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
