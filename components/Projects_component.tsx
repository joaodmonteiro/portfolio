import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Projects_component.module.scss";
import ScrollContainer from "./ScrollContainer";
import Image from "next/image";
import multitrackMockup from "../public/images/multitrack_mockup.png";
import riderRotationMockup from "../public/images/riderrotation_mockup.png";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.project_container}>
        <Link href="/Projects/Multitrack">
          <a>
            {" "}
            <div className={`${styles.image_container} ${styles.multitrack}`}>
              <Image
                src={multitrackMockup}
                alt="Multitrack website seen on a laptop and a smartphone."
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </a>
        </Link>
        <div className={styles.project_name}>Multitrack - Charity Website</div>
      </div>
      <div className={styles.project_container}>
        <Link href="/Projects/RiderRotation">
          <a>
            <div
              className={`${styles.image_container} ${styles.riderrotation}`}>
              <Image
                src={riderRotationMockup}
                alt="Rider rotation website seen on a laptop."
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </a>
        </Link>
        <div className={styles.project_name}>
          Rider Rotation - Dashboard Application
        </div>
      </div>
    </div>
  );
};

export default Projects;
