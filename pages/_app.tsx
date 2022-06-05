import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import ScrollContainer from "../components/ScrollContainer";
import { useState } from "react";
import Menu from "../components/Menu";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      console.log("menu open");
    }
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div>
        <Nav handleMenuClick={handleMenuClick} />
        <Component {...pageProps} />
        {menuOpen && <Menu closeMenu={closeMenu} />}
      </div>
    </>
  );
}

export default MyApp;
