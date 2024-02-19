import type { Meta } from "@storybook/react";

import Accordion from "./Accordion";
import { Args, argTypes, defaultValues } from "./Accordion.stories.args";
import AccordionItem from "./AccordionItem";

const meta: Meta<Args> = {
  title: "Accordions/AccordionDigi",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes,
} satisfies Meta<Args>;

export default meta;

const Template = (args: Args) => {
  const globalStyles = `
  #storybook-root {
    .dauikit-accordion-digi .accordion-item {
      --border-color: ${args.borderColor};
      --border-width: ${args.borderWidth};
      --transition-time: ${args.transitionTime};
    }

    .dauikit-accordion-digi .accordion-item header:not(.disabled) .title {
      color: ${args.headerTitleColor};
    }

    .dauikit-accordion-digi .accordion-item.open:not(.closing):not(.disabled) header .title {color: ${args.headerTitleColorOpen};}

    .dauikit-accordion-digi .accordion-item:not(.disabled) header:hover .title {color: ${args.headerTitleColorHover};}

    .dauikit-accordion-digi .accordion-item header:not(.disabled){background-color: ${args.headerBackgroundColor};}

    .dauikit-accordion-digi .accordion-item.open:not(.closing):not(.disabled) header {background-color: ${args.headerBackgroundColorOpen};}

    .dauikit-accordion-digi .accordion-item:not(.disabled) header:hover {background-color: ${args.headerBackgroundColorHover};}

    .dauikit-accordion-digi .accordion-item.open:not(.closing):not(.disabled) header:hover .title {color: ${args.headerTitleColorOpenHover};}

    .dauikit-accordion-digi .accordion-item.disabled header .title {color: ${args.headerTitleColorDisabled};}
  }
`;

  return (
    <>
      <style>
        {globalStyles}
      </style>
      <Accordion>
        <AccordionItem title="Item 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales ex sit amet est iaculis, sed egestas sem feugiat. Aenean et luctus nunc. Aliquam erat volutpat. Vestibulum et magna sit amet neque cursus vulputate. Nunc ornare feugiat tellus id mattis. Praesent ut dui in sem vestibulum finibus. Vivamus elementum nulla." disabled={args.disabled}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales ex sit amet est iaculis, sed egestas sem feugiat. Aenean et luctus nunc. Aliquam erat volutpat. Vestibulum et magna sit amet neque cursus vulputate. Nunc ornare feugiat tellus id mattis. Praesent ut dui in sem vestibulum finibus. Vivamus elementum nulla.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales ex sit amet est iaculis, sed egestas sem feugiat. Aenean et luctus nunc. Aliquam erat volutpat. Vestibulum et magna sit amet neque cursus vulputate. Nunc ornare feugiat tellus id mattis. Praesent ut dui in sem vestibulum finibus. Vivamus elementum nulla.</p>
        </AccordionItem>
        <AccordionItem title="Item 2 Short title" disabled={args.disabled}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales ex sit amet est iaculis, sed egestas sem feugiat. Aenean et luctus nunc. Aliquam erat volutpat. Vestibulum et magna sit amet neque cursus vulputate. Nunc ornare feugiat tellus id mattis. Praesent ut dui in sem vestibulum finibus. Vivamus elementum nulla.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales ex sit amet est iaculis, sed egestas sem feugiat. Aenean et luctus nunc. Aliquam erat volutpat. Vestibulum et magna sit amet neque cursus vulputate. Nunc ornare feugiat tellus id mattis. Praesent ut dui in sem vestibulum finibus. Vivamus elementum nulla.</p>
        </AccordionItem>
      </Accordion>
    </>);
};

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;