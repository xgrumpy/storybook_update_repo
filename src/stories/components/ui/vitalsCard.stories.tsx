import type { Meta, StoryObj } from '@storybook/react';
import VitalsCard from "@/components/ui/vitalsCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Card(Third)',
  component: VitalsCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof VitalsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Heart rate",
    icon: 'heart',
    date: '08/20',
    time: '4:32 PM',
    dataValue: '73',
    dataValueStyle: 'alert',
  },
};
export const EmptyState: Story = {
  args: {
    title: "Heart rate",
    icon: 'heart',
  },
};
export const Oxygen: Story = {

    args: {
      title: "Oxygen",
      icon: 'oxygen',
      date: '08/20',
      time: '4:32 PM',
      dataValue: '73'
    },

};
export const BP: Story = {
  args: {
    title: "Blood Pressure",
    icon: 'bp',
    date: '08/20',
    time: '4:32 PM',
    dataValue: '73',
    dataValueStyle: 'success',

  },
};
export const Playground: Story = {
  args: {
    title: "Oxygen",
    icon: 'oxygen',
    date: '08/20',
    time: '4:32 PM',
    dataValue: '73',
    dataValueStyle: 'alert',

  },
};
// export const MobileLoggedIn: Story = {
//   args: {
//     user: { name: 'Test'},
//     mobile: true,
//     // styleProps: { position:'absolute', left:0, top:0, backgroundColor:'green'}
  
    
//   },
//   parameters: {
//     viewport: {
//       // defaultViewport: "Mobile (Proxie)" ,
//       defaultViewport: "MOBILE" ,
//     },
//   },
// };
