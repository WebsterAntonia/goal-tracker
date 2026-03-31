import Link from "next/link";
import { MomentumHeader } from "@/components/MomentumHeader";
import { AddProgressButton } from "@/components/AddProgressButton";
import { GoalStatusChip } from "@/components/GoalStatusChip";
import { MilestoneRail } from "@/components/MilestoneRail";
import { TopTabs } from "@/components/TopTabs";
import { getGoalById, getProgressPercent } from "@/lib/goal-data";

export default async function GoalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const goal = getGoalById(id);
  const progress = getProgressPercent(goal);

  return (
    <main className="app-shell page-shell">
      <MomentumHeader />
      <TopTabs
        tabs={[
          { href: `/goals/${goal.id}`, label: "Detail Stage" },
          { href: "/my", label: "My Goals" },
          { href: "/create", label: "Create Goal" },
        ]}
      />
      <section className="hero-stage">
        <section className="studio-panel">
          <div className="panel-inner page-shell">
            <div className="goal-strip-head">
              <div>
                <div className="eyebrow">Goal Detail</div>
                <h1 className="headline">{goal.name}</h1>
              </div>
              <GoalStatusChip status={goal.status} />
            </div>
            <div className="stat-row">
              <div className="stat-box">
                <span className="stat-label">Current</span>
                <span className="stat-value">{goal.progress}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Target</span>
                <span className="stat-value">{goal.target}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Progress</span>
                <span className="stat-value">{progress}%</span>
              </div>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="goal-strip-head">
              <div>
                <span className="tiny">{goal.updatedAt}</span>
                <p className="body-copy" style={{ marginTop: 8 }}>
                  One tap updates the onchain counter and keeps the current stage moving.
                </p>
              </div>
              <AddProgressButton disabled={goal.status === "completed"} />
            </div>
          </div>
        </section>
        <aside className="page-shell">
          <section className="studio-panel">
            <div className="panel-inner page-shell">
              <div>
                <div className="eyebrow">Milestones</div>
                <h2 className="section-title">Track checkpoints</h2>
              </div>
              <MilestoneRail goal={goal} />
            </div>
          </section>
          <section className="studio-panel">
            <div className="panel-inner page-shell">
              <div>
                <div className="eyebrow">Navigation</div>
                <h2 className="section-title">Next move</h2>
              </div>
              <Link href="/my" className="ghost-button">
                Back to My Goals
              </Link>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
