import type { Meta, StoryObj } from '@storybook/react';
import FullCard from "@/components/ui/carePlanCard";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Card(Full)',
  component: FullCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof FullCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    mobile: false
  },
};
export const Playground: Story = {
  args: {
    mobile: false
  },
};
export const LoggedIn: Story = {
  args: {
    mobile: false
  },
};
export const Mobile: Story = {
  args: {
    mobile: true,
  },
  parameters: {
    viewport: {
      // defaultViewport: "Mobile (Proxie)" ,
      defaultViewport: "MOBILE" ,
    },
  },
};
