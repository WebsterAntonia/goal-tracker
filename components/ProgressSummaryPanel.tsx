import { ProgressInsight } from "@/lib/types";

export function ProgressSummaryPanel({ insights }: { insights: ProgressInsight[] }) {
  return (
    <div className="summary-grid">
      {insights.map((insight) => (
        <div key={insight.label} className="summary-card">
          <span className="stat-label">{insight.label}</span>
          <strong className="stat-value">{insight.value}</strong>
        </div>
      ))}
    </div>
  );
}
