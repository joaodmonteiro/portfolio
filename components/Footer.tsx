import styles from "../styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.trademark}>© JOAODMONTEIRO 2022</div>
      <Link href="/Contact">
        <a>
          <div className={styles.contact}>
            <img src="/images/arrow.svg" alt="arrow" />
            <span>Contact</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Footer;
