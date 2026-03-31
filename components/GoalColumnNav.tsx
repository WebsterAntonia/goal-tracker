import Link from "next/link";
import { GoalStatusChip } from "@/components/GoalStatusChip";
import { GoalRecord } from "@/lib/types";

export function GoalColumnNav({ goals }: { goals: GoalRecord[] }) {
  return (
    <aside className="studio-panel">
      <div className="panel-inner">
        <div className="goal-strip-head">
          <div>
            <div className="eyebrow">Goal Stream</div>
            <h2 className="section-title">Recent Tracks</h2>
          </div>
          <Link href="/my" className="tiny">
            See all
          </Link>
        </div>
        <div className="link-list" style={{ marginTop: 16 }}>
          {goals.map((goal) => (
            <Link key={goal.id} href={`/goals/${goal.id}`} className="goal-strip">
              <div className="goal-strip-head">
                <strong>{goal.name}</strong>
                <GoalStatusChip status={goal.status} />
              </div>
              <div className="tiny">
                {goal.progress} / {goal.target}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
