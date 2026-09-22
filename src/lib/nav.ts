export type NavLink = {
  title: string;
  href: string;
};

export type NavEntry =
  | ({ type: "link" } & NavLink)
  | { type: "group"; title: string; items: NavLink[] };

export const nav: NavEntry[] = [
  { type: "link", title: "Home", href: "/" },
  { type: "link", title: "Quick Start", href: "/quick-start" },
  { type: "link", title: "Software Downloads", href: "/downloads" },
  { type: "link", title: "Manikin Wi-Fi Setup", href: "/manikin-setup" },
  {
    type: "group",
    title: "RescueSIM Lite",
    items: [
      { title: "Overview", href: "/lite/overview" },
      { title: "Install RescueSIM Lite", href: "/lite/installation" },
      { title: "Activate with a License Key", href: "/lite/activation" },
      { title: "Trainer Quick Start", href: "/lite/trainer-quick-start" },
      { title: "Running a Session", href: "/lite/running-a-session" },
      { title: "Reviewing Results", href: "/lite/results" },
    ],
  },
  {
    type: "group",
    title: "RescueSIM XR",
    items: [
      { title: "Overview", href: "/xr/overview" },
      { title: "Set Up the Quest Headset", href: "/xr/setup" },
      { title: "Activate with a License Key", href: "/xr/activation" },
      { title: "Trainer Quick Start", href: "/xr/trainer-quick-start" },
      { title: "Running a Session", href: "/xr/running-a-session" },
      { title: "Reviewing Results", href: "/xr/results" },
    ],
  },
  { type: "link", title: "CPR Training Modes", href: "/training-modes" },
  {
    type: "group",
    title: "Admin Panel",
    items: [
      { title: "Logging In", href: "/admin/login" },
      { title: "Dashboard", href: "/admin/dashboard" },
      { title: "Members & Trainees", href: "/admin/members" },
      { title: "Licenses & Activation Codes", href: "/admin/licenses" },
      { title: "Sessions", href: "/admin/sessions" },
      { title: "Organization & Limits", href: "/admin/organization" },
      { title: "Session Report Reference", href: "/admin/session-report" },
    ],
  },
  { type: "link", title: "Troubleshooting", href: "/troubleshooting" },
  { type: "link", title: "FAQ", href: "/faq" },
];

export type FlatPage = {
  title: string;
  href: string;
  groupTitle?: string;
};

export function flattenNav(): FlatPage[] {
  const pages: FlatPage[] = [];
  for (const entry of nav) {
    if (entry.type === "link") {
      pages.push({ title: entry.title, href: entry.href });
    } else {
      for (const item of entry.items) {
        pages.push({ title: item.title, href: item.href, groupTitle: entry.title });
      }
    }
  }
  return pages;
}

export function getPageMeta(pathname: string): FlatPage | undefined {
  return flattenNav().find((p) => p.href === pathname);
}

export function getPrevNext(pathname: string): { prev?: FlatPage; next?: FlatPage } {
  const pages = flattenNav();
  const idx = pages.findIndex((p) => p.href === pathname);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? pages[idx - 1] : undefined,
    next: idx < pages.length - 1 ? pages[idx + 1] : undefined,
  };
}
