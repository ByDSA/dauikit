import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(.*)color(.*)/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: "requiredFirst"
    },
  },
};

export default preview;
