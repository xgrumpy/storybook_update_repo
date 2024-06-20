import type { Meta, StoryObj } from '@storybook/react';
import GenericForm1 from "@/components/genericForm1";
import Link from 'next/link'

const meta = {
  title: 'Page/GenericForm',
  component: GenericForm1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof GenericForm1>;

export default meta;

type Story = StoryObj<typeof meta>;

const onSubmit = () => {
  return window.alert('Form submit clicked');
};

const additionalContent = (
  <>
    <Link className='ml-auto mt-4 mb-4 text-sm' href='/'>Forgot Password</Link>
    <input className="mt-32 appearance-none mx-auto rounded-3xl h-10 w-4/5 bg-primaryBlue text-white font-light margin-auto" type="submit" value="Login" />
    <span className='flex mx-auto text-sm text-light mt-4'>{`Don't have an account?`}<Link className='ml-1 text-indigo-500 underline' href="/"> Sign up</Link></span>
  </>
);
const temp = {
  email: { type: 'email', label: 'Email', required: true, autoComplete: 'email' },
  password: { type: 'password', label: 'Password', required: true, autoComplete: 'current-password' },
  password1: { type: 'password', label: 'Password', required: true, autoComplete: 'current-password' },
  password2: { type: 'password', label: 'Password', required: true, autoComplete: 'current-password' },
  password3: { type: 'password', label: 'Password', required: true, autoComplete: 'current-password' }
};

export const Default: Story = {
  args: {
    
    onSubmit: ()=> {},
    formHeading: 'Login',
    additionalContent: additionalContent,
  }
};
