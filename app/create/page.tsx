import { MomentumHeader } from "@/components/MomentumHeader";
import { GoalComposer } from "@/components/GoalComposer";
import { MilestoneRail } from "@/components/MilestoneRail";
import { TopTabs } from "@/components/TopTabs";
import { getPrimaryGoal } from "@/lib/goal-data";

export default function CreateGoalPage() {
  const sampleGoal = getPrimaryGoal();

  return (
    <main className="app-shell page-shell">
      <MomentumHeader />
      <TopTabs
        tabs={[
          { href: "/create", label: "Setup Studio" },
          { href: "/", label: "Goal Hub" },
          { href: "/my", label: "My Goals" },
        ]}
      />
      <section className="hero-stage">
        <div className="page-shell">
          <section className="studio-panel">
            <div className="panel-inner">
              <div className="eyebrow">Create Goal</div>
              <h1 className="headline">Build the next momentum track.</h1>
              <p className="body-copy" style={{ marginTop: 12 }}>
                Set the name, set the count, and start moving.
              </p>
            </div>
          </section>
          <GoalComposer />
        </div>
        <section className="studio-panel">
          <div className="panel-inner page-shell">
            <div>
              <div className="eyebrow">Milestone Preview</div>
              <h2 className="section-title">How the track will feel</h2>
            </div>
            <MilestoneRail goal={sampleGoal} />
          </div>
        </section>
      </section>
    </main>
  );
}
