import React from 'react';
import Image from 'next/image';
import canes from '@/images/canes.png';
import walker from '@/images/walkers.png';
import wheelchair from '@/images/Wheelchairs.png';


const SuppliesStatus: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded">
      <h2 className="text-headingCard font-semibold mb-4">Supplies Status</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className='flex items-center border-2 border-outlineGrey rounded-lg bg-white shadow-test'>
          <div className='w-40 h-32 flex justify-center items-center'>
            <Image
              src={canes}
              alt="Canes"
              priority
              className='max-h-20 w-20'
            />
          </div>
          <div className='pl-4 pr-1'>
            <p className='text-titleCard font-semibold'>Canes</p>
            <p className='text-splitCard'>Provide stability and support for enhanced balance while walking.</p>
          </div>
        </div>
        <div className="p-0.5 bg-gray-100 rounded">
          <div className='flex items-center border-2 border-outlineGrey rounded-lg bg-white shadow-test'>
            <div className='w-40 h-32 flex justify-center items-center'>
              <Image
                src={walker}
                alt="Walkers"
                priority
                className='w-20 h-24 p-1'
              />
            </div>
            <div className='pl-4 pr-1'>
              <p className='text-titleCard font-semibold'>Walkers</p>
              <p className='text-splitCard'>Provide stability and support for enhanced balance while walking.</p>
            </div>
          </div>
        </div>
        <div className="p-0.5 bg-gray-100 rounded">
          <div className='flex items-center border-2 border-outlineGrey rounded-lg bg-white shadow-test'>
            <div className='w-40 h-32 flex justify-center items-center'>
              <Image
                src={wheelchair}
                alt="Wheelchairs"
                priority
                className='w-24 h-24 p-1 object-cover'
              />
            </div>
            <div className='pl-4 pr-1'>
              <p className='text-titleCard font-semibold'>Wheelchairs</p>
              <p className='text-splitCard'>Provide stability and support for enhanced balance while walking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuppliesStatus;