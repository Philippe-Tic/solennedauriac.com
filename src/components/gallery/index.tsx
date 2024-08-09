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
          <Button onClick={handleSetActiveGallery(GalleryType.GRAPHISM)} variant="nav">Graphisme</Button>
          <Button onClick={handleSetActiveGallery(GalleryType.COMMUNICATION)} variant="nav">Communication</Button>
          <Button onClick={handleSetActiveGallery(GalleryType.MEDIA)} variant="nav">Médias Sociaux</Button>
          <Button onClick={handleSetActiveGallery(GalleryType.ILLUSTRATIONS)} variant="nav">Illustrations</Button>
          <Button onClick={handleSetActiveGallery(GalleryType.MOTION)} variant="nav">Motion Design</Button>
        </div>
      </div>
      <div className="col-span-2 justify-self-end w-full">
        {displayGallery[activeGallery]}
      </div>
    </section>
  )
}
