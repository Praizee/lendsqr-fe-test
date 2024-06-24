import { DashboardLayout } from "@/app/_layouts";
import React from "react";
import styles from "@/app/styles/Users.module.scss";

const Users = () => {
  return (
    <DashboardLayout>
      <section className={styles.container}>
        <h2>Users</h2>
      </section>
    </DashboardLayout>
  );
};

export default Users;
