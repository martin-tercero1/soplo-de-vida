import CallToAction from "@/components/about/CallToAction/CallToAction";
import HowWeDoIt from "@/components/about/HowWeDoIt/HowWeDoIt";
import WhoWeAre from "@/components/about/WhoWeAre/WhoWeAre";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About(){

    const homeURLs = [
        { name: "Home", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
      ];

    return(
        <>
            <Header/>
            <Link href="/" >      
                <div className="text-md text-black font-medium desktop:font-bold mobile:m-4 desktop:mx-5 flex flex-row mobile:justify-start items-center mobile:gap-2">
                    <span className="text-base desktop:w-[10%]"><Image src="/icons/lt.svg" alt="left arrow" width='10' height='10'/></span>
                    <h2 className="desktop:w-[90%] tablet:text-center">Nosotros</h2>
                </div> 
            </Link>
            <WhoWeAre />
            <HowWeDoIt/>
            <CallToAction/>
            <Footer urlList={homeURLs}></Footer>
        </>
    );
}