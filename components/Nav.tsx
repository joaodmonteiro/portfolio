import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useViewport from "../hooks/useViewport";
import Menu from "./Menu";

interface Props {
  handleMenuClick: () => void;
}

const Nav = ({ handleMenuClick }: Props) => {
  const router = useRouter();
  const { width, height } = useViewport();

  return (
    <nav className={styles.container}>
      {width && width > 600 && (
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">JOÃO MONTEIRO</Link>
          </li>
          <li
            className={
              router.pathname == "/Projects" ? `${styles.active}` : ""
            }>
            <Link href="/Projects">PROJECTS</Link>
          </li>
          <li className={router.pathname == "/About" ? `${styles.active}` : ""}>
            <Link href="/About">ABOUT</Link>
          </li>
          <li
            className={router.pathname == "/Contact" ? `${styles.active}` : ""}>
            <Link href="/Contact">CONTACT</Link>
          </li>
        </ul>
      )}
      {width && width <= 600 && (
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">JOÃO MONTEIRO</Link>
          </li>
          <li>
            <div className={styles.menu} onClick={handleMenuClick}>
              MENU
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
