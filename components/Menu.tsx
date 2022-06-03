import styles from "../styles/Menu.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  closeMenu: () => void;
}
const Menu = ({ closeMenu }: Props) => {
  const [containerStyles, setContainerStyles] = useState(styles.container);

  useEffect(() => {
    setContainerStyles(`${styles.container} ${styles.load_animation}`);
  }, []);

  const handleCloseMenu = () => {
    setContainerStyles(styles.container);
    setTimeout(() => {
      closeMenu();
    }, 400);
  };

  return (
    <div className={containerStyles}>
      <div className={styles.close_menu} onClick={handleCloseMenu}>
        <img src="/images/icons/x_icon.svg" alt="" />
      </div>
      <ul className={styles.nav_list}>
        <li onClick={handleCloseMenu}>
          <Link href="/Projects">PROJECTS</Link>
        </li>
        <li onClick={handleCloseMenu}>
          <Link href="/About">ABOUT</Link>
        </li>
        <li onClick={handleCloseMenu}>
          <Link href="/Contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
