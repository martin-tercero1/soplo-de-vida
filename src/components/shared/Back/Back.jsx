"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export function Back({ text = "Volver" }) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <span className="flex items-center text-[11px] text-center font-normal gap-1 desktop:w-[10%]">
        <Image src="/icons/lt.svg" alt="left arrow" width="10" height="10" />
        {text}
      </span>
    </button>
  );
}
