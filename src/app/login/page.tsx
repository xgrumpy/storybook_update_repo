'use client'

import React from 'react';
import GenericForm from '@/components/genericForm';
import Link from 'next/link'
import { login } from '../../services/api';
import { useRouter } from 'next/navigation';

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
    <span className='flex mx-auto text-sm text-light mt-4'>{`Don't have an account?`}<Link className='ml-1 text-indigo-500 underline' href="/"> Sign up</Link></span>
  </>
);

const LoginForm: React.FC<{}> = () => {

  const router = useRouter();

  const onSubmit = (data: Inputs) => {
    //  dispatch logic to come here
    try {
      login({ email: data.email, password: data.password } as Inputs).then(() => {
        router.push('/Dashboard')
      })
      // Redirect or perform other actions upon successful authentication
    } catch (error) {
      window.alert(`Error fetching user data: ${error}`);

      // TO-DO add error to global state for use in toast/notification
      // console.error('Authentication error:', error);
    }
  };

  return (

    <GenericForm
      formHeading='Login'
      fields={{
        email: { type: 'email', label: 'Email', required: true, autoComplete: 'email' },
        password: { type: 'password', label: 'Password', required: true, autoComplete: 'current-password' },
      }}
      onSubmit={onSubmit}
      additionalContent={additionalContent}
    />
  );
};

export default LoginForm;