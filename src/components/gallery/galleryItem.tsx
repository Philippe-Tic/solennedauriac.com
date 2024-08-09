import Link from "next/link"

export const GalleryItem = ({href}: {href: string}) => {
  return (
      <Link href={href} className="gallery-item">
        <div className="p-4 w-full h-full group">
          <div className="
          group-hover:opacity-80 transition-all group-hover:bg-white
          w-full h-full
          flex flex-col items-center justify-center
          ">
            <h3 className="hidden opacity-0 group-hover:opacity-100 transition-all group-hover:block text-appoint text-3xl lg:text-xl xl:text-3xl">Titre du projet</h3>
            <p className="hidden opacity-0 group-hover:opacity-100 transition-all group-hover:block text-tertiary text-md lg:text-sm xl:text-md">Description du projet</p>
          </div>
        </div>
      </Link>
  )
}
