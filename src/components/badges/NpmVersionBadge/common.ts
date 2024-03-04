import { DualBadgeProps } from "../DualBadge";

export type Props = Omit<DualBadgeProps, "left" | "right"> & {
  pkg: string;
};