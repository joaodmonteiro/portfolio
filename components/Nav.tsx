import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useViewport from "../hooks/useViewport";

const Nav = () => {
  const [mobileLayout, setMobileLayout] = useState(false);
  const router = useRouter();
  const { width } = useViewport();

  return (
    <nav className={styles.container}>
      <div className={styles.screen}></div>
      {width > 600 && (
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
      {width <= 600 && (
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">JOÃO MONTEIRO</Link>
          </li>
          <li>
            <div className={styles.menu}>
              <img src="/images/icons/burger_icon.svg" alt="" />
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
