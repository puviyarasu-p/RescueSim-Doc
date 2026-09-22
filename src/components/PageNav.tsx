import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getPrevNext } from "@/lib/nav";

export function PageNav({ href }: { href: string }) {
  const { prev, next } = getPrevNext(href);

  if (!prev && !next) return null;

  return (
    <div className="mt-12 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="group rounded-lg border border-border p-4 transition-colors hover:border-accent"
        >
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <ArrowLeft size={13} /> Previous
          </span>
          <span className="mt-1 block font-semibold text-accent group-hover:text-accent-hover">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group rounded-lg border border-border p-4 text-right transition-colors hover:border-accent sm:col-start-2"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs text-muted">
            Next <ArrowRight size={13} />
          </span>
          <span className="mt-1 block font-semibold text-accent group-hover:text-accent-hover">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
