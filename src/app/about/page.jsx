import CallToAction from "@/components/about/CallToAction/CallToAction";
import HowWeDoIt from "@/components/about/HowWeDoIt/HowWeDoIt";
import WhoWeAre from "@/components/about/WhoWeAre/WhoWeAre";

export default function About(){

    return(
        <>
            <WhoWeAre />
            <HowWeDoIt/>
            <CallToAction/>
        </>
    );
}