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
      <Hero />
      <Homepage_Projects />
    </div>
  );
};

export default Home;
