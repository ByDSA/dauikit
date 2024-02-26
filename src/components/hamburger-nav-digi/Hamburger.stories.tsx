import type { Meta } from "@storybook/react";
// eslint-disable-next-line import/no-extraneous-dependencies

import Hamburger, { type Props as HamburgerProps } from "./Hamburger";
import { Args, argTypes, defaultValues } from "./Hamburger.stories.args";

const meta: Meta<Args> = {
  title: "HamburgerNavs/HamburgerNavDigi",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes,
} satisfies Meta<Args>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template = (args: Args) => {
  const globalStyles = `
  #storybook-root {
    .root {
      .shape {
        --color: blue;
        --color-hover: red;
        --color-open: green;
        --color-open-hover: blue;
        --background-color: lightblue;
        --background-color-hover: yellow;
      }

      .sideNav {
        --transition-position-duration: 1s;
        --background-color: lightblue;

        nav {
          --margin-top: 5rem;
        }
      }
    }
  }
`;
  const theme: HamburgerProps["theme"] = {
    className: "root",
    sideNav: {
      className: "sideNav",
    },
    shape: {
      className: "shape",
    },
  };

  return (
    <>
      <style>
        {globalStyles}
      </style>
      <Hamburger theme={theme} >
        <p>test</p>
      </Hamburger>
    </>);
};

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;