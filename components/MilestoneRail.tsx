import { getGoalMilestones } from "@/lib/goal-data";
import { GoalRecord } from "@/lib/types";

export function MilestoneRail({ goal }: { goal: GoalRecord }) {
  const milestones = getGoalMilestones(goal);

  return (
    <div className="rail">
      {milestones.map((item, index) => (
        <div key={item.percent} className="rail-stop">
          <div className="rail-marker">{index + 1}</div>
          <div>
            <strong>{item.label}</strong>
            <p className="body-copy">{item.done ? "Milestone locked in." : "Keep pushing this track forward."}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
