import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Homepage_Projects from "../components/Homepage_projects";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";
import ScrollContainer from "../components/ScrollContainer";

const Home: NextPage = () => {
  return (
    <ScrollContainer>
      <div className={styles.container}>
        {/* <div className={styles.scroll_container}> */}
        <Hero />
        <Homepage_Projects />
        {/* </div> */}
      </div>
    </ScrollContainer>
  );
};

export default Home;
