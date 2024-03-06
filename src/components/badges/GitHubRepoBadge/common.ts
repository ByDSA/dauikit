import { DualBadgeProps } from "../DualBadge";

export type Props = Omit<DualBadgeProps,"left" | "link" | "right"> & {
  repo: string;
  disabled?: boolean;
};