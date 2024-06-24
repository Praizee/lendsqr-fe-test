import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Dashboard.module.scss";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Dashboard</h2>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
