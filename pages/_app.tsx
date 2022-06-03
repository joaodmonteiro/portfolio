import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import ScrollContainer from "../components/ScrollContainer";
import { useState } from "react";
import Menu from "../components/Menu";

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
    <div>
      <Nav handleMenuClick={handleMenuClick} />
      <Component {...pageProps} />
      {menuOpen && <Menu closeMenu={closeMenu} />}
    </div>
  );
}

export default MyApp;
