import type { Meta, StoryObj } from '@storybook/react';
import Header from "@/components/ui/header";
// import { User } from '@/types/UserTypes';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Header',
  component: Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    user: {},
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
const DEFAULT_EMPTY_FUNCTIONS = {
  onLogin: ()=> {},
  onLogout: ()=> {},
  onCreateAccount: ()=> {},
}
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    ...DEFAULT_EMPTY_FUNCTIONS,
    mobile: false,
  },
};

export const Mobile: Story = {
  args: {
    ...DEFAULT_EMPTY_FUNCTIONS,
    mobile: true,
  },
};
