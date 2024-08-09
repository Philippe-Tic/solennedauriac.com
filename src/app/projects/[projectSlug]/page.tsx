import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SocialMedia } from "@/components/socialMedia";
import { Divider } from "@/components/ui/divider";
import { getPostData } from "@/lib/posts";
import Image from "next/image";

export default async function Page({ params }: any) {
  const postData = await getPostData(params.projectSlug) as any;
  return (
     <>
      <Header />
      <main className="flex flex-col gap-16 pt-16">
        {postData.title}
        {postData.description}
        {postData.projectTypes}
        {postData.softwareUsed}
        <Image
          alt='img'
          src={`/images/${postData.id}/${postData.mainImage}`}
          width="300" height="300" style={{width: '300px', height:'auto'}}
        />
        {postData?.otherImages?.map((img: any) => (
          <Image key={img} alt='img' src={`/images/${postData.id}/${img}`} width="300" height="300" style={{width: '300px', height:'auto'}} />
        ))}
        <SocialMedia />
        <Divider number={8} />
        <Footer />
      </main>
    </>
  );
}
