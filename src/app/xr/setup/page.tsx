import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function XrSetupPage() {
  return (
    <DocArticle href="/xr/setup" title="Set Up the Quest Headset">
      <p>
        RescueSIM XR runs on a Meta Quest headset. Set up the headset once per device, then
        connect it to the same Wi-Fi network as your manikin.
      </p>

      <h2>Step 1 — Set up the headset</h2>
      <p>
        Power on the Meta Quest and complete Meta&apos;s standard headset setup (or confirm
        it&apos;s already signed in with the account your organization uses for training
        devices).
      </p>

      <h2>Step 2 — Install RescueSIM XR</h2>
      <p>
        Install the RescueSIM XR app from the source your organization uses to distribute it
        — the Meta Quest Store / App Lab listing, or a direct install pushed by your
        organization&apos;s IT team. See <Link href="/downloads">Software Downloads</Link> if
        you&apos;re not sure which applies to you.
      </p>

      <h2>Step 3 — Connect the headset to Wi-Fi</h2>
      <p>
        The headset needs to be on the <strong>same Wi-Fi network as the manikin</strong>.
        Connect it from the Quest&apos;s Wi-Fi settings the same way you&apos;d connect any
        Quest app to a network.
      </p>

      <h2>Step 4 — Connect the manikin</h2>
      <p>
        Follow the shared <Link href="/manikin-setup">Manikin Wi-Fi Setup</Link> guide to put
        the manikin on the same network. Once both the headset and the manikin are on the
        same Wi-Fi, the manikin will appear automatically inside RescueSIM XR within a few
        seconds.
      </p>

      <Callout type="tip">
        Set up the manikin&apos;s Wi-Fi first, then power on the headset — that way RescueSIM
        XR can find the manikin as soon as the app opens.
      </Callout>

      <p>
        Ready for the license key? Continue to{" "}
        <Link href="/xr/activation">Activate with a License Key</Link>.
      </p>
    </DocArticle>
  );
}
