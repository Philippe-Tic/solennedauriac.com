import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SocialMedia } from "@/components/socialMedia";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Divider } from "@/components/ui/divider";
import { getPostData } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

export enum routesNames {
  agile='Agile Lab',
  agileMotion='AXA Video Agile',
  ballad='The ballad of the fox',
  bookstagram='Bookstagram',
  bright='All the bright places',
  canaux='Les Canaux',
  connection='Change Connection',
  echappoterie='L\'Echappoterie',
  echappoteriemotion='Vidéo L\'Echappoterie',
  eclosion='L\'éclosion livresque',
  finchiscreating='Finch is creating',
  finchisreading='Finch is reading',
  flower='A flower in a boot',
  framework='Management Agile',
  hope='Hope dies last',
  inktober='Inktober',
  jabu='Jabu',
  key='Key Users',
  mainsquare='Mainsquare Festival',
  marsnniversaire='Mars-nniversaire',
  me='Autoportraits',
  patriarchy='Dear Patriarchy',
  personnages='Personnages',
  portraitsillus='Portraits illustrés',
  rockin='Rock\'in Evreux',
  rose='Plus sombre est la rose',
  sloweare='SloWeAre',
  sloweareMotion='Vidéo SloWeAre',
}

type Props = {
  params: { projectSlug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  const title = routesNames[params.projectSlug as keyof typeof routesNames]

  return {
    title: `Solenne Dauriac - ${title}`,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}



export default async function Page({ params }: any) {
  const postData = await getPostData(params.projectSlug) as any;
  return (
    <>
      <Link href='/'>
        <Button variant="secondary" className="fixed z-10 rounded-t-none top-0 left-8 md:left-32 text-lg">
          <ArrowLeft className="mr-2 h-4 w-4"  />
          Retour
        </Button>
      </Link>
      <Header />
      <main className="flex flex-col gap-16 pt-16">
        <div className={`grid grid-cols-1 ${postData?.mainImage ? 'md:grid-cols-2' : ''} px-2 md:px-8`}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h1>{postData.title}</h1>
              <p className="text-xl text-tertiary">{postData.description}</p>
            </div>
          </div>
          {
            postData?.mainImage && (
              <Image
              alt='img'
              src={`/images/${postData.slug}/${postData.id}/${postData.mainImage}`}
              width="600" height="600" className="w-80 h-auto rounded-xl justify-self-center md:justify-self-end mt-8 md:mt-0"
              priority
              />
            )
          }
        </div>

        {
          postData?.otherImages?.length && (
            <Carousel>
              <CarouselContent>
                {postData?.otherImages?.map((img: any) => (
                  <CarouselItem key={img} className="basis-1/1 sm:basis-1/2 md:basis-1/3 py-6">
                  <Image alt='img' src={`/images/${postData.slug}/${postData.id}/${img}`} width="600" height="600" className="w-72 h-auto rounded-xl shadow-lg justify-self-end" />
                    </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" variant='secondary' />
              <CarouselNext className="hidden lg:flex" variant='secondary' />
            </Carousel>
          )
        }
        {postData?.video && (
          <div className="flex justify-center">
            <video width="100%" height="240" controls>
              <source src={`/images/${postData.slug}/${postData.id}/${postData.video}`} type="video/mp4" />
            </video>
          </div>
        )}

        {!!postData?.sectionContent?.length && postData?.sectionContent.map((section: any, index: number) => (
          <div key={index} className="px-2 md:px-8">
            <h2 className="font-paragraph text-xl text-tertiary">{section.text} {!!section?.link?.path && section?.link?.label && <Link className="underline" href={section.link.path} target="_blank">{section.link.label}</Link>}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {!!section?.media?.length && section?.media?.map((media: any, index: number) => (
              <div key={index} className="gap-4 w-full">
                  {media.type === 'image' &&
                    <Image alt='img' src={media.path} width="600" height="600" className="w-full py-4 h-auto rounded-xl" />
                  }
                  {media.type === 'video' && (
                      <div className="flex justify-center py-4">
                        <video width="100%" height="240" controls>
                          <source src={media.path} type="video/mp4" />
                        </video>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        ) )}

        <Divider number={8} />
        <SocialMedia />
        <Divider number={8} />
        <Footer />
      </main>
    </>
  );
}
