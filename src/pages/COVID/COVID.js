import React from "react";
import Cards from "../../components/Cards/Cards";
import CountryPicker from "../../components/CountryPicker/CountryPicker";
import Chart from "../../components/Chart/Chart";

import styles from "./COVID.module.css";

const COVID = () => {
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default COVID;
