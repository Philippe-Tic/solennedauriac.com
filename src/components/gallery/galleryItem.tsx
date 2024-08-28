import Link from "next/link"

export const GalleryItem = ({href, src, title}: {href: string, src: string, title: string}) => {
  return (
    <Link href={href} className="gallery-item relative" style={{
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="p-4 w-full h-full group">
        <div className="
        group-hover:opacity-95 transition-all group-hover:bg-white
        w-full h-full
        flex flex-col items-center justify-center
        ">
          <h3 className="hidden opacity-0 group-hover:opacity-100 transition-all group-hover:block text-appoint text-3xl lg:text-xl xl:text-3xl">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
