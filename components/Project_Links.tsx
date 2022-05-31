import { NextPage } from "next";
import styles from "../styles/Project_Links.module.scss";

interface Props {
  website: string;
  github: string;
}

const Project_Links = (links: Props) => {
  // const { website } = props;
  // const { github } = props;
  return (
    <div className={styles.container}>
      <div className={styles.links_container}>
        <a href={links.website} target="_blank" rel="noreferrer">
          <div className={styles.website}>
            <img src="/images/arrow.svg" alt="arrow" />
            <span>Website</span>
          </div>
        </a>
        <a href={links.github} target="_blank" rel="noreferrer">
          <div className={styles.github}>
            <img src="/images/arrow.svg" alt="arrow" />
            <span>Github</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project_Links;
