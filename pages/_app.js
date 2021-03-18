import "../styles/index.css";
import { Web3ReadOnlyProvider } from "../utils/web3modal";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReadOnlyProvider>
      <title>TreeDAO</title>
      <Component {...pageProps} />
    </Web3ReadOnlyProvider>
  );
}

export default MyApp;
