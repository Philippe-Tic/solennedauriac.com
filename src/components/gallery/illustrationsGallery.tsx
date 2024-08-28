import { GalleryItem } from "@/components/gallery/galleryItem"

export const IllustrationsGallery = () => {
  return (
    <div className="lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:ml-auto">
      <GalleryItem title="Inktober" href="/projects/inktober" src="/images/illustration/inktober/Inktober_couv.jpeg" />
      <GalleryItem title="Personnages" href="/projects/personnages" src="/images/illustration/personnages/Personnages_couv.jpg" />
      <GalleryItem title="Portraits" href="/projects/portraitsillus" src="/images/illustration/portraitsillus/Portrait_couv.jpg" />
    </div>
  )
}
