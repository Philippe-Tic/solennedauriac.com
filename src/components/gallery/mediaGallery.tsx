import { GalleryItem } from "@/components/gallery/galleryItem"

export const MediaGallery = () => {
  return (
    <div className="lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:ml-auto">
      <GalleryItem href="/projects/1" />
      <GalleryItem href="/projects/1" />
      <GalleryItem href="/projects/1" />
      <GalleryItem href="/projects/1" />
      <GalleryItem href="/projects/1" />
      <GalleryItem href="/projects/1" />
      <GalleryItem href="/projects/1" />
      <GalleryItem href="/projects/1" />
      <GalleryItem href="/projects/1" />
    </div>
  )
}
