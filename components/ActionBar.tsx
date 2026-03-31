import Link from "next/link";

type Action = {
  href: string;
  label: string;
  style?: "solid" | "ghost";
};

export function ActionBar({ actions }: { actions: Action[] }) {
  return (
    <div className="action-bar">
      {actions.map((action) => (
        <Link key={action.href} href={action.href} className={action.style === "ghost" ? "ghost-button" : "solid-button"}>
          {action.label}
        </Link>
      ))}
    </div>
  );
}
