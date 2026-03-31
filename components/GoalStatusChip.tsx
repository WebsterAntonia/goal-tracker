import { GoalStatus } from "@/lib/types";
import { statusTone } from "@/lib/utils";

export function GoalStatusChip({ status }: { status: GoalStatus }) {
  return (
    <span className="status-chip">
      <span className="status-dot" style={{ background: statusTone(status) }} />
      {status}
    </span>
  );
}
