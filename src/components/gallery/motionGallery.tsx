import { GalleryItem } from "@/components/gallery/galleryItem"

export const MotionGallery = () => {
  return (
    <div className="lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:ml-auto">
      <GalleryItem title="Video Agile" href="/projects/agilemotion" src="/images/communication/framework/couv.jpg" />
      <GalleryItem title="Vidéo L'Échappoterie" href="/projects/echappoteriemotion" src="/images/media/echappoterie/lechappoterie_couv.jpg" />
      <GalleryItem title="SloWeAre" href="/projects/slowearemotion" src="/images/communication/sloweare/DA_SloWeAre_5.jpg" />
    </div>
  )
}
