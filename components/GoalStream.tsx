import { GoalProgressCard } from "@/components/GoalProgressCard";
import { GoalRecord } from "@/lib/types";

export function GoalStream({ goals }: { goals: GoalRecord[] }) {
  return (
    <div className="stream-list">
      {goals.map((goal) => (
        <GoalProgressCard key={goal.id} goal={goal} href={`/goals/${goal.id}`} />
      ))}
    </div>
  );
}
