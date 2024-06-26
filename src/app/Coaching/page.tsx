'use client'

import React from 'react';
import Link from 'next/link'
import { login } from '../../services/api';
import { useRouter } from 'next/navigation';
import UserProfile from '@/components/ui/UserProfile';
import MedicalSocial from '@/components/ui/MedicalSocial';


export type Inputs = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const additionalContent = (
  <>
    <Link className='ml-auto mt-4 mb-4 text-sm' href='/'>Forgot Password</Link>
    <input className="mt-32 appearance-none mx-auto rounded-3xl h-10 w-4/5 bg-primaryBlue text-white font-light margin-auto" type="submit" value="Login" />
    <span className='flex mx-auto text-sm text-light mt-4'>{`Don't have an account?`}<Link className='ml-1 text-indigo-500 underline' href="/register"> Sign up</Link></span>
  </>
);

const CorePlanForm: React.FC<{}> = () => {

  const router = useRouter();

  return (
    <div className="flex  justify-center bg-gray-100">
      <div className="max-w-1000 items-center bg-gray-50 pt-24 pb-5">
        <div className="space-y-8">
          <UserProfile/>
          <MedicalSocial/>
        </div>
      </div>
    </div>
  );

};

export default CorePlanForm;