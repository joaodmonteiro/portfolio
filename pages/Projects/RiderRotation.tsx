import styles from "../../styles/RiderRotation.module.scss";
import ScrollContainer from "../../components/ScrollContainer";
import Stack from "../../components/Stack";
import Project_Links from "../../components/Project_Links";
import { useRouter } from "next/router";
import { useEffect } from "react";

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

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => console.log("finished"));
  }, [router.events]);

  return (
    <ScrollContainer>
      <div className={styles.container}>
        <section className={styles.title_container}>
          <h1>Rider Rotation</h1>
        </section>
        <section className={styles.mockup1_container}>
          <img src="/images/riderrotation_mockup.png" alt="" />
          <div>
            Rider Rotation is a dashboard web application that I made for
            Gorillas, a grocery delivery company.
          </div>
        </section>
        <section className={styles.mockup2_container}>
          <img src="/images/riderrotation_mockup2.png" alt="" />
          <div>
            This web app was created to be a tool used by the Gorillas warehouse
            team in order to manage the state of all the riders and bikes.
          </div>
        </section>
        <Stack stack={stack}></Stack>
        <Project_Links {...links}></Project_Links>
      </div>
    </ScrollContainer>
  );
};

export default RiderRotation;
