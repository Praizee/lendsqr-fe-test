import React from "react";
import { BaseLayout } from "@/app/_layouts";
import { Hero } from "@/app/components/Home";

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Hero />
      </BaseLayout>
    </>
  );
}
