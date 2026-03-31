import { MomentumHeader } from "@/components/MomentumHeader";
import { GoalStream } from "@/components/GoalStream";
import { EmptyState } from "@/components/EmptyState";
import { TopTabs } from "@/components/TopTabs";
import { mockGoals } from "@/lib/goal-data";

export default function MyGoalsPage() {
  return (
    <main className="app-shell page-shell">
      <MomentumHeader />
      <TopTabs
        tabs={[
          { href: "/my", label: "Goal Stream" },
          { href: "/", label: "Goal Hub" },
          { href: "/insights", label: "Insights" },
        ]}
      />
      <section className="studio-grid" style={{ gap: 18 }}>
        <section className="studio-panel">
          <div className="panel-inner page-shell">
            <div className="goal-strip-head">
              <div>
                <div className="eyebrow">My Goals</div>
                <h1 className="headline">Your active momentum flow.</h1>
              </div>
              <span className="status-chip">
                <span className="status-dot" />
                live stream
              </span>
            </div>
            <p className="body-copy">Open a goal, add progress, and keep the rhythm visible.</p>
          </div>
        </section>
        {mockGoals.length ? (
          <GoalStream goals={mockGoals} />
        ) : (
          <EmptyState
            title="No goals yet"
            description="Create the first track to start your progress stream."
            actionHref="/create"
            actionLabel="Create Goal"
          />
        )}
      </section>
    </main>
  );
}
