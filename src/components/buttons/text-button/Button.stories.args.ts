import type { ArgTypes } from "@storybook/react";

export type Args = {
  value: string;
};

enum Category {
BehaviorProperties = "Behavior Properties",
}

export const argTypes: ArgTypes<Args> = {
  value: {
    name: "Text",
    table: {
      type: {
        summary: "attr[value]",
      },
      category: Category.BehaviorProperties,
      defaultValues: {
        summary: "-",
      },
    },
    description: "El texto que se muestra en el botón",
  },
};

export const defaultValues: Record<keyof Args, boolean | string> = {
  value: "Click me",
};