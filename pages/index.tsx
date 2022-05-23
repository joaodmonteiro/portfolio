import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Homepage_Projects from "../components/Homepage_projects";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.scroll_container}>
        <Hero />
        <Homepage_Projects />
        <Homepage_Projects />
        <Homepage_Projects />
      </div>
    </div>
  );
};

export default Home;
