'use client'
import React, { useContext } from 'react';
import LoginForm from '../login/page';
import VitalsCard from "@/components/ui/vitalsCard";
import FullCard from "@/components/ui/carePlanCard";
import Image from 'next/image';
import AVI from '@/images/profile-sample.png';
import { DIABETES_CARD, CARDIAC_HEALTH_CARD, ALZHEIMERS_CARD, FIT_BIT_CARD, ECHO_CARD, KARDIA_CARD, HEART_RATE_CARD, OXYGEN_CARD, BP_CARD, MENTAL_HEALTH_CARD } from './constants'
import { CarousselCard, DynamicCardContainer } from '@/components/ui/cards';
import { CarousselCardType, VitalsCardType } from '@/types/CardTypes';
import SplitHalfCard from '@/components/ui/splitHalfCard';
import { store } from '@/globalState/StateProvider';

const TECH_ARRAY: CarousselCardType[] = [FIT_BIT_CARD, ECHO_CARD, KARDIA_CARD];
const CONDITIONS_ARRAY: CarousselCardType[] = [DIABETES_CARD, ALZHEIMERS_CARD, CARDIAC_HEALTH_CARD, MENTAL_HEALTH_CARD];
const VITAL_CARD_DATA: VitalsCardType[] = [HEART_RATE_CARD, OXYGEN_CARD, BP_CARD];

export const AuthenticatedDash: React.FC = () => {
  const { state } = useContext(store);

  // REPLACE
  const firstName = state.apiResponse?.data?.profile?.display ?? "";
  return (
    <main className="flex flex-col min-h-screen ml-auto mr-auto mt-10  items-center sm:w-4/5 lg:w-2/3">
      <div className="flex flex-row mr-auto mt-16 pl-14">
        <Image
          src={AVI}
          alt="location-icon"
          priority
          data-testid="proxie-logo"
          className='max-h-10 w-10 mr-4'
        // style={}
        />
        <div className="text-xl">{`Good evening, ${firstName} 👋`}</div>
      </div>
      <div className="flex flex-row mr-auto pl-16">
        <div className="mt-4 text-2xl">{`Weekly Update`}</div>
      </div>
      {/* START WEEKLY UPDATE */}
      <div className="flex sm:flex-col sm:flex-col-reverse lg:flex-row pl-14 mr-auto ">
        {/* COLUMN ONE */}
        <div className="flex-col">
          <div className="p-2">
            <SplitHalfCard
              name={"Yvonne Adams"}
              relationship={"Mom"}
              location={"Orlando, FL"}
              age={"72"}
              temp={"98"} />
          </div>
          <div className="p-2">
            <SplitHalfCard name={"Yvonne Adams"}
              relationship={"Mom"}
              location={"Orlando, FL"}
              age={"72"}
              temp={"98"} />
          </div>
        </div>
        {/* COLUMN TWO */}
        <div className="flex-col">
          {VITAL_CARD_DATA.map((card, index) => (
            <div key={index} className="p-2">
              <VitalsCard
                title={card.title}
                icon={card.icon}
                date={card.date}
                time={card.time}
                dataValue={card.dataValue}
                dataValueStyle={card.dataValueStyle}
              />
            </div>
          ))}
        </div>
        {/* COLUMN THREE */}
        <div className="flex-col">
          <div className="p-2">
            <FullCard mobile={false} />
          </div>
        </div>
      </div>

      {/* START TECH SOLUTIONS */}
      <div className="flex flex-row mr-auto pl-14">
        <div className="mt-4 text-2xl">{`Tech Solutions We Recommend`}</div>
      </div>
      <div className="flex flex-row mr-auto pl-14">
        {TECH_ARRAY.map((card) => {

          return <CarousselCard key={card.title} title={card.title} description={card.description} image={card.image} />
        })}
      </div>
      {/* START CARE CONDITION & TIPS */}
      <div className="flex flex-row mr-auto pl-14">
        <div className="mt-4 text-2xl">{`Care & Condition Tips`}</div>
      </div>
      <DynamicCardContainer cards={CONDITIONS_ARRAY} />
    </main>);
};



const Dashboard = () => {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('authToken') || '' : '';

  return (
    <div className="w-screen overflow-scroll flex">
      {token ? <AuthenticatedDash /> : <LoginForm />}
    </div>
  )
};

export default Dashboard;
