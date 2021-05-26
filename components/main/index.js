import { useContext } from "react";

import HomeContext from "../../context/home/HomeContext";

import Layout from "../layout";
import Form from "../form";

import styles from "./main.module.scss";

/**
 * Desc: Principal home
 */

const Main = () => {
  const homeContext = useContext(HomeContext);
  const { airline } = homeContext;

  return (
    <Layout>
      <div className={styles.main}>
        <p>
          Hola, bienvenido, sabemos que quieres viajar en
          {airline !== null ? (
            <span className={styles.airline}>{airline}</span>
          ) : (
            <span className={styles.airline}>Vivair</span>
          )}
        </p>
        <Form />
      </div>
    </Layout>
  );
};

export default Main;
