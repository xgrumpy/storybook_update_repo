import type { Meta, StoryObj } from '@storybook/react';
import DocsLayout from '@/components/layouts/docs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Layout/Docs',
  component: (props) => <DocsLayout {...props} />,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof DocsLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: <><h1>Markdown</h1><h2>Heading 2</h2><p>paragraph</p></>,
    metadata: {
      title: 'Developer Documentation',
    },
  },
};
