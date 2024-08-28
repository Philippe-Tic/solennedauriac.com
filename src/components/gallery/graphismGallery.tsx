import { GalleryItem } from "@/components/gallery/galleryItem"

export const GraphismGallery = () => {
  return (
    <div className="lg:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 lg:ml-auto">
      <GalleryItem title="Agile Lab" href="/projects/agile" src="/images/graphisme/agile/Agile_Lab_logo_couverture.jpg" />
      <GalleryItem title="The ballad of the fox" href="/projects/ballad" src="/images/graphisme/ballad/Couverture_of_TBOFTATF_mock_up.png" />
      <GalleryItem title="All the bright places" href="/projects/bright" src="/images/graphisme/bright/Couverture_atbp_mock_up.png" />
      <GalleryItem title="Change Connection" href="/projects/connection" src="/images/graphisme/connection/Logo_Change_Connection_couverture.jpg" />
      <GalleryItem title="L'éclosion livresque" href="/projects/eclosion" src="/images/graphisme/eclosion/Logo_eclosion_livresque_couverture.jpg" />
      <GalleryItem title="A flower in a boot" href="/projects/flower" src="/images/graphisme/flower/AFIAB_logo_couverture.png" />
      <GalleryItem title="Hope dies last" href="/projects/hope" src="/images/graphisme/hope/Couverture_hdl_mock_up.png" />
      <GalleryItem title="Key Users" href="/projects/key" src="/images/graphisme/key/Logo_Key_Users_couverture.jpg" />
      <GalleryItem title="Mainsquare" href="/projects/mainsquare" src="/images/graphisme/mainsquare/Affiche_mainsquare_couverture.jpg" />
      <GalleryItem title="Mars-nniversaire" href="/projects/marsnniversaire" src="/images/graphisme/marsnniversaire/Logo_mars_nniversaire_couverture.png" />
      <GalleryItem title="Portraits" href="/projects/me" src="/images/graphisme/me/Logo_Solenne_DAURIAC_couverture.png" />
      <GalleryItem title="Dear Patriarchy" href="/projects/patriarchy" src="/images/graphisme/patriarchy/Logo_dear_patriarchy_couverture.jpg" />
      <GalleryItem title="Rock'in Evreux" href="/projects/rockin" src="/images/graphisme/rockin/Affiche_Rock_In_Evreux_2024_couverture.jpg" />
      <GalleryItem title="Plus sombre est la rose" href="/projects/rose" src="/images/graphisme/rose/rose_mockup.png" />
    </div>
  )
}
