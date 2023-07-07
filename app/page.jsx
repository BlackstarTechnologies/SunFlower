"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Base() {
  const router = useRouter();
  router.push("/home");
  return <div>Hello World</div>;
}
