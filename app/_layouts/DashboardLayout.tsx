import { DashboardSider, DashNav } from "@/app/components/common";
import styles from "@/app/styles/DashboardLayout.module.scss";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className={styles.drawer}>
      <input
        id="my-drawer-2"
        type="checkbox"
        className={styles.drawer_toggle}
        title="toggle drawer"
      />
      <div className={styles.drawer_content}>
        <DashNav />
        <div className={styles.children_container}>{children}</div>
      </div>
      <DashboardSider />
    </section>
  );
};
