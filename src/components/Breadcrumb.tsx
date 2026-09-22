import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { getPageMeta } from "@/lib/nav";

export function Breadcrumb({ href }: { href: string }) {
  const meta = getPageMeta(href);
  const pageTitle = meta?.title ?? "Home";
  const groupTitle = meta?.groupTitle;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[13.5px] text-muted">
      <Link href="/" className="flex items-center hover:text-accent">
        <Home size={15} />
      </Link>
      <ChevronRight size={13} />
      {groupTitle && (
        <>
          <span>{groupTitle}</span>
          <ChevronRight size={13} />
        </>
      )}
      <span className="rounded-md bg-accent/10 px-2 py-0.5 font-medium text-accent">
        {pageTitle}
      </span>
    </nav>
  );
}
