import { DualBadgeProps } from "../DualBadge";

export type Props = Omit<DualBadgeProps,"anchor" | "left" | "right"> & {
  repo: string;
  disabled?: boolean;
};