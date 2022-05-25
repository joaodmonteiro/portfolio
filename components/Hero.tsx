import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picture_container}>
        <img
          alt="photo of Joao Monteiro"
          src="/images/BW_portfolio_pic 2.JPG"></img>
      </div>
      <div className={styles.bio_container}>
        <h1 className={styles.bio_name}>João Monteiro</h1>
        <div className={styles.bio_info}>
          <div className={styles.bio_title}>Web Developer</div>
          <div className={styles.bio_location}>Based in London, UK</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
