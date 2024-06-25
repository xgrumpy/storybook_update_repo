import Image from 'next/image';
import AVI from '@/images/echo.png';
import Star from '@/images/star.png';


interface SplitCardProps {
  name: string;
  description: string;
}
interface StoryBookProps {
  mobile: boolean;
}

export default function SplitHalfCardDescription({ name, description }: SplitCardProps, mobile: StoryBookProps) {

  return (
    <div className='flex flex-col  h-28 className="flex flex-col bg-gradient-to-r from-custom-blue-light via-custom-blue-middle to-custom-blue-dark rounded-lg shadow-test text-white'>
      <Image
          src={Star}
          alt="location-icon"
          priority
          data-testid="proxie-logo"
          className='h-28 w-44 absolute ml-15p opacity-20'
        />
      <span className='flex flex-row mt-2  ml-5'>
      <Image
          src={AVI}
          alt="location-icon"
          priority
          data-testid="proxie-logo"
          className='max-h-10 w-10 mr-3'
        />
        <span className='flex font-semibold  text-titleCard flex justify-center items-center'>{name}</span>
      </span>
      <span className='flex flex-row mt-0  ml-5'>
        <span className='font-light'>{description}</span>
      </span>
    </div>
  );
}
