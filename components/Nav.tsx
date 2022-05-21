import Link from "next/link";
import styles from "../styles/Nav.module.scss";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className={styles.container}>
      <ul className={styles.nav_list}>
        <li
          className={router.pathname == "/Projects" ? `${styles.active}` : ""}>
          <Link href="/Projects">PROJECTS</Link>
        </li>
        <li className={router.pathname == "/Tech" ? `${styles.active}` : ""}>
          <Link href="/Tech">TECH</Link>
        </li>
        <li className={router.pathname == "/About" ? `${styles.active}` : ""}>
          <Link href="/About">ABOUT</Link>
        </li>
        <li className={router.pathname == "/Contact" ? `${styles.active}` : ""}>
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
