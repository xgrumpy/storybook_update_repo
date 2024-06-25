import  { StaticImageData } from 'next/image';

export type IconType = 'heart' | 'bp' | 'oxygen' | 'infoCircle';

export type CarousselCardType = {
    title: string;
    description: string;
    image?: StaticImageData;
  }
export type DynamicCardType = {
    title: string;
    description: string;
  }

  export type VitalsCardType = {
    title: string;
    icon?: IconType | string;
    date?: string;
    time?: string;
    dataValue?: string;
    dataValueStyle?: string;
  
  }
export type DynamicCardContainerProps = {
    cards: CarousselCardType[];
    chunkSize?: number;
  };
  