import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Dashboard.module.scss";

const LoanRequests = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Loan Requests</h2>
      </section>
    </DashboardLayout>
  );
};

export default LoanRequests;
