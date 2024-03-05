import { DualBadgeProps } from "../DualBadge";

export type Props = Omit<DualBadgeProps, "left" | "link" | "right"> & {
  pkg: string;
  disabled?: boolean;
};