import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Dashboard.module.scss";

const Savings = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Savings</h2>
      </section>
    </DashboardLayout>
  );
};

export default Savings;
