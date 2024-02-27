import type { Meta } from "@storybook/react";

import Button from "./Button";
import { Args, argTypes, defaultValues } from "./Button.stories.args";

const meta: Meta<Args> = {
  title: "Buttons/TextButton",
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
    .dauikit-button:not([disabled]) {border-color: ${args.borderColor};}

    .dauikit-button {transition-duration: ${args.transitionDuration};}

    .dauikit-button {border-width: ${args.borderWidth};}

    .dauikit-button:not([disabled]) {background-color: ${args.backgroundColor};}

    .dauikit-button:not([disabled]):hover {background-color: ${args.backgroundColorHover};}

    .dauikit-button:not([disabled]) {color: ${args.textColor};}

    .dauikit-button:not([disabled]):hover {color: ${args.textColorHover};}

    .dauikit-button {border-radius: ${args.borderRadius};}
  }
`;

  return (
    <>
      <style>
        {globalStyles}
      </style>
      <Button value="Click me" disabled={args.disabled}/>
    </>);
};

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;