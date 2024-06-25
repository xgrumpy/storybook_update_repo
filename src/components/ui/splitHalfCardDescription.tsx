import Image from 'next/image';
import AVI from '@/images/echo.png';


interface SplitCardProps {
  name: string;
  description: string;
}
interface StoryBookProps {
  mobile: boolean;
}

export default function SplitHalfCardDescription({ name, description }: SplitCardProps, mobile: StoryBookProps) {

  return (
    <div className='flex flex-col  h-32 outline outline-outlineGrey rounded-lg bg-primaryBlue shadow-test text-white'>
      <span className='flex flex-row mt-4  ml-5'>
      <Image
          src={AVI}
          alt="location-icon"
          priority
          data-testid="proxie-logo"
          className='max-h-10 w-10 mr-8'
        />
        <span className='flex text-titleCard'>{name}</span>
      </span>
      <span className='flex flex-row mt-0  ml-5'>
        <span className='flex text-titleCard font-light'>{description}</span>
      </span>
    </div>
  );
}
