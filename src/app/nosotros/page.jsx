import CallToAction from "@/components/about/CallToAction/CallToAction";
import HowWeDoIt from "@/components/about/HowWeDoIt/HowWeDoIt";
import WhoWeAre from "@/components/about/WhoWeAre/WhoWeAre";
import { Header } from "@/components/home/Header";
import { Back } from "@/components/shared/Back/";

export default function About() {

  return (
    <>
      <Header />
      <div className="text-md text-black font-medium desktop:font-bold mobile:m-4 desktop:mx-5 flex flex-row mobile:justify-start items-center mobile:gap-2">
        <Back />
        <h2 className="desktop:w-[90%] tablet:text-center">Nosotros</h2>
      </div>
      <WhoWeAre />
      <HowWeDoIt />
      <CallToAction />
    </>
  );
}
