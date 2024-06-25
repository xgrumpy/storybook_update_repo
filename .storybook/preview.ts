import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import "../src/app/globals.css";
export const FIGMA_VIEWPORTS = {
  MOBILE : {
    name: "Mobile (Proxie)",
    styles: {
      width: '375px',
      height: '860px'
    }
  }
}
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: { default: 'light' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { ...FIGMA_VIEWPORTS, ...INITIAL_VIEWPORTS}
    }
  },
};

export default preview;
