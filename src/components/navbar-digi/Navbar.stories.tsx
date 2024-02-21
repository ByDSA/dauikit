import type { Meta } from "@storybook/react";
// eslint-disable-next-line import/no-extraneous-dependencies

import Navigator from "./Navbar";
import { Args, argTypes, defaultValues } from "./Navbar.stories.args";

const meta: Meta<Args> = {
  title: "Navbars/NavbarDigi",
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
    .dauikit-navbardigi {

    }
  }
`;
  const tree = [
    {
      title: "Inicio",
      path: "/",
    },
    {
      title: "Deplegable",
      children:
        [1,2,3,4,5,6].map((i: number) => ( {
          title: `Opción ${i}`,
          path: `page${i}`,
        } ),
        ),
    },
    {
      title: "Otro item",
      path: "anotheritem",
    },
    {
      title: "Otro item2",
      path: "anotheritem2",
    },
    {
      title: "Otro item3",
      path: "anotheritem3",
    },
  ];
  const pageContent = [];

  for (let i = 0; i < 100; i++)
    pageContent.push(<p key={i}>Line {i}</p>);

  return (
    <>
      <style>
        {globalStyles}
      </style>
      <div style={{
        height: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Navigator links={{
          currentUrl:"",
          tree,
        }} logo={{
          src: "/src/stories/assets/sample-img/logo.svg",
          alt: "Logo",
        }} key={1}>

        </Navigator>
        <p>SCROLL DOWN</p>
      </div>
    </>);
};

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;