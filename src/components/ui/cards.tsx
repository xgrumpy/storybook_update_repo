import Image from 'next/image';
import Link from 'next/link';
import { DynamicCardContainerProps, CarousselCardType, DynamicCardType } from '@/types/CardTypes';
import { chunkArray } from '@/utils/arrayManipulation';


export const CarousselCard = ({ title, description, image }: CarousselCardType) => {
  return (
    <div className="card w-80 h-48 bg-white text-primary-content m-4 outline outline-outlineGrey shadow-test">
      <div className="flex flex-row">
        {image && (
          <div className="w-1/5 flex flex-col">
            <Image
              src={image}
              alt="location-icon"
              priority
              data-testid="proxie-logo"
              className='w-16 mt-4 ml-4'
            />
          </div>
        )}
        <div className="w-4/5 px-8 flex flex-col gap-2 mt-2">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link href='#' className="text-smallLink text-primaryBlue underline cursor-pointer">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const DynamicCard = ({ title, description }: DynamicCardType) => {
  return (
    <div className="card w-11/12 overflow-hidden h-48 bg-white text-primary-content m-4 outline outline-outlineGrey shadow-test">
      <div className="flex flex-row">
        <div className="w-full px-8 flex flex-col gap-2 mt-2">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link href='#' className="text-smallLink text-primaryBlue underline cursor-pointer">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const DynamicCardContainer: React.FC<DynamicCardContainerProps> = ({ cards, chunkSize = 2 }) => {
  const chunkedCards = chunkArray(cards, chunkSize);

  return (

    <div className="flex flex-row mr-auto pl-14">
      {chunkedCards.map((chunk, index) => (
        <div key={index} className="flex flex-col w-1/2">
          {chunk.map(card => (
            <DynamicCard
              key={card.title} // Assuming title is unique; otherwise, use a proper key
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ))}
    </div>
  );
};