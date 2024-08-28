import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export enum routesNames {
  agile='Agile Lab',
  agileMotion='AXA Video Agile',
  ballad='The ballad of the fox',
  bookstagram='Bookstagram',
  bright='All the bright places',
  canaux='Les Canaux',
  connection='Change Connection',
  echappoterie='L\'Echappoterie',
  echappoteriemotion='Vidéo L\'Echappoterie',
  eclosion='L\'éclosion livresque',
  finchiscreating='Finch is creating',
  finchisreading='Finch is reading',
  flower='A flower in a boot',
  framework='Management Agile',
  hope='Hope dies last',
  inktober='Inktober',
  jabu='Jabu',
  key='Key Users',
  mainsquare='Mainsquare Festival',
  marsnniversaire='Mars-nniversaire',
  me='Autoportraits',
  patriarchy='Dear Patriarchy',
  personnages='Personnages',
  portraitsillus='Portraits illustrés',
  rockin='Rock\'in Evreux',
  rose='Plus sombre est la rose',
  sloweare='SloWeAre',
  sloweareMotion='Vidéo SloWeAre',
}
