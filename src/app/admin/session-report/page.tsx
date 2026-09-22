import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";

export default function AdminSessionReportPage() {
  return (
    <DocArticle href="/admin/session-report" title="Admin Panel — CPR Session Report">
      <p>
        Selecting <strong>View</strong> on a session in{" "}
        <strong>My Sessions</strong> opens the detailed CPR Session Report, showing the
        trainee&apos;s overall performance and detailed compression information.
      </p>
      <Figure
        src="/images/docs/cpr-session-report-full.png"
        alt="Full CPR Session Report showing survival rate, compression fraction, average CPM, total compressions, and compression quality"
        caption="Full CPR Session Report — Survival Rate, Compression Fraction, Avg CPM, Total Compressions, Compression Quality, and Session Info"
      />

      <h2>Main session parameters</h2>
      <h3>1. Survival Rate — example: 37%</h3>
      <p>
        The calculated scenario outcome based on the session&apos;s configured assessment
        logic. Treat it as a scenario result, not a direct measurement of compression
        quality.
      </p>

      <h3>2. Compression Fraction — example: 24%</h3>
      <p>
        The proportion of the session spent performing compressions. For example: total
        session duration = 25 seconds, compression time = 6 seconds, so Compression Fraction
        ≈ 24%. A higher percentage means the trainee spent more of the session actively
        compressing.
      </p>

      <h3>3. Average CPM — example: 155 CPM</h3>
      <p>CPM = Compressions Per Minute — the average rate at which the trainee compressed.</p>
      <table>
        <thead>
          <tr>
            <th>Range</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>&lt; 100 CPM</td><td>Too slow</td></tr>
          <tr><td>100–120 CPM</td><td>Target range</td></tr>
          <tr><td>&gt; 120 CPM</td><td>Too fast</td></tr>
        </tbody>
      </table>
      <p>CPM is an average — individual compressions can still vary during the session.</p>

      <h3>4. Total Compressions — example: 15</h3>
      <p>The total number of compressions detected during the session by the manikin.</p>

      <h2>Compression Quality</h2>
      <p>
        A breakdown of the trainee&apos;s compression performance, plotted from Good through
        Shallow to Deep:
      </p>
      <ul>
        <li><strong>Good</strong> — within the configured acceptable depth range; counts toward good-quality performance.</li>
        <li><strong>Shallow</strong> — doesn&apos;t reach the required depth; the trainee needs more downward force/depth.</li>
        <li><strong>Deep / Over-Deep</strong> — exceeds the configured acceptable depth; the trainee is pressing deeper than required.</li>
        <li><strong>Failed Recoil</strong> — the chest doesn&apos;t return sufficiently before the next compression; the trainee should allow full recoil between compressions.</li>
      </ul>

      <h2>Session Information</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Example</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mode Type</td>
            <td>CIVIC</td>
            <td>Identifies the scenario or training mode used for the session.</td>
          </tr>
          <tr>
            <td>Failed Recoil Count</td>
            <td>0</td>
            <td>Number of compressions where adequate chest recoil was not detected.</td>
          </tr>
          <tr>
            <td>Compression Time</td>
            <td>6 seconds</td>
            <td>Total time during the session in which compression activity was detected.</td>
          </tr>
          <tr>
            <td>Total Duration</td>
            <td>25 seconds</td>
            <td>Complete duration of the recorded session (active compression time + pauses).</td>
          </tr>
        </tbody>
      </table>

      <Callout type="note">
        The final result is never based on one measurement alone — RescueSim considers the
        relevant performance parameters together to evaluate overall performance.
      </Callout>
    </DocArticle>
  );
}
