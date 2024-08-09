import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SocialMedia } from "@/components/socialMedia";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Divider } from "@/components/ui/divider";
import { getPostData } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: any) {
  const postData = await getPostData(params.projectSlug) as any;
  return (
    <>
      <Link href='/'>
        <Button variant="secondary" className="absolute z-10 rounded-t-none top-0 left-8 md:left-32 text-lg">
          <ArrowLeft className="mr-2 h-4 w-4"  />
          Retour
        </Button>
      </Link>
      <Header />
      <main className="flex flex-col gap-16 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h1>{postData.title}</h1>
              <p className="text-xl text-tertiary">{postData.description}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl text-primary">Type de projet</h2>
              <p className="text-xl text-tertiary">{postData.projectTypes}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl text-primary">Logiciels utilisés</h2>
              <p className="text-xl text-tertiary">{postData.softwareUsed}</p>
            </div>
          </div>
          <Image
            alt='img'
            src={`/images/${postData.id}/${postData.mainImage}`}
            width="600" height="600" className="w-80 h-auto rounded-xl shadow-lg justify-self-center md:justify-self-end mt-8 md:mt-0"
            priority
          />
        </div>

        <Carousel>
          <CarouselContent>
            {postData?.otherImages?.map((img: any) => (
              <CarouselItem key={img} className="basis-1/1 sm:basis-1/2 md:basis-1/3 py-6">
              <Image alt='img' src={`/images/${postData.id}/${img}`} width="600" height="600" className="w-72 h-auto rounded-xl shadow-lg justify-self-end" />
                </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" variant='secondary' />
          <CarouselNext className="hidden lg:flex" variant='secondary' />
        </Carousel>

        <Divider number={8} />
        <SocialMedia />
        <Divider number={8} />
        <Footer />
      </main>
    </>
  );
}
