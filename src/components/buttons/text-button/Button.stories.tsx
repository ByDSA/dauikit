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
  const className = "this-component";
  const globalStyles = `
    .${className}:not([disabled]) {border-color: ${args.borderColor};}

    .${className} {transition-duration: ${args.transitionDuration};}

    .${className} {border-width: ${args.borderWidth};}

    .${className}:not([disabled]) {background-color: ${args.backgroundColor};}

    .${className}:not([disabled]):hover {background-color: ${args.backgroundColorHover};}

    .${className}:not([disabled]) {color: ${args.textColor};}

    .${className}:not([disabled]):hover {color: ${args.textColorHover};}

    .${className} {border-radius: ${args.borderRadius};}
`;

  return (
    <>
      <style>
        {globalStyles}
      </style>
      <Button className={className} value="Click me" disabled={args.disabled}/>
    </>);
};

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;