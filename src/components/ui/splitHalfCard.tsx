import Image from 'next/image';
import Link from 'next/link';
import { User } from '@/types/UserTypes';
import Profile from '@/images/profile.png';
import Temp from '@/images/temp.png';
import Location from '@/images/location.png';
import AVI from '@/images/card-avi.png';


interface SplitCardProps {
  name: string;
  relationship: string;
  location: string;
  age: string;
  temp: string;
  // dataValueStyle?: string;

}
interface StoryBookProps {
  mobile: boolean;
}

export default function SplitHalfCard({ name, relationship, location, age, temp }: SplitCardProps, mobile: StoryBookProps) {

  return (
    <div className='flex flex-col  h-32 outline outline-outlineGrey rounded-lg bg-primaryBlue shadow-test text-white'>
      <span className='flex flex-row mt-8  ml-5'>
      <Image
          src={AVI}
          alt="location-icon"
          priority
          data-testid="proxie-logo"
          className='max-h-10 w-10 mr-8'
        // style={}
        />
        <span className='flex text-titleCard'>{name}</span>
        <span className='flex text-titleCard text-blueLight font-semibold'>{relationship}</span>
      </span>
      <span className='flex flex-row mt-4  ml-5'>

        <Image
          src={Location}
          alt="location-icon"
          priority
          data-testid="proxie-logo"
          className='max-h-6 w-6 '
        // style={}
        />
        <span className='flex mx-auto text-titleCard font-light'>{location}</span>

        <Image
          src={Profile}
          alt="profile-icon"
          priority
          data-testid="proxie-logo"
          className='max-h-6 w-6 '
        // style={}
        />
        <span className='flex mx-auto text-titleCard font-light'>{age} years</span>

        <Image
          src={Temp}
          alt="temp-icon"
          priority
          data-testid="proxie-logo"
          className='max-h-6 w-6 '
        // style={}
        />
        <span className='flex mx-auto text-titleCard font-light'>{temp} F</span>
      </span>
    </div>
  );
}
