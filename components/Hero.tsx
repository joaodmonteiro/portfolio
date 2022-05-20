import { NextPage } from "next";
import styles from "../styles/Hero.module.scss";
import profilepic from "../public/images/profile-pic.png";

const Hero: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picture_container}>
        <img src="/images/profile-pic.png"></img>
      </div>
      <div className={styles.bio_container}>
        <h1 className={styles.bio_name}>João Monteiro</h1>
        <h2 className={styles.bio_title}>WEB DEVELOPER</h2>
        <h3 className={styles.bio_location}>Based in London, UK</h3>
      </div>
    </div>
  );
};

export default Hero;
