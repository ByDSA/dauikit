import type { Meta } from "@storybook/react";

import Accordion from "./Accordion";
import { Args, argTypes, defaultValues } from "./Accordion.stories.args";
import AccordionItem from "./AccordionItem";

const meta: Meta<Args> = {
  title: "Accordion/AccordionDigi",
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

    .dauikit-accordion-digi .accordion-item header .title {
      color: ${args.headerTitleColor};
    }

    .dauikit-accordion-digi .accordion-item.open:not(.closing) header .title {color: ${args.headerTitleColorOpen};}

    .dauikit-accordion-digi .accordion-item:not(.disabled) header:hover .title {color: ${args.headerTitleColorHover};}

    .dauikit-accordion-digi .accordion-item header{background-color: ${args.headerBackgroundColor};}

    .dauikit-accordion-digi .accordion-item.open:not(.closing) header {background-color: ${args.headerBackgroundColorOpen};}

    .dauikit-accordion-digi .accordion-item:not(.disabled) header:hover {background-color: ${args.headerBackgroundColorHover};}

    .dauikit-accordion-digi .accordion-item.open:not(.closing) header:hover .title {color: ${args.headerTitleColorOpenHover};}

    .dauikit-accordion-digi .accordion-item.disabled header .title {color: ${args.headerTitleColorDisabled};}
  }
`;

  return (
    <>
      <style>
        {globalStyles}
      </style>
      <Accordion>
        <AccordionItem title="Item 1" disabled={args.disabled}>
          <p>Párrafo 1</p>
          <p>Párrafo 2</p>
        </AccordionItem>
        <AccordionItem title="Item 2" disabled={args.disabled}>
          <p>Párrafo 1</p>
          <p>Párrafo 2</p>
        </AccordionItem>
      </Accordion>
    </>);
};

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;