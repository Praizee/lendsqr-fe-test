import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Dashboard.module.scss";

const Whitelist = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Whitelist</h2>
      </section>
    </DashboardLayout>
  );
};

export default Whitelist;
