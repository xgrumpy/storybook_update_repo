import type { Meta, StoryObj } from '@storybook/react';
import SplitHalfCard from "@/components/ui/splitHalfCard";
import { User } from '@/types/UserTypes';
import Heart from '@/images/heart.png';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Card(Half)',
  component: SplitHalfCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} satisfies Meta<typeof SplitHalfCard>;

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
    name: "Yvonne Adams",
    relationship: "Mom",
    location: "Orlando, FL",
    age: "72",
    temp: "98",
  },
};
export const EmptyState: Story = {
  args: {
    name: "Brian Espinosa",
    relationship: 'Son',
    location: "Orlando, FL",
    age: "72",
    temp: "98",
  },
};
export const Playground: Story = {
  args: {
    name: "Brian Espinosa",
    relationship: "Son",
    location: "Chicago, IL",
    age: "31",
    temp: "98",

  },
};
export const Mobile: Story = {

    args: {
      name: "Brian Espinosa",
      relationship: "Son",
      location: "Chicago, IL",
      age: "31",
      temp: "98",
    },

};
export const LoggedIn: Story = {
  args: {
    name: "Brian Espinosa",
    relationship: "Son",
    location: "Chicago, IL",
    age: "31",
    temp: "98",

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
