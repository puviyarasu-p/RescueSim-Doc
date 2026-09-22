import type { ReactNode } from "react";
import { Info, TriangleAlert, Lightbulb } from "lucide-react";

type CalloutType = "note" | "important" | "tip";

const styles: Record<CalloutType, { icon: ReactNode; classes: string; label: string }> = {
  note: {
    icon: <Info size={16} />,
    classes: "border-accent/30 bg-accent/5 text-foreground [&_strong]:text-accent",
    label: "Note",
  },
  important: {
    icon: <TriangleAlert size={16} />,
    classes: "border-amber-400/40 bg-amber-400/10 text-foreground [&_strong]:text-amber-600 dark:[&_strong]:text-amber-400",
    label: "Important",
  },
  tip: {
    icon: <Lightbulb size={16} />,
    classes: "border-sky-400/40 bg-sky-400/10 text-foreground [&_strong]:text-sky-600 dark:[&_strong]:text-sky-400",
    label: "Tip",
  },
};

export function Callout({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`my-5 flex gap-3 rounded-lg border px-4 py-3 text-[14.5px] leading-relaxed ${s.classes}`}>
      <span className="mt-0.5 shrink-0">{s.icon}</span>
      <div>
        <strong className="font-semibold">{s.label}: </strong>
        {children}
      </div>
    </div>
  );
}
