export function classNames(...classes: (string | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export type Themeable = {
  className?: string;
};