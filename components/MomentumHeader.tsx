"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletButton } from "@/components/WalletButton";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "Goal Hub" },
  { href: "/create", label: "Create Goal" },
  { href: "/my", label: "My Goals" },
  { href: "/insights", label: "Insights" },
];

export function MomentumHeader() {
  const pathname = usePathname();

  return (
    <header className="top-nav">
      <div className="brand-lockup">
        <div className="brand-mark" />
        <div>
          <div className="eyebrow">Progress Studio</div>
          <strong>goal-tracker</strong>
        </div>
      </div>
      <nav className="tab-row" aria-label="Primary">
        {tabs.map((tab) => (
          <Link key={tab.href} href={tab.href} className={cn("tab-link", pathname === tab.href && "active")}>
            {tab.label}
          </Link>
        ))}
      </nav>
      <WalletButton />
    </header>
  );
}
