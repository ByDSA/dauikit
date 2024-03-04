import { DualBadgeProps } from "../DualBadge";

export type Props = Omit<DualBadgeProps, "anchor" | "left" | "right"> & {
  pkg: string;
  disabled?: boolean;
};