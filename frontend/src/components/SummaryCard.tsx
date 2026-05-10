import type { LucideIcon } from 'lucide-react';

type Props = {
  label: string;
  value: string | number;
  detail: string;
  icon: LucideIcon;
};

export default function SummaryCard({ label, value, detail, icon: Icon }: Props) {
  return (
    <section className="summary-card">
      <div>
        <p className="label">{label}</p>
        <strong>{value}</strong>
        <span>{detail}</span>
      </div>
      <Icon size={24} aria-hidden="true" />
    </section>
  );
}
