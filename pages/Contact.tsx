import { NextPage } from "next";
import styles from "../styles/Contact.module.scss";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Get in touch!</h1>
      <div className={styles.links_container}>
        <div className={styles.link_item}>
          <a
            href="mailto:joaodmonteiro10@gmail.com"
            target="_blank"
            rel="noreferrer">
            <div className={styles.link}>
              <img src="/images/arrow.svg" alt="" />
              <div>Email</div>
            </div>
          </a>
          <div className={styles.at}>hello@joaodmonteiro.com</div>
        </div>

        <div className={styles.link_item}>
          <a
            href="https://twitter.com/joaodmonteiro"
            target="_blank"
            rel="noreferrer">
            <div className={styles.link}>
              <img src="/images/arrow.svg" alt="" />
              <div>Twitter</div>
            </div>
          </a>
          <div className={styles.at}>@joaodmonteiro</div>
        </div>

        <div className={styles.link_item}>
          <a
            href="https://www.linkedin.com/in/joaodmonteiro/"
            target="_blank"
            rel="noreferrer">
            <div className={styles.link}>
              <img src="/images/arrow.svg" alt="" />
              <div>LinkedIn</div>
            </div>
          </a>
          <div className={styles.at}>@joaodmonteiro</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
