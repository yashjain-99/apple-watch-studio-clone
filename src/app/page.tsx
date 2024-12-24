"use client";

import { Suspense } from "react";

import Main from "@/components/main";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Main />
    </Suspense>
  );
}
