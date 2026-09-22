import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function XrActivationPage() {
  return (
    <DocArticle href="/xr/activation" title="Activate RescueSIM XR with a License Key">
      <p>
        Just like RescueSIM Lite, the first time you open RescueSIM XR on the headset
        you&apos;ll be asked to enter a <strong>License Key</strong>.
      </p>

      <h2>Where do I get the License Key?</h2>
      <p>
        The license key is generated and managed through the RescueSim Admin Panel, on the{" "}
        <Link href="/admin/licenses">My Licenses</Link> page — the same place Lite licenses
        come from.
      </p>
      <ol>
        <li>Open the RescueSim Admin Panel.</li>
        <li>
          Go to <strong>My Licenses</strong> and generate a device license, this time setting{" "}
          <strong>Device Type</strong> to <strong>Quest</strong>. You&apos;ll need available
          credits to generate one.
        </li>
        <li>Copy the license key.</li>
        <li>Open RescueSIM XR on the Quest headset.</li>
        <li>Enter the license key on the activation screen.</li>
        <li>Select <strong>Submit</strong>.</li>
      </ol>

      <Callout type="note">
        License keys are tied to a <strong>Device Type</strong> — a key generated for{" "}
        <strong>PC</strong> won&apos;t activate a Quest headset, and vice versa. Full
        walkthrough of creating the key itself:{" "}
        <Link href="/admin/licenses">Admin Panel → Licenses &amp; Activation Codes</Link>.
      </Callout>
    </DocArticle>
  );
}
