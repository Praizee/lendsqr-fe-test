"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import styles from "@/app/styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <Link href="/">
            <Image src={Logo} alt="Lendsqr logo" />
          </Link>
        </div>
        <div className={styles.navbar__button}>
          <Link href="/login" className={styles.navbar__login}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
