import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>TreeDAO</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
