"use client";

import { useEffect, useState } from "react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { CONTRACT_ADDRESS, GOAL_TRACKER_ABI } from "@/lib/goal-data";
import { trackTransaction } from "@/utils/track";

export function AddProgressButton({ disabled }: { disabled?: boolean }) {
  const { address } = useAccount();
  const [feedback, setFeedback] = useState("Ready to push the count forward.");
  const { data, isPending, writeContract } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({
    hash: data,
    query: { enabled: Boolean(data) },
  });

  useEffect(() => {
    if (receipt.data?.transactionHash) {
      setFeedback("Progress updated.");
      trackTransaction("app-029", "goal-tracker", address, receipt.data.transactionHash);
    }
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
