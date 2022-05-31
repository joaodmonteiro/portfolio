import styles from "../../styles/Multitrack.module.scss";
import { useState, useRef, useMemo, useEffect, Children } from "react";
import Link from "next/link";
import ScrollContainer from "../../components/ScrollContainer";
import Stack from "../../components/Stack";
import Project_Links from "../../components/Project_Links";

const Multitrack = () => {
  const stack = [
    { name: "HTML", img: "/images/icons/html_icon.svg" },
    { name: "CSS", img: "/images/icons/css_icon.svg" },
    { name: "React", img: "/images/icons/react_icon.svg" },
    { name: "Vite", img: "/images/icons/vite_icon.svg" },
    { name: "Firebase", img: "/images/icons/firebase_icon.svg" },
    { name: "EmailJS", img: "/images/icons/emailjs_icon.svg" },
  ];

  const links = {
    website: "https://joaodmonteiro.github.io/multitrack",
    github: "https://github.com/joaodmonteiro/multitrack",
  };

  // const [image1Styles, setImage1Styles] = useState(`${styles.screenshot}`);
  // const [image2Styles, setImage2Styles] = useState(`${styles.screenshot}`);
  // const [image3Styles, setImage3Styles] = useState(`${styles.screenshot}`);

  // const [animationCounter, setAnimationCounter] = useState(0);

  // const targetRef = useRef(null);
  // const scrollContainerRef = useRef();

  // const options = useMemo(() => {
  //   return {
  //     root: scrollContainerRef.current,
  //     rootMargin: "500px",
  //     threshold: 1,
  //   };
  // }, []);

  // const callbackFunction = (entries) => {
  //   const [entry] = entries;
  //   if (entry.isIntersecting) {
  //     animate();
  //   }
  // };

  // const animate = () => {
  //   setImage1Styles(styles.screenshot + " " + styles.image1);
  //   setImage2Styles(styles.screenshot + " " + styles.image2);
  //   setImage3Styles(styles.screenshot + " " + styles.image3);
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options);
  //   const currentTarget = targetRef.current;

  //   if (currentTarget) observer.observe(currentTarget);

  //   return () => {
  //     if (currentTarget) observer.unobserve(currentTarget);
  //   };
  // }, [targetRef.current, options]);

  return (
    <ScrollContainer props={Children}>
      <div className={styles.container}>
        <div className={styles.scroll_container}>
          <section className={styles.logo_container}>
            <img alt="Multitrack's logo" src="/images/multitrack_logo.svg" />
            <img src="/images/arrow_down.svg" alt="" />
          </section>
          <section className={styles.mockup1_container}>
            <div className={styles.mockup1}>
              <img src="/images/multitrack_mockup.png" alt="" />
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

          <Stack stack={stack} />

          <Project_Links {...links} />
        </div>
      </div>
    </ScrollContainer>
  );
};

export default Multitrack;
