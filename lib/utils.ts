import { GoalRecord, GoalStatus } from "@/lib/types";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function statusTone(status: GoalStatus) {
  switch (status) {
    case "completed":
      return "#84CC16";
    case "updated":
      return "#F97316";
    case "synced":
      return "#38BDF8";
    case "active":
      return "#0F766E";
    default:
      return "#64748B";
  }
}

export function progressText(goal: GoalRecord) {
  return `${goal.progress}/${goal.target}`;
}

export function shortAddress(address?: string) {
  if (!address) return "Wallet offline";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
