import GenericForm from "@/components/genericForm";
import Link from 'next/link'
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/GenericForm',
  component: GenericForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof GenericForm>;


export default meta;

type Story = StoryObj<typeof meta>;

const additionalContent = (
  <>
    <Link className='ml-auto mt-4 mb-4 text-sm' href='/'>Forgot Password</Link>
    <input className="mt-32 appearance-none mx-auto rounded-3xl h-10 w-4/5 bg-primary text-white font-light margin-auto" type="submit" value="Login" />
    <span className='flex mx-auto text-sm text-light mt-4'>{`Don't have an account?`}<Link className='ml-1 text-indigo-500 underline' href="/"> Sign up</Link></span>
  </>
);

const onSubmit = (data: Record<string, string>) => {
  return window.alert('Form submit clicked' + JSON.stringify(data));
};

export const Signup: Story = {
  args: {
    fields: {
      email: { type: 'email', label: 'Email', required: true, autoComplete: 'email' },
      password: { type: 'pawssword', label: 'Password', required: true, autoComplete: 'password' },
    },
    onSubmit: onSubmit,
    formHeading: 'Signup',
    additionalContent: additionalContent,
  },
};

export const PaymentInfo: Story = {
  args: {
    fields: {
      name: { type: 'text', label: 'Full name', required: true, autoComplete: 'name' },
      email: { type: 'email', label: 'Email', required: true, autoComplete: 'email' },
      password: { type: 'password', label: 'Password', required: true, autoComplete: 'current-password' },
      confirmPassword: { type: 'password', label: 'Confirm password', required: true, autoComplete: 'confirm-password' },
    },
    onSubmit: ()=> {},
    formHeading: 'Signup',
    additionalContent: additionalContent,
  },
};
