import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function XrTrainerQuickStartPage() {
  return (
    <DocArticle href="/xr/trainer-quick-start" title="Trainer Quick Start (XR)">
      <p>
        RescueSIM XR follows the same preparation flow as RescueSIM Lite — power on, check
        online status, assign a trainee, configure the mode, and start — just from inside the
        headset instead of a PC screen.
      </p>

      <h2>Device Setup</h2>
      <ul>
        <li><strong>Power on the manikin</strong> and confirm it&apos;s connected to Wi-Fi (see <Link href="/manikin-setup">Manikin Wi-Fi Setup</Link>).</li>
        <li><strong>Check the device status</strong> — the manikin should show as ONLINE inside RescueSIM XR before you begin.</li>
        <li><strong>Assign a trainee</strong> — enter a Trainee PIN (registered trainee) or a Guest Name, the same as in RescueSIM Lite.</li>
      </ul>

      <h2>Training Mode</h2>
      <p>
        Choose <strong>Civic</strong> or <strong>HCP</strong> mode before starting — see{" "}
        <Link href="/training-modes">CPR Training Modes</Link> for what each one emphasizes.
        Available training parameters adjust to match the selected mode.
      </p>

      <h2>Guided Immersive Scenario</h2>
      <p>
        Once the trainee puts on the headset and the session starts, RescueSIM XR walks them
        through the emergency scenario step by step — recognizing the emergency, calling for
        help, and starting compressions — while their real compressions on the manikin drive
        the scene in real time.
      </p>

      <Callout type="tip">
        Brief the trainee before they put the headset on: where the manikin is positioned
        relative to their starting point in the room, and that the headset tracks their real
        movement.
      </Callout>

      <p>
        When the trainee is ready and the manikin is online, start the session and move on to{" "}
        <Link href="/xr/running-a-session">Running a Session</Link>.
      </p>
    </DocArticle>
  );
}
