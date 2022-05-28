import styles from "../../styles/Multitrack.module.scss";
import { useState, useRef, useMemo, useEffect } from "react";
import Link from "next/link";
import ScrollContainer from "../../components/ScrollContainer";

const Multitrack = () => {
  const [image1Styles, setImage1Styles] = useState(`${styles.screenshot}`);
  const [image2Styles, setImage2Styles] = useState(`${styles.screenshot}`);
  const [image3Styles, setImage3Styles] = useState(`${styles.screenshot}`);

  const targetRef = useRef(null);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "400px",
      threshold: 1,
    };
  }, []);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      animate();
      console.log("yes");
    }
  };

  const animate = () => {
    setImage1Styles((prevState) => prevState + " " + styles.image1);
    setImage2Styles((prevState) => prevState + " " + styles.image2);
    setImage3Styles((prevState) => prevState + " " + styles.image3);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <ScrollContainer>
      <div className={styles.container}>
        <div className={styles.scroll_container}>
          <section className={styles.logo_container}>
            <img alt="Multitrack's logo" src="/images/multitrack_logo.svg" />
            <img src="/images/arrow_down.svg" alt="" />
          </section>
          <section ref={targetRef} className={styles.screenshots}>
            <div className={styles.screenshots_wrapper}>
              <img
                className={image3Styles}
                src="/images/desktop_screenshot3.png"
                alt=""
              />
              <img
                className={image2Styles}
                src="/images/desktop_screenshot2.png"
                alt=""
              />
              <img
                className={image1Styles}
                src="/images/desktop_screenshot1.png"
                alt=""
              />
            </div>
          </section>
          <section className={styles.information}>
            <div className={styles.description}>
              <p>
                Multitrack is a charity that works with artists and producers to
                provide fellowships and work placements for underrepresented
                people in the audio industry.{" "}
              </p>
              <p>
                The website serves as the point of contact between the charity
                and the community.
              </p>
              <p>
                It was built based on the design made by{" "}
                <a
                  href="https://catarinacoelho.pt/"
                  target="_blank"
                  rel="noreferrer">
                  <span>
                    <img src="/images/arrow.svg" />
                    Catarina Coelho
                  </span>
                </a>
              </p>
            </div>
            <div className={styles.mockup_container}>
              <div className={styles.android_mockup}>
                <img src="/images/android_mockup.png" alt="" />
              </div>
            </div>
          </section>

          <section className={styles.stack}>
            <h2>Stack</h2>
            <div className={styles.logos_container}>
              <div className={styles.logo_wrapper}>
                <img src="/images/icons/html_icon.svg" alt="" />
                <span>HTML</span>
              </div>
              <div className={styles.logo_wrapper}>
                <img src="/images/icons/css_icon.svg" alt="" />
                <span>CSS</span>
              </div>
              <div className={styles.logo_wrapper}>
                <img src="/images/icons/react_icon.svg" alt="" />
                <span>React</span>
              </div>
              <div className={styles.logo_wrapper}>
                <img src="/images/icons/vite_icon.svg" alt="" />
                <span>Vite</span>
              </div>
              <div className={styles.logo_wrapper}>
                <img src="/images/icons/firebase_icon.svg" alt="" />
                <span>Firebase</span>
              </div>
              <div className={styles.logo_wrapper}>
                <img src="/images/icons/emailjs_icon.svg" alt="" />
                <span>EmailJS</span>
              </div>
            </div>
          </section>

          <section className={styles.links}>
            <div className={styles.links_container}>
              <a
                href="https://joaodmonteiro.github.io/multitrack/"
                target="_blank"
                rel="noreferrer">
                <div className={styles.website}>
                  <img src="/images/arrow.svg" alt="arrow" />
                  <span>Website</span>
                </div>
              </a>
              <a
                href="https://github.com/joaodmonteiro/multitrack"
                target="_blank"
                rel="noreferrer">
                <div className={styles.github}>
                  <img src="/images/arrow.svg" alt="arrow" />
                  <span>Github</span>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </ScrollContainer>
  );
};

export default Multitrack;
