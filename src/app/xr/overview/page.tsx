import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Figure } from "@/components/Figure";

export default function XrOverviewPage() {
  return (
    <DocArticle href="/xr/overview" title="RescueSIM XR Overview">
      <p>
        <strong>RescueSIM XR</strong> puts trainees inside an immersive emergency scenario
        through a <strong>Meta Quest headset</strong>, while they perform CPR on the same
        physical RescueSim manikin used by RescueSIM Lite.
      </p>
      <p>
        It runs on the same underlying performance engine as RescueSIM Lite — compression
        rate, depth, recoil, and scoring are captured and evaluated the same way. What changes
        is the experience: instead of a PC screen, the trainee sees and reacts to a full
        emergency scene in VR while their real-world compressions on the manikin drive the
        scenario.
      </p>

      <Figure
        src="/images/docs/hero-cpr-manikin-vr.jpg"
        alt="A CPR manikin paired with a Meta Quest headset"
        caption="RescueSIM XR pairs a Meta Quest headset with the same CPR manikin used by RescueSIM Lite"
        width={1280}
        height={720}
      />

      <h2>Who it&apos;s for</h2>
      <p>
        Training centers, hospitals, and organizations that want a more immersive, scenario-
        driven training experience — for example, walking a trainee through recognizing a
        collapse, calling for help, and starting CPR inside a realistic emergency
        environment.
      </p>

      <h2>Get started</h2>
      <ol>
        <li><Link href="/downloads">Get the RescueSIM XR app</Link></li>
        <li><Link href="/xr/setup">Set up the Quest headset</Link></li>
        <li><Link href="/manikin-setup">Connect the manikin to Wi-Fi</Link></li>
        <li><Link href="/xr/activation">Activate with a License Key</Link></li>
        <li><Link href="/xr/trainer-quick-start">Run your first training session</Link></li>
      </ol>
    </DocArticle>
  );
}
