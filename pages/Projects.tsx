import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Projects.module.scss";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.project_container}>
        <div className={`${styles.image_container} ${styles.multitrack}`}>
          <img src="/images/multitrack_mockup.png" alt="" />
        </div>
        <Link href="/Projects/Multitrack">
          <a>Multitrack (Charity Website)</a>
        </Link>
      </div>
      <div className={styles.project_container}>
        <div className={`${styles.image_container} ${styles.riderrotation}`}>
          <img src="/images/riderrotation_mockup.png" alt="" />
        </div>
        <Link href="/Projects/RiderRotation">
          <a>Rider Rodation (Dashboard Application)</a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
