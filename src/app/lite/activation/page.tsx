import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";

export default function LiteActivationPage() {
  return (
    <DocArticle href="/lite/activation" title="Activate RescueSIM Lite with a License Key">
      <p>
        When you open RescueSIM Lite for the first time, you&apos;ll be asked to enter a{" "}
        <strong>License Key</strong>.
      </p>

      <h2>Where do I get the License Key?</h2>
      <p>
        The license key is generated and managed through the RescueSim Admin Panel, on the{" "}
        <Link href="/admin/licenses">My Licenses</Link> page.
      </p>
      <ol>
        <li>Open the RescueSim Admin Panel.</li>
        <li>
          Go to <strong>My Licenses</strong> and generate a device license for your
          organization / device — set <strong>Device Type</strong> to <strong>PC</strong>.
          You&apos;ll need available credits to generate one.
        </li>
        <li>Copy the license key.</li>
        <li>Open RescueSIM Lite on the PC.</li>
        <li>Enter the license key on the activation screen.</li>
        <li>Click <strong>Submit</strong>.</li>
      </ol>

      <Figure
        src="/images/docs/lite-activation-screen.png"
        alt="RescueSim Lite activation screen with a field to enter the license key"
        caption="RescueSim Lite activation screen — enter the license/activation code and Submit"
      />

      <Callout type="note">
        Full walkthrough of creating the key itself:{" "}
        <Link href="/admin/licenses">Admin Panel → Licenses &amp; Activation Codes</Link>.
      </Callout>
    </DocArticle>
  );
}
