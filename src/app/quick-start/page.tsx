import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function QuickStartPage() {
  return (
    <DocArticle href="/quick-start" title="Quick Start">
      <p>
        RescueSim comes in two variants that share the same manikin, the same Wi-Fi setup,
        and the same underlying performance engine. Pick the variant you&apos;re setting up
        and follow its path below.
      </p>

      <h2>Before you start</h2>
      <ul>
        <li>A RescueSim CPR manikin, charged and powered on.</li>
        <li>The Wi-Fi network name and password for your training location.</li>
        <li>
          A device license / activation key from your organization&apos;s Admin Panel (see{" "}
          <Link href="/admin/licenses">Licenses &amp; Activation Codes</Link>).
        </li>
        <li>A Windows PC (for Lite) or a Meta Quest headset (for XR).</li>
      </ul>

      <h2>Path A — RescueSIM Lite (PC)</h2>
      <p>For instructor-led training centers, hospitals, and classrooms:</p>
      <ol>
        <li><Link href="/downloads">Download the RescueSim Lite Launcher</Link></li>
        <li><Link href="/lite/installation">Install RescueSIM Lite</Link></li>
        <li><Link href="/manikin-setup">Connect the manikin to Wi-Fi</Link></li>
        <li><Link href="/lite/activation">Activate with a License Key</Link></li>
        <li><Link href="/lite/trainer-quick-start">Run your first training session</Link></li>
      </ol>

      <h2>Path B — RescueSIM XR (VR)</h2>
      <p>For immersive, scenario-based training with a Meta Quest headset:</p>
      <ol>
        <li><Link href="/downloads">Get the RescueSIM XR app</Link></li>
        <li><Link href="/xr/setup">Set up the Quest headset</Link></li>
        <li><Link href="/manikin-setup">Connect the manikin to Wi-Fi</Link></li>
        <li><Link href="/xr/activation">Activate with a License Key</Link></li>
        <li><Link href="/xr/trainer-quick-start">Run your first training session</Link></li>
      </ol>

      <Callout type="note">
        Both variants read from the same trainee roster and license pool. Anything you set up
        in the <Link href="/admin/login">Admin Panel</Link> — members, licenses, sessions —
        applies to Lite and XR alike.
      </Callout>
    </DocArticle>
  );
}
