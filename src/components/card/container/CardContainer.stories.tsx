import type { Meta } from "@storybook/react";
// eslint-disable-next-line import/no-extraneous-dependencies

import Card from "../Card";
import CardContainer from "./CardContainer";
import { Args, argTypes, defaultValues } from "./CardContainer.stories.args";

const meta: Meta<Args> = {
  title: "Cards/CardContainer",
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
    .dauikit-card-container {

    }
  }
`;

  return (
    <>
      <style>
        {globalStyles}
      </style>
      <CardContainer>
        <Card header={"Card1"}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada quam quis mi varius, vitae finibus leo dapibus. Ut placerat mauris viverra volutpat malesuada. Praesent eu ullamcorper mi. Phasellus condimentum orci nec nisl tempor ullamcorper. Ut at venenatis justo, a aliquet sem. Mauris viverra ipsum sit amet mauris accumsan tempus at vel nulla. Phasellus in magna a ante pharetra tristique in ac magna.</p>
          <p>Vivamus tortor odio, vulputate nec augue eu, tincidunt finibus mi. Curabitur et lobortis augue. Nunc quis ipsum nulla. Maecenas placerat dui quam, non hendrerit enim sagittis at. Mauris dignissim varius nibh, in dapibus dui maximus laoreet. Nunc tempus lobortis leo, sit amet egestas erat blandit quis. Etiam mattis sodales leo vitae tincidunt. In placerat ex nec quam vehicula, id tincidunt urna scelerisque. In in sollicitudin purus.</p>
        </Card>
        <Card header={"Card2"}>
          <p>Content of card 2</p>
        </Card>
        <Card header={"Card3"}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada quam quis mi varius, vitae finibus leo dapibus. Ut placerat mauris viverra volutpat malesuada. Praesent eu ullamcorper mi. Phasellus condimentum orci nec nisl tempor ullamcorper. Ut at venenatis justo, a aliquet sem. Mauris viverra ipsum sit amet mauris accumsan tempus at vel nulla. Phasellus in magna a ante pharetra tristique in ac magna.</p>
        </Card>
      </CardContainer>
    </>);
};

export const Default = Template.bind( {
} );
(Default as any).args = defaultValues;