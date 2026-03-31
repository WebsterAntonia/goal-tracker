import Link from "next/link";
import { GoalStatusChip } from "@/components/GoalStatusChip";
import { getProgressPercent } from "@/lib/goal-data";
import { GoalRecord } from "@/lib/types";

export function GoalProgressCard({ goal, href }: { goal: GoalRecord; href?: string }) {
  const progress = getProgressPercent(goal);
  const content = (
    <div className="goal-strip">
      <div className="goal-strip-head">
        <div>
          <div className="eyebrow">Goal Track</div>
          <h3>{goal.name}</h3>
        </div>
        <GoalStatusChip status={goal.status} />
      </div>
      <div className="count-display">
        <strong>{goal.progress}</strong>
        <span>of {goal.target} completions</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="goal-strip-head">
        <span className="tiny">{progress}% complete</span>
        <span className="tiny">{goal.updatedAt}</span>
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
