import type { Meta, StoryObj } from '@storybook/react';

import Footer from '../../../components/ui/footer';

const meta: Meta<typeof Footer> = {
  title: 'UI/Footer',
  component: Footer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   position: {},
  //   left: {},
  // },
}satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Footer styleProps={{...args, position:'absolute', left:0, top:0, width:'100%', color:'white'}} />,
};

export const Playground: Story = {
  render: (args) => <Footer styleProps={{...args, position:'absolute', left:0, top:0, width:'100%', color:'white'}} />,
};
export const Mobile: Story = {
  parameters: {
    viewport: {
      // defaultViewport: "Mobile (Proxie)" ,
      defaultViewport: "MOBILE" ,
    },
  },
  render: (args) => <Footer styleProps={{...args, position:'absolute', left:0, top:0, color:'white'}} />,
};
