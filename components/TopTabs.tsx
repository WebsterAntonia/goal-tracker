"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Tab = {
  href: string;
  label: string;
};

export function TopTabs({ tabs }: { tabs: Tab[] }) {
  const pathname = usePathname();

  return (
    <div className="tab-row" aria-label="Section tabs">
      {tabs.map((tab) => (
        <Link key={tab.href} href={tab.href} className={cn("tab-link", pathname === tab.href && "active")}>
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
