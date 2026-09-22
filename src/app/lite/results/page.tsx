import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";

export default function LiteResultsPage() {
  return (
    <DocArticle href="/lite/results" title="Reviewing Results">
      <p>
        After ending the session, RescueSim displays the trainee&apos;s performance results.
        Use these to explain the trainee&apos;s performance and identify areas that need more
        practice.
      </p>

      <Figure
        src="/images/docs/results-panel-score-failed.png"
        alt="Results panel showing performance score, compression fraction, average CPM, total compressions and result"
        caption="Results panel — Performance Score 37, CCF 24%, Avg CPM 155, 15 total compressions, Result: FAILED, with coaching feedback"
      />

      <h2>What the results include</h2>
      <ul>
        <li><strong>Performance Score</strong> — a combined score representing overall CPR performance.</li>
        <li><strong>CCF (Compression Fraction)</strong> — the percentage of the session spent actively compressing, versus paused.</li>
        <li><strong>Average CPM</strong> — the average compression rate. Target range: 100–120 per minute.</li>
        <li><strong>Compression Time</strong> — total time during which compression activity was detected.</li>
        <li><strong>Failed Recoil</strong> — compressions where the chest didn&apos;t fully return before the next one.</li>
        <li><strong>Total Compressions</strong> — the number of compression events recorded.</li>
        <li><strong>Compression Quality</strong> — a breakdown of Good vs. Shallow vs. Over-Deep vs. Failed-Recoil compressions.</li>
        <li><strong>Final Result</strong> — Pass/Fail, or a Revive outcome, depending on the training scenario.</li>
      </ul>

      <Callout type="tip">
        Trainer feedback flow: what went well → what needs improvement → practice again →
        review the next result.
      </Callout>

      <h2>Understanding the result</h2>
      <p>
        The final result isn&apos;t based on one measurement alone. If a scenario includes a
        &quot;revive&quot; outcome, it&apos;s based on the overall score, the average rate
        falling in the target range, and enough compressions being classified as good depth —
        not any single metric on its own. Feedback highlights the one or two areas that most
        affected the result, so the trainee knows exactly what to work on next time.
      </p>
      <p>
        Once the session ends, the result is saved and sent to the organization automatically
        — no extra step is needed from the trainee or trainer.
      </p>

      <Callout type="note">
        Every recorded session — from Lite or XR — is also available afterwards in the{" "}
        <Link href="/admin/sessions">Admin Panel → My Sessions</Link>, with a fuller{" "}
        <Link href="/admin/session-report">CPR Session Report</Link>.
      </Callout>
    </DocArticle>
  );
}
