import { Button } from "@/components/ui/button"
import { Notebook } from "@/components/ui/notebook"

export const Hero = () => {
  return (
      <section className="grid lg:gap-32 xl:gap-64 grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="grid gap-4">
            <h1 className="text-6xl">Hello !</h1>
            <p className="text-2xl text-tertiary">
              Graphisme, communication, gestion de projet, motion design, community management, direction artistique...
              Je suis un couteau-suisse créatif !
            </p>
            <p className="text-2xl text-tertiary">
              Investie dans chacun de mes projets et touche à tout, je recherche aujourd’hui ma prochaine expérience en CDI ou en Freelance.
            </p>
          </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-2">
          <a href='https://www.fnac.com/livre-numerique/a20763483/Solenne-Dauriac-Perfectly-Wrong-for-Me#FORMAT=ebook%20(ePub)' target="_blank" rel="noreferrer">
            <Button size="lg" variant="secondary" className="text-2xl py-6 w-full md:w-fit">J&apos;ai écrit un livre</Button>
          </a>
          <a href='#contact'>
            <Button size="lg" className="text-2xl py-6 w-full md:w-fit">Contactez-moi !</Button>
          </a>
          </div>
      </div>
      <div className="xl:max-w-lg max-w-md w-full m-auto pt-16 lg:pt-0">
        <Notebook />
      </div>
    </section>
  )
}
