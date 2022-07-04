import styles from "../../styles/Multitrack.module.scss";
import { useState, useRef, useMemo, useEffect, Children } from "react";
import Link from "next/link";
import ScrollContainer from "../../components/ScrollContainer";
import Stack from "../../components/Stack";
import Project_Links from "../../components/Project_Links";
import Image from "next/image";
import mockup from "../../public/images/multitrack_mockup.png";
import androidMockup from "../../public/images/android_mockup.png";
import { Parallax } from "react-scroll-parallax";

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

  return (
    <div className={styles.container}>
      <div className={styles.scroll_container}>
        <section className={styles.logo_container}>
          <img alt="Multitrack's logo" src="/images/multitrack_logo.svg" />
          <img src="/images/arrow_down.svg" alt="arrow pointing down" />
        </section>
        <section className={styles.mockup1_container}>
          <div className={styles.mockup1}>
            <Parallax speed={-20}>
              {/* <Image
                src={mockup}
                alt="Multitrack website seen on a laptop and smartphone."
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"></Image> */}
              <img src="/images/multitrack_mockup.png" alt="" />
            </Parallax>
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
              The website serves as the point of contact between the charity and
              the community.
            </p>
            <p>
              It was built based on the design made by{" "}
              <a
                href="https://catarinacoelho.pt/"
                target="_blank"
                rel="noreferrer">
                <span>
                  <img src="/images/arrow.svg" alt="arrow" />
                  Catarina Coelho
                </span>
              </a>
            </p>
          </div>
          <div className={styles.mockup_container}>
            <div className={styles.android_mockup}>
              <Image
                src={androidMockup}
                alt="Multitrack website seen on 3 smartphones."
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"></Image>
            </div>
          </div>
        </section>

        <Stack stack={stack} />

        <Project_Links {...links} />
      </div>
    </div>
  );
};

export default Multitrack;
