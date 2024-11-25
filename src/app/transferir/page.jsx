"use client"
import { CopyInformation } from "@/components/home/Donate/CopyInformation";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

  return (
    <>
      <nav className="bg-primary leading- w-screen flex justify-around items-center h-[48px]">
        <svg
          width="32"
          height="26"
          className="fill-white flex items-center"
          onClick={() => router.back()}
        >
          <path
            d="m17.835 3.87-1.78-1.77-9.89 9.9 9.9 9.9 1.77-1.77L9.705 12l8.13-8.13Z"
          />
        </svg>
        <h1 className="font-bold text-md leading-8 text-center text-white">
          Transferir
        </h1>
        <span className="text-primary w-[32px]">.</span>
      </nav>
      <main className="py-3 px-1">
        <CopyInformation/>
      </main>
    </>
  );
}