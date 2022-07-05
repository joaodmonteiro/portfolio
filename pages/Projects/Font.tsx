import React, { useEffect } from "react";
import Project_Links from "../../components/Project_Links";
import Stack from "../../components/Stack";
import styles from "../../styles/Font.module.scss";

function Font() {
  const stack = [
    { name: "HTML", img: "/images/icons/html_icon.svg" },
    { name: "CSS", img: "/images/icons/css_icon.svg" },
    { name: "Javascript", img: "/images/icons/js_icon.svg" },
  ];

  const links = {
    website: "https://joaodmonteiro.github.io/font-website/",
    github: "https://github.com/joaodmonteiro/font-website",
  };

  useEffect(() => {
    const word = document.querySelector("#word");

    setTimeout(() => {
      animateChar(0);
    }, 200);

    function animateChar(index: number) {
      if (word?.children) {
        word.children[index].classList.add(styles.animated);

        setTimeout(() => {
          word.children[index].classList.remove(styles.animated);
        }, 300);

        if (index < word.children.length - 1) {
          setTimeout(() => {
            animateChar(index + 1);
          }, 100);
        }
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.word_container}>
        <ul id="word" className={styles.word}>
          <li>f</li>
          <li>o</li>
          <li>n</li>
          <li>t</li>
          <li>.</li>
        </ul>
      </div>

      <div className={styles.description}>
        <p>
          Simple web app that lets you preview the different font-weight and
          font-stretch values by hovering over the letters.
        </p>
      </div>
      <Stack stack={stack}></Stack>
      <Project_Links {...links} />
    </div>
  );
}

export default Font;
