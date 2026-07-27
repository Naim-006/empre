"use client";

import dynamic from "next/dynamic";

const PresentationApp = dynamic(
  () => import("@/components/presentation/PresentationApp"),
  { ssr: false },
);

export default function Home() {
  return <PresentationApp />;
}
