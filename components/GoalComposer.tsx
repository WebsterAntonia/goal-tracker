"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS, GOAL_TRACKER_ABI } from "@/lib/goal-data";
import { TRACKING_APP_ID, APP_NAME } from "@/lib/base-app";
import { trackTransaction } from "@/utils/track";

export function GoalComposer() {
  const { address } = useAccount();
  const [name, setName] = useState("");
  const [target, setTarget] = useState("12");
  const [status, setStatus] = useState("Ready to launch a new goal track.");
  const trackedHashRef = useRef<string | null>(null);
  const { data, isPending, writeContract } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({
    hash: data,
    query: { enabled: Boolean(data) },
  });

  useEffect(() => {
    const txHash = receipt.data?.transactionHash;
    if (!txHash || trackedHashRef.current === txHash) return;

    trackedHashRef.current = txHash;
    setStatus("Goal created and synced.");
    trackTransaction(TRACKING_APP_ID, APP_NAME, address, txHash);
  }, [address, receipt.data?.transactionHash]);

  useEffect(() => {
    if (receipt.error) {
      setStatus("Create goal failed.");
    }
  }, [receipt.error]);

  const previewPercent = useMemo(() => {
    const parsed = Number(target);
    if (!parsed || parsed < 1) return 0;
    return Math.min(100, Math.round((1 / parsed) * 100));
  }, [target]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!address) {
      setStatus("Connect a wallet to create a goal.");
      return;
    }

    if (!name.trim()) {
      setStatus("Enter a goal name.");
      return;
    }

    setStatus("Creating goal...");
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: GOAL_TRACKER_ABI,
      functionName: "createGoal",
      args: [name.trim()],
    });
  }

  return (
    <div className="studio-panel">
      <div className="panel-inner">
        <div className="goal-strip-head">
          <div>
            <div className="eyebrow">Setup Desk</div>
            <h2 className="section-title">Create a new track</h2>
          </div>
          <span className="status-chip">
            <span className="status-dot" />
            planning
          </span>
        </div>
        <form onSubmit={handleSubmit} className="field-stack" style={{ marginTop: 18 }}>
          <label className="field-stack">
            <span className="field-label">Goal Name</span>
            <input
              className="field-input"
              placeholder="Ship a build, run 5km, read daily"
              value={name}
              maxLength={40}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="field-stack">
            <span className="field-label">Target Count</span>
            <input
              className="field-input"
              inputMode="numeric"
              placeholder="12"
              value={target}
              onChange={(event) => setTarget(event.target.value.replace(/[^\d]/g, ""))}
            />
          </label>
          <div className="summary-card">
            <div className="goal-strip-head">
              <div>
                <span className="stat-label">Preview Rhythm</span>
                <strong>{name || "New Goal Track"}</strong>
              </div>
              <strong>{target || "0"} steps</strong>
            </div>
            <div className="progress-track" style={{ marginTop: 14 }}>
              <div className="progress-fill" style={{ width: `${previewPercent}%` }} />
            </div>
          </div>
          <div className="action-bar">
            <button type="submit" className="solid-button">
              {isPending || receipt.isLoading ? "Creating..." : "Create Goal"}
            </button>
            <Link href="/my" className="ghost-button">
              View My Goals
            </Link>
          </div>
          <p className="body-copy">{status}</p>
        </form>
      </div>
    </div>
  );
}
