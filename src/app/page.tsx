"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "https://tiketo.com.br/evento/1870";
  }, []);

  return null;
}
