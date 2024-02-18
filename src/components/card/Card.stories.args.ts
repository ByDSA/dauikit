import type { ArgTypes } from "@storybook/react";

export type Args = {
  backgroundColor: string;
  textColor: string;
  borderRadius: string;
  padding: string;
  margin: string;
  header: string | undefined;
  children: string;
};

enum Category {
  CustomCSSVariables = "Custom CSS Variables",
  CustomCSSProperties = "Custom CSS",
  BehaviorProperties = "Behavior Properties",
}

export const argTypes: ArgTypes<Args> = {
  backgroundColor: {
    name: "Background Color",
    table: {
      type: {
        summary: ".dauikit-card {background-color}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Color de fondo",
  },
  textColor: {
    name: "Text Color",
    table: {
      type: {
        summary: ".dauikit-card {color}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Color del texto",
  },
  borderRadius: {
    name: "Border Radius",
    table: {
      type: {
        summary: ".dauikit-card {border-radius}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Radio de las esquinas",
  },
  padding: {
    name: "Padding",
    table: {
      type: {
        summary: ".dauikit-card {padding}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Padding",
  },
  margin: {
    name: "Margin",
    table: {
      type: {
        summary: ".dauikit-card {margin}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Margin",
  },
  children: {
    name: "Contenido",
    table: {
      type: {
        summary: "React.Node",
      },
      category: Category.BehaviorProperties,
    },
    description: "Contenido HTML (<pre style='display: inline; padding: 0;'><>children</></pre>)",
  },
  header: {
    name: "Header",
    type: "string",
    table: {
      type: {
        summary: "string | React.Node | null",
      },
      category: Category.BehaviorProperties,
    },
    description: `Header.<br/>
    Si es un string, se renderiza como un h2.<br/>
    Si es un nodo, se renderiza tal cual.<br/>
    Si es null, no se renderiza.`,
  },
};

export const defaultValues: Record<keyof Args, boolean | string | undefined> = {
  backgroundColor: "gray",
  textColor: "white",
  borderRadius: "0.5rem",
  margin: "undefined",
  padding: "calc(1.5rem - 1px)",
  header: "Título",
  children: "<p>Contenido</p>",
};

// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const key in defaultValues) {
  const keyParsed = key as keyof Args;

  argTypes[keyParsed] ??= {
  };
  const argType = argTypes[keyParsed];

  if (!argType)
    // eslint-disable-next-line no-continue
    continue;

  argType.defaultValue = defaultValues[keyParsed];

  argType.table ??= {
  };
  argType.table.defaultValue ??= {
  };

  argType.table.defaultValue.summary = defaultValues[keyParsed];
}