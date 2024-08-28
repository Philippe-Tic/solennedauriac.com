import { GalleryItem } from "@/components/gallery/galleryItem";

export const CommunicationGallery = () => {
  return (
    <div className="lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:ml-auto">
      <GalleryItem title="Management Agile" href="/projects/framework" src="/images/communication/framework/couv.jpg" />
      <GalleryItem title="Jabu" href="/projects/jabu" src="/images/communication/jabu/JABU.png" />
      <GalleryItem title="Les Canaux" href="/projects/canaux" src="/images/communication/canaux/Les_canaux_solution_4.jpg" />
      <GalleryItem title="SloWeAre" href="/projects/sloweare" src="/images/communication/sloweare/DA_SloWeAre_5.jpg" />
    </div>
  )
}
