import styles from "../../styles/Multitrack.module.scss";
import { useState, useRef, useMemo, useEffect } from "react";

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
    <div className={styles.container}>
      <div className={styles.scroll_container}>
        <section className={styles.logo_container}>
          <img alt="Multitrack's logo" src="/images/multitrack_logo.svg" />
        </section>
        <section ref={targetRef} className={styles.screenshots}>
          <div className={styles.screenshots_wrapper}>
            <img
              className={image1Styles}
              src="/images/desktop_screenshot1.png"
              alt=""
            />
            <img
              className={image2Styles}
              src="/images/desktop_screenshot2.png"
              alt=""
            />
            <img
              className={image3Styles}
              src="/images/desktop_screenshot3.png"
              alt=""
            />
          </div>
        </section>
        <section className={styles.information}>
          <p>
            Multitrack is a charity that works with artists and producers to
            provide fellowships and work placements for underrepresented people
            in the audio industry.{" "}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Multitrack;
