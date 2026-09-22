"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { nav } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  return pathname === href;
}

function isGroupActive(pathname: string, items: { href: string }[]) {
  return items.some((item) => pathname === item.href);
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  return (
    <nav className="px-3 py-4 text-[14.5px]">
      <ul className="flex flex-col gap-0.5">
        {nav.map((entry) => {
          if (entry.type === "link") {
            const active = isActive(pathname, entry.href);
            return (
              <li key={entry.href}>
                <Link
                  href={entry.href}
                  onClick={onNavigate}
                  className={`block rounded-md px-3 py-1.5 transition-colors ${
                    active
                      ? "bg-accent/10 font-semibold text-accent"
                      : "text-foreground hover:bg-surface-alt"
                  }`}
                >
                  {entry.title}
                </Link>
              </li>
            );
          }

          const groupActive = isGroupActive(pathname, entry.items);
          const isCollapsed = collapsed[entry.title] ?? false;

          return (
            <li key={entry.title} className="mt-2">
              <button
                type="button"
                onClick={() =>
                  setCollapsed((prev) => ({ ...prev, [entry.title]: !isCollapsed }))
                }
                className={`flex w-full items-center justify-between rounded-md px-3 py-1.5 text-left font-semibold cursor-pointer ${
                  groupActive ? "text-accent" : "text-foreground"
                }`}
              >
                <span>{entry.title}</span>
                <ChevronDown
                  size={15}
                  className={`text-muted transition-transform ${isCollapsed ? "-rotate-90" : ""}`}
                />
              </button>
              {!isCollapsed && (
                <ul className="ml-2 flex flex-col gap-0.5 border-l border-border pl-3.5">
                  {entry.items.map((item) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onNavigate}
                          className={`block rounded-md px-2.5 py-1.5 transition-colors ${
                            active
                              ? "bg-accent/10 font-semibold text-accent"
                              : "text-muted hover:bg-surface-alt hover:text-foreground"
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
