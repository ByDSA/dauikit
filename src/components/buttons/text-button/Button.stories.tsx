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

const Template = (args: Args) => (
  <>
    <Button value={args.value}/>
  </>);

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;