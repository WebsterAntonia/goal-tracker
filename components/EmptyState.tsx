import Link from "next/link";

export function EmptyState({
  title,
  description,
  actionHref,
  actionLabel,
}: {
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
}) {
  return (
    <div className="empty-state">
      <strong>{title}</strong>
      <p className="body-copy">{description}</p>
      <Link href={actionHref} className="solid-button">
        {actionLabel}
      </Link>
    </div>
  );
}
