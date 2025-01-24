import Link from "next/link";
import Image from "next/image";

export function Back({ text = "Volver" }) {
  return (
    <Link href="/catalogo">
      <span className="flex items-center text-[11px] text-center font-normal gap-1 desktop:w-[10%]">
        <Image src="/icons/lt.svg" alt="left arrow" width="10" height="10" />
        {text}
      </span>
    </Link>
  );
}
