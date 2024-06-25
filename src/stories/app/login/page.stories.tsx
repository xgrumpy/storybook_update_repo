import type { Meta, StoryObj } from '@storybook/react';
import GenericForm from "@/components/genericForm";
import Link from 'next/link'

const meta = {
  title: 'Page/GenericForm',
  component: GenericForm,
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
} satisfies Meta<typeof GenericForm>;

export default meta;

type Story = StoryObj<typeof meta>;

const onSubmit = (data: Record<string, string>) => {
  return window.alert('Form submit clicked' + JSON.stringify(data));
};

const AdditionalContent: React.FC = () => (
<>
  <Link className='ml-auto mt-4 mb-4 text-sm' href='/'>Forgot Password</Link>
  <input className="mt-32 appearance-none mx-auto rounded-3xl h-10 w-4/5 bg-primaryBlue text-white font-light margin-auto" type="submit" value="Login" />
  <span className='flex mx-auto text-sm text-light mt-4'>{`Don't have an account?`}<Link className='ml-1 text-indigo-500 underline' href="/register"> Sign up</Link></span>
</>
);

export const Default: Story = {
  args: {
    fields: {
      email: { type: 'email', label: 'Email', required: true, autoComplete: 'email' },
    },
    formHeading: 'Login',
    additionalContent:  <AdditionalContent />,
  },
};
