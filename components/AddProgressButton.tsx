"use client";

import { useEffect, useRef, useState } from "react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS, GOAL_TRACKER_ABI } from "@/lib/goal-data";
import { TRACKING_APP_ID, APP_NAME } from "@/lib/base-app";
import { trackTransaction } from "@/utils/track";

export function AddProgressButton({ disabled }: { disabled?: boolean }) {
  const { address } = useAccount();
  const [feedback, setFeedback] = useState("Ready to push the count forward.");
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
    setFeedback("Progress updated.");
    trackTransaction(TRACKING_APP_ID, APP_NAME, address, txHash);
  }, [address, receipt.data?.transactionHash]);

  useEffect(() => {
    if (receipt.error) {
      setFeedback("Update failed.");
    }
  }, [receipt.error]);

  return (
    <div className="field-stack">
      <button
        type="button"
        className="solid-button"
        disabled={!address || disabled || isPending || receipt.isLoading}
        onClick={() => {
          if (!address) {
            setFeedback("Connect a wallet to update onchain progress.");
            return;
          }

          setFeedback("Submitting update...");
          writeContract({
            address: CONTRACT_ADDRESS,
            abi: GOAL_TRACKER_ABI,
            functionName: "updateProgress",
          });
        }}
      >
        {isPending || receipt.isLoading ? "Updating..." : "Add Progress"}
      </button>
      <p className="body-copy">{feedback}</p>
    </div>
  );
}
