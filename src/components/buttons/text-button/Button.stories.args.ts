import type { ArgTypes } from "@storybook/react";

export type Args = {
  transitionDuration: string;
  borderColor: string;
  borderWidth: string;
  backgroundColor: string;
  textColor: string;
  textColorHover: string;
  backgroundColorHover: string;
  borderRadius: string;
  disabled: boolean;
};

enum Category {
  CustomCSSVariables = "Custom CSS Variables",
CustomCSSProperties = "Custom CSS",
BehaviorProperties = "Behavior Properties",
}

export const argTypes: ArgTypes<Args> = {
  borderColor: {
    name: "Border Color",
    table: {
      type: {
        summary: ".dauikit-button:not([disabled]) {border-color}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Color del borde de la tabla y los items",
  },
  transitionDuration: {
    name: "Transition Duration",
    table: {
      type: {
        summary: ".dauikit-button {transition-duration}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Tiempo de transición de cambio de color al pasar el mouse por encima",
  },
  borderWidth: {
    name: "Border Width",
    type: "string",
    table: {
      type: {
        summary: ".dauikit-button {border-width}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Ancho del borde de la tabla y los items",
  },
  backgroundColor: {
    name: "Background Color",
    table: {
      type: {
        summary: ".dauikit-button:not([disabled]) {background-color}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Color de fondo del botón",
  },
  backgroundColorHover: {
    name: "Background Color Hover",
    table: {
      type: {
        summary: ".dauikit-button:not([disabled]):hover {background-color}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Color de fondo del botón al pasar el mouse por encima",
  },
  textColor: {
    name: "Text Color",
    table: {
      type: {
        summary: ".dauikit-button:not([disabled]) {color}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Color del texto del botón",
  },
  textColorHover: {
    name: "Text Color Hover",
    table: {
      type: {
        summary: ".dauikit-button:not([disabled]):hover {color}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Color del texto del botón al pasar el mouse por encima",
  },
  disabled: {
    name: "Disabled",
    table: {
      category: Category.BehaviorProperties,
    },
    description: "Indica si el botón está deshabilitado",
  },
  borderRadius: {
    name: "Border Radius",
    table: {
      type: {
        summary: ".dauikit-button {border-radius}",
      },
      category: Category.CustomCSSVariables,
    },
    description: "Radio de las esquinas del botón",
  },
};

export const defaultValues: Record<keyof Args, boolean | string> = {
  borderColor: "black",
  borderWidth: "1px",
  backgroundColor: "white",
  textColor: "black",
  textColorHover: "undefined",
  backgroundColorHover: "gray",
  transitionDuration: "0.3s",
  disabled: false,
  borderRadius: "5px",
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