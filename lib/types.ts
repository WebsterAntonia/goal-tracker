export type GoalStatus = "ready" | "active" | "updated" | "completed" | "synced";

export type GoalRecord = {
  id: string;
  owner: string;
  name: string;
  progress: number;
  target: number;
  status: GoalStatus;
  updatedAt: string;
  streak: number;
};

export type ProgressInsight = {
  label: string;
  value: string;
  tone: "primary" | "secondary" | "accent" | "support";
};
