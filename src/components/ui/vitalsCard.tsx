import Image from 'next/image';
import Heart from '@/images/heart.png';
import HeartBP from '@/images/bp.png';
import Oxygeb from '@/images/oxygen.png';
import InfoCircle from '@/images/info-circle.png';
import { IconType } from '@/types/CardTypes';

interface SplitCardProps {
  title: string;
  icon?: IconType | string;
  date?: string;
  time?: string;
  dataValue?: string;
  dataValueStyle?: string;

}
interface StoryBookProps {
  mobile: boolean;
}

export default function VitalsCard({ title, icon, date, time, dataValue, dataValueStyle }: SplitCardProps, mobile: StoryBookProps) {

  const iconMap = {
    heart: Heart,
    bp: HeartBP,
    oxygen: Oxygeb,
    infoCircle: InfoCircle,
    // Add more mappings as needed
  };

  // Default image if the icon is not found in the map
  const defaultIcon = InfoCircle;

  // Use the icon prop to get the corresponding image source
  const iconSrc = icon && iconMap[icon] || defaultIcon;

  return (
    <div className='flex items-center w-80 h-20 outline outline-outlineGrey rounded-lg bg-white shadow-test'>
      {/* Left Section */}
      <div className="flex-1 flex flex-col">
        {/* Your left content goes here */}
        <span className='flex mx-auto text-titleCard'>{title}</span>
        <Image
          src={iconSrc}
          alt="Proxie Logo"
          width={24}
          height={24}
          priority
          data-testid="heart"
          // className='max-h-8 w-8 mx-auto'
          className='flex mx-auto pt-2.5'
        />
      </div>

      {/* Vertical Line */}
      {/* <div className="w-px bg-gray-400 h-20"></div> */}
      <div className=" h-16 outline outline-outlineGrey"></div>


      {/* Right Section */}
      <div className="flex-1 flex flex-row mx-auto w-full">
        <div className="flex flex-col m-auto">
          <span className='flex text-splitCard font-light tracking-wide'>{date ?? 'date'}</span>
          <span className='flex text-splitCard font-light'>{time ?? 'time'}</span>
        </div>
        <div className="flex flex-col m-auto">
          <span key={`${dataValueStyle}-${title}-${date}`} className={`flex mx-auto text-titleCard text-${dataValueStyle ?? 'primary'} font-bold pr-4`}>{dataValue ?? '—'}</span>
        </div>
      </div>
    </div>
  );
}
