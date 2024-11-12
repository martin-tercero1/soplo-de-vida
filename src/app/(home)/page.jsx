import { Header } from "@/components/home/Header";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { About } from "@/components/home/About";
import { Donate } from "@/components/home/Donate";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <HeroCarousel></HeroCarousel>
      <About></About>
      <Donate></Donate>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
