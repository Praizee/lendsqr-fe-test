import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Dashboard.module.scss";

const Loans = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Loans</h2>
      </section>
    </DashboardLayout>
  );
};

export default Loans;
