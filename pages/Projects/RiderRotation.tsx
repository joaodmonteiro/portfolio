import styles from "../../styles/RiderRotation.module.scss";
import ScrollContainer from "../../components/ScrollContainer";
import Stack from "../../components/Stack";
import Project_Links from "../../components/Project_Links";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import mockup1 from "../../public/images/riderrotation_mockup.png";
import mockup2 from "../../public/images/riderrotation_mockup2.png";
import { Parallax } from "react-scroll-parallax";

const RiderRotation = () => {
  const stack = [
    { name: "HTML", img: "/images/icons/html_icon.svg" },
    { name: "CSS", img: "/images/icons/css_icon.svg" },
    { name: "Javascript", img: "/images/icons/js_icon.svg" },
    { name: "Webpack", img: "/images/icons/webpack_icon.svg" },
    { name: "Firebase", img: "/images/icons/firebase_icon.svg" },
  ];

  const links = {
    website: "https://joaodmonteiro.github.io/rider-rotation/",
    github: "https://github.com/joaodmonteiro/rider-rotation",
  };

  return (
    <div className={styles.container}>
      <section className={styles.title_container}>
        <Parallax speed={-15}>
          <h1>Rider Rotation</h1>
        </Parallax>
      </section>
      <section className={styles.mockup1_container}>
        <div className={styles.image}>
          <Parallax speed={15}>
            <Image
              src={mockup1}
              alt="Rider rotation website seen on a laptop."
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"></Image>
          </Parallax>
        </div>
        <div className={styles.description}>
          Rider Rotation is a dashboard web application that I made for
          Gorillas, a grocery delivery company.
        </div>
      </section>
      <section className={styles.mockup2_container}>
        <div className={styles.image}>
          <Image
            src={mockup2}
            alt="Login screen for rider rotation website seen on a laptop."
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"></Image>
        </div>
        <div className={styles.description}>
          This web app was created to be a tool used by the Gorillas warehouse
          team in order to manage the state of all the riders and bikes.
        </div>
      </section>
      <Stack stack={stack}></Stack>
      <Project_Links {...links}></Project_Links>
    </div>
  );
};

export default RiderRotation;
