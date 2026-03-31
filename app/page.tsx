import { MomentumHeader } from "@/components/MomentumHeader";
import { GoalColumnNav } from "@/components/GoalColumnNav";
import { GoalProgressCard } from "@/components/GoalProgressCard";
import { ActionBar } from "@/components/ActionBar";
import { ProgressSummaryPanel } from "@/components/ProgressSummaryPanel";
import { TopTabs } from "@/components/TopTabs";
import { AddProgressButton } from "@/components/AddProgressButton";
import { getPrimaryGoal, mockGoals, recentInsights } from "@/lib/goal-data";

export default function HomePage() {
  const primaryGoal = getPrimaryGoal();

  return (
    <main className="app-shell page-shell">
      <MomentumHeader />
      <TopTabs
        tabs={[
          { href: "/", label: "Current Progress" },
          { href: "/create", label: "Create Goal" },
          { href: "/my", label: "My Goals" },
        ]}
      />
      <section className="three-column-layout">
        <GoalColumnNav goals={mockGoals} />
        <div className="page-shell">
          <section className="studio-panel">
            <div className="panel-inner page-shell">
              <div>
                <div className="eyebrow">Goal Hub</div>
                <h1 className="headline">Keep your momentum visible.</h1>
              </div>
              <div className="hero-stage">
                <GoalProgressCard goal={primaryGoal} href={`/goals/${primaryGoal.id}`} />
                <div className="page-shell">
                  <div className="summary-card">
                    <span className="stat-label">Current Focus</span>
                    <div className="count-display">
                      <strong>{primaryGoal.progress}</strong>
                      <span>moves logged</span>
                    </div>
                    <p className="body-copy">Fast action for your live goal track.</p>
                    <div style={{ marginTop: 14 }}>
                      <AddProgressButton />
                    </div>
                  </div>
                  <ActionBar
                    actions={[
                      { href: "/create", label: "Create Goal" },
                      { href: "/my", label: "View My Goals", style: "ghost" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="studio-panel">
            <div className="panel-inner">
              <div className="goal-strip-head">
                <div>
                  <div className="eyebrow">Progress Summary</div>
                  <h2 className="section-title">Recent momentum</h2>
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <ProgressSummaryPanel insights={recentInsights} />
              </div>
            </div>
          </section>
        </div>
        <aside className="page-shell">
          <section className="studio-panel">
            <div className="panel-inner">
              <div className="eyebrow">Ready State</div>
              <h2 className="section-title">Connected user snapshot</h2>
              <div className="chip-row" style={{ marginTop: 14 }}>
                <span className="status-chip">
                  <span className="status-dot" />
                  active
                </span>
                <span className="status-chip">
                  <span className="status-dot" style={{ background: "#38BDF8" }} />
                  synced
                </span>
              </div>
              <p className="body-copy" style={{ marginTop: 14 }}>
                Review the current track, add progress instantly, and jump into detail without leaving the workspace.
              </p>
            </div>
          </section>
          <section className="studio-panel">
            <div className="panel-inner">
              <div className="eyebrow">Contract</div>
              <p className="body-copy">Base goal tracker contract wired for create and update actions.</p>
              <p className="tiny">0xf5bd2dadc2c26099a4fec1b1ab6901af14407aac</p>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
