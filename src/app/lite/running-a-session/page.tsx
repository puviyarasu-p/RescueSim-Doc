import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure, FigureRow } from "@/components/Figure";

export default function LiteRunningASessionPage() {
  return (
    <DocArticle href="/lite/running-a-session" title="Running a Session">
      <p>
        Once you press <strong>Start</strong>, RescueSim begins monitoring the trainee&apos;s
        CPR performance in real time. The manikin sends performance data to the PC
        application, and the trainer sees results as the trainee performs compressions.
      </p>

      <h2>Live Monitoring Panel</h2>
      <p>The live monitoring screen shows the trainee&apos;s CPR performance as it happens:</p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>What it shows</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CPM</td>
            <td>Current compression rate.</td>
          </tr>
          <tr>
            <td>Depth</td>
            <td>Feedback on compression performance.</td>
          </tr>
          <tr>
            <td>T-Compression</td>
            <td>Total compression count during the session.</td>
          </tr>
          <tr>
            <td>Depth Response</td>
            <td>Graph of the trainee&apos;s compression performance over time.</td>
          </tr>
        </tbody>
      </table>
      <FigureRow>
        <Figure
          src="/images/docs/session-start-no-compressions.png"
          alt="Live monitoring panel just after starting, with no compressions detected yet"
          caption="Just after Start — no compressions detected yet"
        />
        <Figure
          src="/images/docs/mid-session-cpm-depth.png"
          alt="Mid-session live monitoring showing CPM 149 and GOOD depth"
          caption="Mid-session — CPM 149 (too fast), GOOD depth, 15 compressions"
        />
      </FigureRow>
      <Callout type="note">
        During the live assessment, RescueSim does not require continuous network
        communication. A temporary internet connection problem should not interrupt the
        active training session.
      </Callout>

      <h2>Live Performance Parameters</h2>
      <h3>CPM — Compressions Per Minute</h3>
      <p>
        Target: <strong>100–120 CPM</strong>. Below target means compressions are too slow;
        above target means they&apos;re too fast. The value updates during the session so the
        trainee can adjust their pace.
      </p>
      <h3>Depth</h3>
      <p>
        Classified as <strong>Good</strong> (appropriate depth), <strong>Shallow</strong>{" "}
        (not deep enough), or <strong>Over-Deep</strong> (deeper than expected). The Depth
        Response graph shows the compression pattern throughout the session.
      </p>
      <h3>T-Compression — Total Compressions</h3>
      <p>The total number of compressions detected during the session.</p>
      <h3>Failed Recoil</h3>
      <p>
        Counts compressions where the chest didn&apos;t fully return before the next
        compression. A lower number means better recoil consistency.
      </p>

      <h2>End Session or Quit Session</h2>
      <p>
        <strong>End Session</strong> — use this when the trainee has completed training.
        RescueSim ends the session, generates the result, saves it, and uploads it. This is
        the normal way to finish.
      </p>
      <p>
        <strong>Quit Session</strong> — use this only to abandon an active session. A forced
        quit means the session may not generate a final training result.
      </p>
      <Callout type="important">
        Use End Session for normal training. Use Quit Session only when you need to abandon
        the session.
      </Callout>

      <h2>Session Upload</h2>
      <p>
        After a session ends normally, RescueSim attempts to upload the result. If an upload
        temporarily fails, you don&apos;t normally need to manage the file yourself — RescueSim
        keeps failed uploads in a pending queue and automatically retries them the next time
        the application is opened.
      </p>
      <Callout type="note">
        You normally don&apos;t need to check the pending uploads file. Only investigate it if
        your organization specifically asks you to troubleshoot an upload problem.
      </Callout>

      <p className="!mb-0 rounded-lg bg-surface-alt px-4 py-3 text-center text-sm font-medium text-muted">
        ONLINE → ASSIGN → CHECK → CONFIGURE → START → TRAIN → END → REVIEW
      </p>

      <p className="mt-5">
        Next, see how to read the numbers: <Link href="/lite/results">Reviewing Results</Link>.
      </p>
    </DocArticle>
  );
}
