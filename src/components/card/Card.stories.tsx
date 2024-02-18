import type { Meta } from "@storybook/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import parse from "html-react-parser";

import Card from "./Card";
import { Args, argTypes, defaultValues } from "./Card.stories.args";

const meta: Meta<Args> = {
  title: "Cards/Card",
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
    .dauikit-card {background-color: ${args.backgroundColor};}

    .dauikit-card {color: ${args.textColor};}

    .dauikit-card {border-radius: ${args.borderRadius};}

    .dauikit-card {padding: ${args.padding};}

    .dauikit-card {margin: ${args.margin};}
  }
`;

  return (
    <>
      <style>
        {globalStyles}
      </style>
      <Card header={args.header ? parse(args.header) : undefined}>
        {parse(args.children)}
      </Card>
    </>);
};

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;