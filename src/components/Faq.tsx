import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function FaqItem({ question, children }: { question: string; children: ReactNode }) {
  return (
    <details className="group border-b border-border py-4 first:pt-0 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-semibold text-foreground marker:content-none">
        {question}
        <ChevronDown
          size={17}
          className="shrink-0 text-muted transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="doc-prose mt-2.5 text-[14.5px] [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </details>
  );
}

export function FaqSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-2">
      <h2>{title}</h2>
      <div className="rounded-lg border border-border px-4">{children}</div>
    </div>
  );
}
