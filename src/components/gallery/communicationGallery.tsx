import { GalleryItem } from "@/components/gallery/galleryItem";

export const CommunicationGallery = () => {
  return (
    <div className="lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:ml-auto">
      <GalleryItem title="Mainsquare" desc="2024" href="/projects/mainsquare" src="/images/mainsquare/macklemore.jpg" />
    </div>
  )
}
