import "../styles/globals.css";

import HomeContext from "../context/home/HomeState";

function MyApp({ Component, pageProps }) {
  return (
    <HomeContext>
      <Component {...pageProps} />
    </HomeContext>
  );
}

export default MyApp;
