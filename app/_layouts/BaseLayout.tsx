import { Navbar } from "@/app/components/common";
import styles from "../styles/BaseLayout.module.scss";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.baseLayout}>
      <Navbar />
      {children}
    </section>
  );
};
