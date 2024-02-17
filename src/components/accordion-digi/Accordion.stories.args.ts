import type { ArgTypes } from "@storybook/react";

export type Args = {
  borderColor: string;
  borderWidth: string;
  transitionTime: string;
  headerTitleColor: string;
  headerTitleColorHover: string;
  headerTitleColorOpen: string;
  headerTitleColorOpenHover: string;
  headerTitleColorDisabled: string;
  headerBackgroundColor: string;
  headerBackgroundColorHover: string;
  headerBackgroundColorOpen: string;
  disabled: boolean;
};

enum Category {
  CustomCSSVariables = "Custom CSS Variables",
CustomCSSProperties = "Custom CSS",
BehaviorProperties = "Behavior Properties",
}

const borderColor: ArgTypes<Args>["borderColor"] = {
  name: "Border Color",
  table: {
    type: {
      summary: ".dauikit-accordion-digi .accordion-item {--border-color}",
    },
    category: Category.CustomCSSVariables,
  },
  description: "Color del borde de la tabla y los items",
};
const borderWidth: ArgTypes<Args>["borderWidth"] = {
  name: "Border Width",
  type: "string",
  table: {
    type: {
      summary: ".dauikit-accordion-digi .accordion-item {--border-width}",
    },
    category: Category.CustomCSSVariables,
  },
  description: "Ancho del borde de la tabla y los items",
};
const transitionTime: ArgTypes<Args>["transitionTime"] = {
  name: "Transition Time",
  table: {
    type: {
      summary: ".dauikit-accordion-digi .accordion-item {--transition-time}",
    },
    category: Category.CustomCSSVariables,
  },
  description: "Tiempo de transición al abrir o cerrar un item",
};
const headerTitleColor: ArgTypes<Args>["headerTitleColor"] = {
  name: "Header Title Color",
  table: {
    type: {
      summary: ".dauikit-accordion-digi .accordion-item header .title {color}",
    },
    category: Category.CustomCSSProperties,
  },
  description: "Color del texto del header",
};
const headerTitleColorHover: ArgTypes<Args>["headerTitleColorHover"] = {
  name: "Header Title Color Hover",
  control: {
    type: "color",
  },
  table: {
    type: {
      summary: ".dauikit-accordion-digi .accordion-item:not(.disabled) header:hover .title {color}",
    },
    category: Category.CustomCSSProperties,
  },
  description: "Color del texto del header al pasar el mouse por encima",
};
const headerBackgroundColorHover: ArgTypes<Args>["headerBackgroundColorHover"] = {
  name: "Header Background Color Hover",
  table: {
    type: {
      summary: ".dauikit-accordion-digi .accordion-item:not(.disabled) header:hover {background-color}",
    },
    category: Category.CustomCSSProperties,
  },
  description: "Color de fondo del header al pasar el mouse por encima",
};
const headerTitleColorOpen: ArgTypes<any>[0] = {
  name: "Header Title Color Open",
  control: {
    type: "color",
  },
  table: {
    type: {
      summary: ".dauikit-accordion-digi .accordion-item.open:not(.closing) header .title {color}",
    },
    category: Category.CustomCSSProperties,
  },
  description: "Color del texto del header cuando está abierto",
};

export const argTypes: ArgTypes<Args> = {
  borderColor,
  borderWidth,
  transitionTime,
  headerTitleColor,
  headerTitleColorHover,
  headerTitleColorOpen,
  headerBackgroundColor: {
    name: "Header Background Color",
    table: {
      type: {
        summary: ".dauikit-accordion-digi .accordion-item header{background-color}",
      },
      category: Category.CustomCSSProperties,
    },
    description: "Color de fondo del header",
  },
  headerBackgroundColorOpen: {
    name: "Header Background Color Open",
    table: {
      type: {
        summary: ".dauikit-accordion-digi .accordion-item.open:not(.closing) header {background-color}",
      },
      category: Category.CustomCSSProperties,
    },
    description: "Color de fondo del header cuando está abierto",
  },
  headerBackgroundColorHover,
  headerTitleColorDisabled: {
    name: "Header Text Color Disabled",
    table: {
      type: {
        summary: ".dauikit-accordion-digi .accordion-item.disabled header .title {color}",
      },
      category: Category.CustomCSSProperties,
    },
    description: "Color del texto del header cuando está deshabilitado",
  },
  headerTitleColorOpenHover: {
    name: "Header Title Color Open Hover",
    control: {
      type: "color",
    },
    table: {
      type: {
        summary: ".dauikit-accordion-digi .accordion-item.open:not(.closing) header:hover .title {color}",
      },
      category: Category.CustomCSSProperties,
    },
    description: "Color del texto del header cuando está abierto y se pasa el mouse por encima",
  },
  disabled: {
    name: "Disabled",
    table: {
      type: {
        summary: "Deshabilita el componente",
      },
      category: Category.BehaviorProperties,
    },
  },
};

export const defaultValues: Record<keyof Args, any> = {
  borderColor: "gray",
  borderWidth: "1px",
  transitionTime: "0.5s",
  headerTitleColor: "black",
  headerTitleColorHover: "undefined",
  headerTitleColorDisabled: "grey",
  headerTitleColorOpen: "undefined",
  headerTitleColorOpenHover: "undefined",
  headerBackgroundColor: "white",
  headerBackgroundColorHover: "gray",
  headerBackgroundColorOpen: "lightgray",
  disabled: false,
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