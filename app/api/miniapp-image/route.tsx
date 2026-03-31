import { ImageResponse } from "next/og";
import { APP_TITLE } from "@/lib/base-app";

export const runtime = "edge";

const imageSize = {
  width: 1200,
  height: 800,
};

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #f8fafc 0%, #e6f6f1 52%, #eef9d7 100%)",
          color: "#1e293b",
          padding: 56,
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            borderRadius: 36,
            border: "2px solid rgba(15,118,110,0.12)",
            background: "rgba(255,255,255,0.84)",
            padding: 44,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", color: "#0f766e" }}>
                Progress Studio
              </div>
              <div style={{ fontSize: 78, fontWeight: 800, letterSpacing: -4 }}>{APP_TITLE}</div>
              <div style={{ fontSize: 34, color: "#475569", maxWidth: 760 }}>
                Create a goal, record every completion, and keep momentum visible on Base.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: 160,
                height: 160,
                borderRadius: 36,
                background: "linear-gradient(135deg, #84cc16, #0f766e)",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                flex: 1,
                borderRadius: 28,
                background: "#ffffff",
                padding: 28,
              }}
            >
              <div style={{ fontSize: 18, textTransform: "uppercase", letterSpacing: 2, color: "#64748b" }}>Current Track</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 14 }}>
                <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1 }}>8</div>
                <div style={{ fontSize: 28, color: "#64748b", paddingBottom: 12 }}>of 12 moves</div>
              </div>
              <div style={{ width: "100%", height: 18, borderRadius: 999, background: "#d7ece8", overflow: "hidden" }}>
                <div style={{ width: "66%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg, #84cc16, #0f766e)" }} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: 280,
                borderRadius: 28,
                background: "#0f766e",
                color: "white",
                padding: 28,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 700 }}>Launch the Mini App</div>
              <div style={{ fontSize: 48, fontWeight: 800 }}>Add Progress</div>
            </div>
          </div>
        </div>
      </div>
    ),
    imageSize,
  );
}
