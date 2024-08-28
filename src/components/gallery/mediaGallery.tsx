import { GalleryItem } from "@/components/gallery/galleryItem"

export const MediaGallery = () => {
  return (
    <div className="lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:ml-auto">
      <GalleryItem title="Bookstagram" href="/projects/bookstagram" src="/images/media/bookstagram/bookstagram_couv.jpg" />
      <GalleryItem title="L'Échappoterie" href="/projects/echappoterie" src="/images/media/echappoterie/lechappoterie_couv.jpg" />
      <GalleryItem title="Finchiscreating" href="/projects/finchiscreating" src="/images/media/finchiscreating/finch_is_creating_couverture.jpg" />
      <GalleryItem title="Finchisreading" href="/projects/finchisreading" src="/images/media/finchisreading/finch_is_reading_couv.jpg" />
    </div>
  )
}
