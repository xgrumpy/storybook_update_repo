'use client'
import GenericForm from '@/components/genericForm';
import Link from 'next/link'
import { signUpPatient } from '../../services/api'
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form'; // Import SubmitHandler if not already imported
import { useContext } from 'react';
import { store } from '@/globalState/StateProvider';

export type SignUpInputs = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function Register() {
  // const router = useRouter();
  const { state, dispatch } = useContext(store);

  const onSubmit = async (data: SignUpInputs) => {
    //  dispatch logic to come here 
    return await handleSignUp(data)
  };

  const handleSignUp = async (data: SignUpInputs) => {
    try {
      let response = await signUpPatient({ fullName: data.name, email: data.email, password: data.password });
      // Redirect or perform other actions upon successful authentication
      await dispatch({ type: 'SET_RESPONSE', payload: response })
      response.data && localStorage.setItem('authToken', response.data.id)
      // router.push('/Dashboard')
    } catch (error) {
      window.alert(`Error fetching user data: ${error}`);
      // TO-DO add error to global state for use in toast/notification
      // console.error('Authentication error:', error);
    }
  };
  const additionalContent = (
    <>
      <Link className='ml-auto mt-4 mb-4 text-sm' href='/'>Forgot Password</Link>
      <input className="mt-32 appearance-none mx-auto rounded-3xl h-10 w-4/5 bg-primaryBlue text-white font-light margin-auto" type="submit" value="Sign Up" />
      <span className='flex mx-auto text-sm text-light mt-4'>{`Already have an account?`}<Link className='ml-1 text-indigo-500 underline' href="/Login"> Log in </Link></span>
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
        onSubmit={onSubmit as unknown as SubmitHandler<Record<string, any>>} // Casting onSubmit to match expected type
        additionalContent={additionalContent}
      />
    </main>
  )
}
