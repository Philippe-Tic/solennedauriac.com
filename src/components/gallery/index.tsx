"use client"

import { CommunicationGallery } from "@/components/gallery/communicationGallery";
import { GraphismGallery } from "@/components/gallery/graphismGallery";
import { IllustrationsGallery } from "@/components/gallery/illustrationsGallery";
import { MediaGallery } from "@/components/gallery/mediaGallery";
import { MotionGallery } from "@/components/gallery/motionGallery";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export enum GalleryType {
  GRAPHISM = "GRAPHISM",
  COMMUNICATION = "COMMUNICATION",
  MEDIA = "MEDIA",
  ILLUSTRATIONS = "ILLUSTRATIONS",
  MOTION = "MOTION"
}

export const Gallery = () => {
  const [activeGallery, setActiveGallery] = useState<GalleryType>(GalleryType.GRAPHISM);
  const handleSetActiveGallery = (gallery: GalleryType) => () => {
    setActiveGallery(gallery)
  }

  const displayGallery = {
    [GalleryType.GRAPHISM]: <GraphismGallery />,
    [GalleryType.COMMUNICATION]: <CommunicationGallery />,
    [GalleryType.MEDIA]: <MediaGallery />,
    [GalleryType.ILLUSTRATIONS]: <IllustrationsGallery />,
    [GalleryType.MOTION]: <MotionGallery />
  }

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-4">
      <div className="flex flex-row lg:flex-col lg:px-16 pb-8 lg:py-8 gap-8">
        <h1>Mes Projets</h1>
        <div className="hidden lg:flex flex-col gap-8">
          <Button isActive={activeGallery === GalleryType.GRAPHISM} onClick={handleSetActiveGallery(GalleryType.GRAPHISM)} variant="nav">Graphisme</Button>
          <Button isActive={activeGallery === GalleryType.COMMUNICATION} onClick={handleSetActiveGallery(GalleryType.COMMUNICATION)} variant="nav">Communication</Button>
          <Button isActive={activeGallery === GalleryType.MEDIA} onClick={handleSetActiveGallery(GalleryType.MEDIA)} variant="nav">Médias Sociaux</Button>
          <Button isActive={activeGallery === GalleryType.ILLUSTRATIONS} onClick={handleSetActiveGallery(GalleryType.ILLUSTRATIONS)} variant="nav">Illustrations</Button>
          <Button isActive={activeGallery === GalleryType.MOTION} onClick={handleSetActiveGallery(GalleryType.MOTION)} variant="nav">Motion Design</Button>
        </div>
        <div className="flex-1 lg:hidden" />
        <select className="lg:hidden w-fit bg-secondary text-tertiary py-2 px-2 border-r-8 border-secondary rounded-md text-lg" value={activeGallery} onChange={(e) => setActiveGallery(e.target.value as GalleryType)}>
          <option value={GalleryType.GRAPHISM}>Graphisme</option>
          <option value={GalleryType.COMMUNICATION}>Communication</option>
          <option value={GalleryType.MEDIA}>Médias Sociaux</option>
          <option value={GalleryType.ILLUSTRATIONS}>Illustrations</option>
          <option value={GalleryType.MOTION}>Motion Design</option>
        </select>
      </div>
      <div className="col-span-2 justify-self-end w-full">
        {displayGallery[activeGallery]}
      </div>
    </section>
  )
}
