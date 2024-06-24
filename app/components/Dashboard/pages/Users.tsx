import { DashboardLayout } from "@/app/_layouts";
import React from "react";

const Users = () => {
  return (
    <DashboardLayout>
      <section className="max-w-[1640px] flex flex-col gap-6 px-4 lg:px-8 py-8 md:h-screen overflow-y-scroll">
        <h2>Users</h2>
      </section>
    </DashboardLayout>
  );
};

export default Users;
