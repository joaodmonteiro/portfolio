import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Homepage_Projects from "../components/Homepage_projects";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";
import ScrollContainer from "../components/ScrollContainer";
import Projects_component from "../components/Projects_component";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Projects_component />
    </div>
  );
};

export default Home;
