import styles from "../styles/Hero.module.scss";
import Image from "next/image";
import heroPic from "../public/images/BW_portfolio_pic_square.jpg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picture_container}>
        <Image
          src={heroPic}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="Photo of João Monteiro"></Image>
      </div>
      <div className={styles.bio_name}>João Monteiro</div>
      <div className={styles.bio_info}>Web Developer, Based in London</div>
      <div className={styles.cta}>
        <div>View projects</div>
        <img src="images/arrow_down.svg" alt="arrow pointing down"></img>
      </div>
    </div>
  );
};

export default Hero;
