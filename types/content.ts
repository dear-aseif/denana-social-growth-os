export type Platform = "Instagram" | "Facebook" | "Instagram & Facebook";

export type ContentStatus = "Siap Posting" | "Draft" | "Perlu Review";

export interface ContentItem {
  id: number;
  date: string;
  day: string;
  time: string;
  platform: Platform;
  category: string;
  title: string;
  caption: string;
  hashtags: string[];
  status: ContentStatus;
  color: "gold" | "cream" | "rose" | "green";
}

export interface PlannerMetric {
  label: string;
  value: string;
  helper: string;
}
