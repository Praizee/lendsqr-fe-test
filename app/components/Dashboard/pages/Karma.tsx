import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Dashboard.module.scss";

const Karma = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Karma</h2>
      </section>
    </DashboardLayout>
  );
};

export default Karma;
