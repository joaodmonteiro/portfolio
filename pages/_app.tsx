import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import ScrollContainer from "../components/ScrollContainer";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

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
        <title>
          {(router.pathname.substring(router.pathname.indexOf("/") + 1) &&
            "João Monteiro | " + router.pathname.split("/").pop()) ||
            "João Monteiro"}
        </title>
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
        <meta
          name="description"
          content="Hi, I'm João Monteiro and I'm a web developer. Here you can you check out my projects and learn a little bit more about me."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
        />
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
