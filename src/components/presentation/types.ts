import type { ComponentType } from "react";

export interface SlideMeta {
  id: number;
  title: string;
  /** speaker notes from the original deck */
  notes: string[];
  Component: ComponentType;
}

export type SlideDirection = "next" | "prev" | "same";
