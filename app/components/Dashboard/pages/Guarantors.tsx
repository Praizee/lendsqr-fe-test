import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Dashboard.module.scss";

const Guarantors = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Guarantors</h2>
      </section>
    </DashboardLayout>
  );
};

export default Guarantors;
