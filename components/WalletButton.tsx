"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { shortAddress } from "@/lib/utils";

export function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  async function handleClick() {
    if (isConnected) {
      disconnect();
      return;
    }

    const connector = connectors[0];
    if (!connector) {
      return;
    }

    try {
      await connectAsync({ connector });
    } catch {
      // Optional in mock mode.
    }
  }

  return (
    <button className="pill-button" onClick={handleClick} type="button">
      {isPending ? "Connecting..." : isConnected ? shortAddress(address) : "Connect Wallet"}
    </button>
  );
}
