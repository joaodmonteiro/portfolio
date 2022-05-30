import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Projects_component.module.scss";
import ScrollContainer from "./ScrollContainer";
import Image from "next/image";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.project_container}>
        <div className={`${styles.image_container} ${styles.multitrack}`}>
          <Image
            src="/images/multitrack_mockup.png"
            alt=""
            width={1000}
            height={1000}
            objectFit={"scale-down"}
          />
        </div>
        <Link href="/Projects/Multitrack">
          <a>Multitrack - Charity Website</a>
        </Link>
      </div>
      <div className={styles.project_container}>
        <div className={`${styles.image_container} ${styles.riderrotation}`}>
          <Image
            src="/images/riderrotation_mockup.png"
            alt=""
            width={1000}
            height={1000}
            objectFit={"scale-down"}
          />
        </div>
        <Link href="/Projects/RiderRotation">
          <a>Rider Rodation - Dashboard Application</a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
