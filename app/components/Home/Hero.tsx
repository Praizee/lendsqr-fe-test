"use client";

import Image from "next/image";
import HeroIllustration from "@/public/assets/svg/HeroIllustration.svg";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/Hero.module.scss";

const Hero = () => {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.hero__text}>
        <div>
          <h1>Lendsqr: The best loan management system for smart lenders</h1>
          <p>
            Lending is profitable but also difficult but not with Lendsqr!
            Start, launch and scale your lending business easily across multiple
            channels and make smart decisions all at 1/100 the cost!
          </p>
          <button onClick={() => router.push("/login")}>Get Started</button>
        </div>
      </div>

      <div className={styles.hero__image}>
        <Image
          src={HeroIllustration}
          alt="illustration"
          width={900}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
