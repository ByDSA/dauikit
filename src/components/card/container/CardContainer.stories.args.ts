import type { ArgTypes } from "@storybook/react";

export type Args = {
};

export const argTypes: ArgTypes<Args> = {
};

export const defaultValues: Record<keyof Args, boolean | string | undefined> = {
};

// TODO: quitar 'any' si se añaden args
// eslint-disable-next-line no-restricted-syntax, guard-for-in
for (const key in defaultValues) {
  const keyParsed = key as keyof Args;

  (argTypes as any)[keyParsed] ??= {
  };
  const argType = argTypes[keyParsed] as any;

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