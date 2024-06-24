"use client";

import { useState } from "react";
import { AuthLayout } from "@/app/_layouts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { message } from "antd";
import Image from "next/image";
import Lendsqr from "@/public/assets/images/Lendsqr.png";
import styles from "@/app/styles/Login.module.scss";

const Login = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const router = useRouter();

  return (
    <AuthLayout>
      <div className={styles.loginContainer}>
        <div className={styles.relativeBlock}>
          <Link href="/" className={styles.homeLink}>
            <span className="sr-only">Home</span>
            <Image src={Lendsqr} className={styles.homeImage} alt="Lendsqr" />
          </Link>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <span className={styles.formHeader}>
            <h2 className={styles.title}>Welcome!</h2>
            <p className={styles.subtitle}>Enter details to login.</p>
          </span>

          <div className={styles.formBody}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              autoFocus
              className={styles.inputField}
            />
            <div className={styles.passwordContainer}>
              <button
                type="button"
                className={styles.togglePasswordButton}
                onClick={() => setPasswordHidden(!isPasswordHidden)}
              >
                {isPasswordHidden ? <p>Show</p> : <p>Hide</p>}
              </button>
              <input
                id="password"
                name="password"
                type={isPasswordHidden ? "password" : "text"}
                placeholder="Password"
                required
                className={styles.inputField}
              />
            </div>

            <Link href="" className={styles.link}>
              Forgot Password?
            </Link>

            <button
              onClick={() => router.push("/dashboard")}
              type="submit"
              className={styles.submitButton}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
