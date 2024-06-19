'use client';

import GenericForm from '@/components/genericForm';
// import Title from '@/components/ui/title';
import Link from 'next/link'

export type SignUpInputs = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function Register() {

  const onSubmit = (data: SignUpInputs) => {
    // return console.log('Form submitted with data:', data);
    return window.alert('Form submit clicked' + JSON.stringify(data));

    //  dispatch logic to come here
  };
  const additionalContent = (
    <>
      <Link className='ml-auto mt-4 mb-4 text-sm' href='/'>Forgot Password</Link>
      <input className="mt-32 appearance-none mx-auto rounded-3xl h-10 w-4/5 bg-primaryBlue text-white font-light margin-auto" type="submit" value="Login" />
      <span className='flex mx-auto text-sm text-light mt-4'>{`Don't have an account?`}<Link className='ml-1 text-indigo-500 underline' href="/"> Sign up</Link></span>
    </>
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <GenericForm
        formHeading='Sign Up'
        fields={{
          name: { type: 'text', label: 'Full name', required: true, autoComplete: 'name' },
          email: { type: 'email', label: 'Email', required: true, autoComplete: 'email' },
          password: { type: 'password', label: 'Password', required: true, autoComplete: 'current-password' },
          confirmPassword: { type: 'password', label: 'Confirm password', required: true, autoComplete: 'confirm-password' },
        }}
        onSubmit={onSubmit}
        additionalContent={additionalContent}
      />
    </main>
  )
}
