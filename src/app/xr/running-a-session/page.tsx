import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function XrRunningASessionPage() {
  return (
    <DocArticle href="/xr/running-a-session" title="Running a Session (XR)">
      <p>
        Once the scenario starts, RescueSIM XR monitors the trainee&apos;s CPR performance on
        the manikin in real time, exactly like RescueSIM Lite — the difference is that the
        feedback is woven into the immersive scenario itself rather than shown on a separate
        monitoring screen.
      </p>

      <h2>Live Performance Parameters</h2>
      <p>The same parameters are tracked as in RescueSIM Lite:</p>
      <ul>
        <li><strong>CPM (Compressions Per Minute)</strong> — target range 100–120 CPM.</li>
        <li><strong>Depth</strong> — classified as Good, Shallow, or Over-Deep.</li>
        <li><strong>Total Compressions</strong> — the running count of detected compressions.</li>
        <li><strong>Failed Recoil</strong> — compressions where the chest didn&apos;t fully return before the next one.</li>
      </ul>

      <Callout type="note">
        Like RescueSIM Lite, the live assessment does not require continuous network
        communication — a brief Wi-Fi interruption should not interrupt an active scenario.
      </Callout>

      <h2>Ending the Scenario</h2>
      <p>
        Let the scenario run to its natural conclusion whenever possible so RescueSim can
        generate a complete result. If a session needs to be abandoned early, exiting the
        scenario partway through means a final result may not be generated — the same
        End vs. Quit distinction used in RescueSIM Lite applies here.
      </p>

      <h2>Session Upload</h2>
      <p>
        When the scenario ends normally, the result is saved and uploaded automatically. If
        the headset temporarily loses connectivity, RescueSim retries the upload the next
        time the app has network access — no manual steps needed.
      </p>

      <p>
        Next, see how to read the numbers: <Link href="/xr/results">Reviewing Results</Link>.
      </p>
    </DocArticle>
  );
}
