import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialMedia } from "@/components/socialMedia";
import { Divider } from "@/components/ui/divider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 pt-16">
        <Hero />
        <Divider number={8} />
        <Gallery />
        <Divider number={8} />
        <Contact />
        <Divider number={8} />
        <SocialMedia />
        <Divider number={8} />
        <Footer />
      </main>
    </>
  );
}
