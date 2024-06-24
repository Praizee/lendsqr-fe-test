import Logo from "@/public/assets/images/logo.png";
import Lendsqr from "@/public/assets/images/Lendsqr.png";
import SignIn from "@/public/assets/svg/pablo-sign-in 1.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/AuthLayout.module.scss";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.section}>
      <main className={styles.mainContainer}>
        <section className={styles.sectionInner}>
          <div className={styles.sectionBackground} />

          <div className={styles.sectionContent}>
            <Link href="/" className={styles.linkWrapper}>
              <Image src={Logo} alt="Lendsqr Logo" />
            </Link>

            <Image
              src={SignIn}
              width={600}
              height={337}
              className={styles.signInImage}
              alt="signin pablo"
            />
          </div>
        </section>

        <main className={styles.mainContent}>{children}</main>
      </main>
    </section>
  );
};
