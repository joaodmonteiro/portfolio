import type { NextPage } from "next";
import styles from "../styles/About.module.scss";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.about_section}>
        <div className={styles.picture_container}>
          <img
            alt="photo of Joao Monteiro"
            src="/images/BW_portfolio_pic 2.JPG"></img>
        </div>
        <div className={styles.bio}>
          <p>
            Hi, I’m João,<br></br> a front end web developer based in London,
            UK.
          </p>
          <p>
            I’m originally from Portugal and my background includes game
            development and music production.
          </p>
        </div>
      </section>
      <section className={styles.about_section}>
        <div className={styles.bio}>
          <p>
            I have an insatiable curiosity for anything tech-related, and a huge
            appreciation for art and design.
          </p>
          <p>
            My hobbies include making music, travelling and listening to
            podcasts.
          </p>
        </div>
        <div className={styles.picture_container}>
          <img
            alt="photo of Joao Monteiro"
            src="/images/BW_portfolio_pic1.JPG"></img>
        </div>
      </section>
    </div>
  );
};

export default About;
