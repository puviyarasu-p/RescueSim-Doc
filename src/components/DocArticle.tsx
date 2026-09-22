import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageNav } from "@/components/PageNav";

export function DocArticle({
  href,
  title,
  eyebrow,
  hero,
  children,
}: {
  href: string;
  title: string;
  eyebrow?: string;
  hero?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 md:px-10 md:py-10">
      {hero}
      <Breadcrumb href={href} />
      <article className="doc-prose">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
        )}
        <h1>{title}</h1>
        {children}
      </article>
      <PageNav href={href} />
    </div>
  );
}
