import styles from "../styles/Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picture_container}>
        <Image
          src="/images/BW_portfolio_pic_square.jpg"
          width={1000}
          height={1000}
          alt="Photo of João Monteiro"></Image>
      </div>
      <div className={styles.bio_name}>João Monteiro</div>
      <div className={styles.bio_info}>Web Developer, Based in London</div>
      <div className={styles.cta}>
        <div>View projects</div>
        <img src="images/arrow_down.svg"></img>
      </div>
    </div>
  );
};

export default Hero;
