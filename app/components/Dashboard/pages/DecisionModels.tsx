import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Dashboard.module.scss";

const DecisionModels = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Decision Models</h2>
      </section>
    </DashboardLayout>
  );
};

export default DecisionModels;
