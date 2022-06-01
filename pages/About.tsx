import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/About.module.scss";
import ScrollContainer from "../components/ScrollContainer";
import Image from "next/image";

const About: NextPage = () => {
  const tech = [
    { name: "Typescript", img: "/images/icons/ts_icon.svg" },
    { name: "React", img: "/images/icons/react_icon.svg" },
    { name: "Git", img: "/images/icons/git_icon.svg" },
    { name: "Jest", img: "/images/icons/jest_icon.svg" },
    { name: "Sass", img: "/images/icons/sass_icon.svg" },
    { name: "Figma", img: "/images/icons/figma_icon.svg" },
    { name: "Webpack", img: "/images/icons/webpack_icon.svg" },
    { name: "Vite", img: "/images/icons/vite_icon.svg" },
    { name: "Javascript", img: "/images/icons/js_icon.svg" },
    { name: "HTML", img: "/images/icons/html_icon.svg" },
    { name: "CSS", img: "/images/icons/css_icon.svg" },
  ];

  const [video, setVideo] = useState(false);

  const handlePlay = () => {
    setVideo(true);
  };

  return (
    <div className={styles.container}>
      <section className={styles.first_section}>
        <div className={styles.hello}>
          <span>
            Hi,<br></br>
            {`I'm João.`}
          </span>
        </div>
        <div className={styles.intro}>
          <div>{`I'm a front end web developer.`}</div>
        </div>
        <div className={styles.more}>
          <div>More about me</div>
          <img src="images/arrow_down.svg"></img>
        </div>
        <div className={styles.picture_container}>
          <Image
            src="/images/BW_photo2.jpg"
            width={1000}
            height={670}
            alt="Photo of João Monteiro"
            objectFit={"scale-down"}></Image>
        </div>
      </section>

      <div className={styles.background}>
        <div>
          I’m originally from Portugal and my background includes game
          development and music production.
        </div>
      </div>
      <div className={styles.video_section}>
        <div className={styles.video}>
          {!video && (
            <div className={styles.play_container}>
              <Image src="/images/game2.png" width={1000} height={315}></Image>
              <div className={styles.playBtn} onClick={handlePlay}>
                <img src="/images/icons/play_icon.png" alt="" />
              </div>
            </div>
          )}
          {video && (
            <iframe
              className={styles.iframe}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KVTv5WPtxlQ?rel=0&amp;autoplay=1&mute=1&start=55"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          )}
        </div>
        <div className={styles.video_description}>
          {" "}
          Game developed in Unity3D by Manuel Costa and João Monteiro, 2016.
        </div>
      </div>

      <div className={styles.interests}>
        <div>
          I have an insatiable curiosity for anything tech-related and an
          appreciation for art and design.
        </div>
      </div>
      <div className={styles.hobbies}>
        <div>
          My hobbies include making music, travelling and listening to podcasts.
        </div>
      </div>
      <div className={styles.tech}>
        <h1>Technologies</h1>
        <div className={styles.tech_carousel}>
          <div className={styles.logos_container}>
            {tech.map((item) => {
              return (
                <div key={tech.indexOf(item)} className={styles.logo_wrapper}>
                  <Image
                    src={item.img}
                    alt={`logo of ${item.name}`}
                    width={100}
                    height={100}></Image>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.tech_description}>
          <p>Here are some of the technologies I use.</p>
          <p>
            I’m always looking to learn about new ways to make my products
            better.
          </p>
          <p>
            In order to create responsive, scalable and fast applications you
            have to keep track of the latest tools to do so. Therefore, my
            skillset keeps growing every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
