import { MomentumHeader } from "@/components/MomentumHeader";
import { ProgressSummaryPanel } from "@/components/ProgressSummaryPanel";
import { TopTabs } from "@/components/TopTabs";
import { mockGoals, recentInsights } from "@/lib/goal-data";

export default function InsightsPage() {
  return (
    <main className="app-shell page-shell">
      <MomentumHeader />
      <TopTabs
        tabs={[
          { href: "/insights", label: "Insights" },
          { href: "/", label: "Goal Hub" },
          { href: "/my", label: "My Goals" },
        ]}
      />
      <section className="hero-stage">
        <section className="studio-panel">
          <div className="panel-inner page-shell">
            <div>
              <div className="eyebrow">Progress Insights</div>
              <h1 className="headline">A light read on recent movement.</h1>
            </div>
            <ProgressSummaryPanel insights={recentInsights} />
          </div>
        </section>
        <section className="studio-panel">
          <div className="panel-inner page-shell">
            <div>
              <div className="eyebrow">Recent Activity</div>
              <h2 className="section-title">Latest updates</h2>
            </div>
            {mockGoals.map((goal) => (
              <div key={goal.id} className="summary-card">
                <div className="goal-strip-head">
                  <strong>{goal.name}</strong>
                  <span className="tiny">{goal.updatedAt}</span>
                </div>
                <p className="body-copy" style={{ marginTop: 10 }}>
                  {goal.progress} of {goal.target} completions recorded.
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
