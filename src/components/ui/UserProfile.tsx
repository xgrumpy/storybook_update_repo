import React from 'react';
import SplitHalfCard from "@/components/ui/splitHalfCard";
import SplitHalfCardDescription from "@/components/ui/splitHalfCardDescription";
import FullCard from "@/components/ui/carePlanCard";
import AVI from '@/images/profile-sample.png';
import Image from 'next/image';

const UserProfile: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div >
        <div className="flex">
          <Image
            src={AVI}
            alt="location-icon"
            priority
            data-testid="proxie-logo"
            className='max-h-10 w-10'
          // style={}
          />
          <div className="ml-4">
            <p className="text-lg font-semibold">Good evening, Beth 👋</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="items-center w-1/2 p-4">
            <SplitHalfCard
              name="Yvonne Adams"
              relationship="Mom"
              location="Orlando, FL"
              age="72"
              temp="98"
            />
            <SplitHalfCardDescription
              name="Amazon Echo"
              description="Get instant information, control smart devices, and enjoy entertainment with voice control."
            />
          </div>
          <div className="items-center  w-1/2 p-4">
            <FullCard
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;