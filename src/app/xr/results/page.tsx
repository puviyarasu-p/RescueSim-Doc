import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function XrResultsPage() {
  return (
    <DocArticle href="/xr/results" title="Reviewing Results (XR)">
      <p>
        RescueSIM XR produces the same results structure as RescueSIM Lite, because both run
        on the same underlying performance engine.
      </p>

      <ul>
        <li><strong>Performance Score</strong> / <strong>Survival Rate</strong> — a combined score representing overall CPR performance for the scenario.</li>
        <li><strong>Compression Fraction (CCF)</strong> — the percentage of the session spent actively compressing.</li>
        <li><strong>Average CPM</strong> — average compression rate against the 100–120 target range.</li>
        <li><strong>Total Compressions</strong> — the number of compression events recorded.</li>
        <li><strong>Compression Quality</strong> — Good vs. Shallow vs. Over-Deep vs. Failed-Recoil breakdown.</li>
        <li><strong>Final Result</strong> — Pass/Fail, or a Revive outcome, depending on the scenario.</li>
      </ul>

      <p>
        As with RescueSIM Lite, the final result combines the relevant parameters together
        rather than relying on any single measurement — feedback highlights the one or two
        areas that most affected the outcome.
      </p>

      <Callout type="note">
        Every XR session is saved and synced to the organization automatically, and shows up
        alongside Lite sessions in{" "}
        <Link href="/admin/sessions">Admin Panel → My Sessions</Link>, with the full{" "}
        <Link href="/admin/session-report">CPR Session Report</Link> available for review.
      </Callout>
    </DocArticle>
  );
}
