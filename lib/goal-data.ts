import { GoalRecord, ProgressInsight } from "@/lib/types";

export const CONTRACT_ADDRESS = "0xf5bd2dadc2c26099a4fec1b1ab6901af14407aac";

export const GOAL_TRACKER_ABI = [
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "createGoal",
    inputs: [{ name: "name", type: "string" }],
    outputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "updateProgress",
    inputs: [],
    outputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    name: "goals",
    inputs: [{ name: "", type: "address" }],
    outputs: [
      { name: "name", type: "string" },
      { name: "progress", type: "uint256" },
      { name: "exists", type: "bool" },
    ],
  },
] as const;

export const mockGoals: GoalRecord[] = [
  {
    id: "ship-daily-build",
    owner: "0x7F4b...421A",
    name: "Ship Daily Build",
    progress: 8,
    target: 12,
    status: "active",
    updatedAt: "Updated 2h ago",
    streak: 5,
  },
  {
    id: "train-mileage",
    owner: "0x7F4b...421A",
    name: "Train Mileage",
    progress: 14,
    target: 20,
    status: "updated",
    updatedAt: "Updated today",
    streak: 7,
  },
  {
    id: "read-30-pages",
    owner: "0x7F4b...421A",
    name: "Read 30 Pages",
    progress: 30,
    target: 30,
    status: "completed",
    updatedAt: "Completed yesterday",
    streak: 12,
  },
];

export const recentInsights: ProgressInsight[] = [
  { label: "Completion Rate", value: "68%", tone: "secondary" },
  { label: "Active Goals", value: "2", tone: "primary" },
  { label: "Momentum Streak", value: "7 days", tone: "accent" },
  { label: "Recent Updates", value: "11", tone: "support" },
];

export function getGoalById(id: string) {
  return mockGoals.find((goal) => goal.id === id) ?? mockGoals[0];
}

export function getPrimaryGoal() {
  return mockGoals[0];
}

export function getProgressPercent(goal: GoalRecord) {
  return Math.min(100, Math.round((goal.progress / goal.target) * 100));
}

export function getGoalMilestones(goal: GoalRecord) {
  return [25, 50, 75, 100].map((percent) => ({
    percent,
    label: `${percent}% reached`,
    done: getProgressPercent(goal) >= percent,
  }));
}
