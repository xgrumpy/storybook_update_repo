import type { Meta, StoryObj } from '@storybook/react';
import Title from "@/components/ui/title";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Title',
  component: (props) => <Title {...props} />,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    tag: { control: 'string', description: 'Valid HTML Tag to wrap around text', options: ['h1', 'h2', 'h3']},
    children: { control: 'string', description: 'Content wrapped in title'}
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'You\'re in!',
    tag: 'h1',
    weight: 'bold',
  },
};
