import { DualBadgeProps } from "../DualBadge";

export type Props = Omit<DualBadgeProps,"left" | "right"> & {
  repo: string;
};