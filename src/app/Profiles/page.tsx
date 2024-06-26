'use client'
import React, { useContext } from 'react';
import LoginForm from '../login/page';
import AVI from '@/images/profile-sample.png';
import AVI2 from '@/images/card-avi.png';
import Image from 'next/image';
import Link from 'next/link';
import Profile from '@/images/profile.svg';
import Temp from '@/images/temp.svg';
import Location from '@/images/location.svg';
import { store } from '@/globalState/StateProvider';
import  { StaticImageData } from 'next/image';

const SampleObject = {
  id: 1,
  relationship: "Owner",
  displayName: "Beth Johnson",
  avi: AVI,

}
const SampleObject2 = {
  id: 2,
  relationship: "Mom",
  displayName: "Yvonne Adams",
  avi: AVI2,
  city: "Orlando",
  state: "FL",
  age: 72,
  ambient_temp: 89,
}

type ProfileDataType = {
    id: number;
    relationship: string;
    displayName: string;
    avi: StaticImageData;
}

type ProfileDataArrayType = {
  profileData: ProfileDataType[];
}

const renderProfileCards = (profiles: any) => {
  return (
    profiles.map((profile: any, index: any) => {
      return (
        <Link className=" flex-col  sm:w-full sm:mt-4 sm:h-auto  md:w-1/3 md:h-48 border-2 border-outlineGrey rounded-lg bg-white shadow-test mr-7 " href={`/Profile`} passHref key={index}>
        {/* <Link className="flex-col  w-1/3 h-44 border-2 border-outlineGrey rounded-lg bg-white shadow-test mr-7" href={`/Profile/${profile.id}`} passHref key={index}> */}
{/* //Want to make this clickable and to push to a route `/Profile/${profile.id}` */}
            {/* <div  key={index}> */}
              {/* <!-- General Section Title --> */}
              <div className='flex flex-row w-full '>
                {/* User Image */}
                <div className="p-4 flex-none mx-auto">
                  <Image
                    src={profile.avi}
                    alt="location-icon"
                    priority
                    data-testid="proxie-logo"
                    width={40}
                  />
                </div>
                <div className='flex mt-4 w-full'>
                  <span className="flex mr-auto text-headingCard font-semibold ">{`${profile.displayName}`}</span>
                  <span className="flex ml-auto text-subTitleCard font-semibold text-proxieSecondary pr-6">{profile.relationship}</span>
                </div>
              </div>
              <div className='flex-row ml-16 h-1/2'>
                <div className='flex-col h-1/2'>
                  {
                    profile.city && profile.state &&
                    <span className='flex flex-row py-1 '>

                      <Image
                        src={Location}
                        alt="location-icon"
                        priority
                        data-testid="proxie-logo"
                        className='max-h-6 w-6 '
                      // style={}
                      />
                      <span className='flex  text-subTitleCard font-light'>{`${profile.city}, ${profile.state}`}</span>
                    </span>}
                  {
                    profile.age &&
                    <span className='flex flex-row py-1 '>

                      <Image
                        src={Profile}
                        alt="profile-icon"
                        priority
                        data-testid="proxie-logo"
                        className='max-h-6 w-6 '
                      // style={}
                      />
                      <span className='flex  text-subTitleCard font-light'>{profile.age} years</span>
                    </span>
                  }
                  {
                    profile.ambient_temp &&
                    <span className='flex flex-row py-1 '>

                      <Image
                        src={Temp}
                        alt="temp-icon"
                        priority
                        data-testid="proxie-logo"
                        className='max-h-6 w-6 '
                      // style={}
                      />
                      <span className='flex  text-subTitleCard font-light'>{profile.ambient_temp} F</span>
                    </span>
                  }
                  <span className='flex flex-row '>

                  </span>

                </div>
              </div>
            {/* </div> */}
        </Link>
      )
    })
  )
}
const SettingsComponent = ({profileData}: ProfileDataArrayType) => {
  return (
    //Header
    <div className=' w-11/12 mx-auto sm:0 md:mt-24'>
      <div className=' md:ml-7'>

        <div className='flex mt-24 text-titleCard font-medium mb-8 mt-4 '>Profiles</div>
        <div className='flex sm:flex-col md:flex-row '>
          {renderProfileCards(profileData)}
        </div>
      </div>


      <div className='flex mt-6 sm:w-full md:w-4/5 mx-auto'>

        <input className="mx-auto mt-6 appearance-none relative rounded-3xl h-10 sm:w-full md:w-2/5 bg-primaryBlue text-white font-light" type="submit" value="Add Profile" />
      </div>
    </div>
  )
}

const Settings = () => {

  const { state } = useContext(store);

  const displayName = state.apiResponse?.data?.profile?.display ?? "";

  const profileObject = {
    id: 1,
    relationship: "Owner",
    displayName: displayName,
    avi: AVI,
  }
  const token = localStorage.getItem('authToken');

  return (
    <div className="w-screen h-screen flex">
      {token ? <SettingsComponent profileData={[profileObject]} /> : <LoginForm />}
    </div>
  )
};




export default Settings;
