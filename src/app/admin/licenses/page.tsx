import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure, FigureRow } from "@/components/Figure";

export default function AdminLicensesPage() {
  return (
    <DocArticle
      href="/admin/licenses"
      eyebrow="Where activation codes are created"
      title="Licenses & Activation Codes"
    >
      <p>
        Every RescueSIM Lite and RescueSIM XR device is unlocked with an{" "}
        <strong>activation / license key</strong>. Keys are created and managed in the Admin
        Panel, on the <strong>My Licenses</strong> page.
      </p>

      <Callout type="tip">
        Navigate to it from the Admin Panel sidebar: <strong>Managers → My Licenses</strong>.
        This is the activation creation area referenced from both the{" "}
        <Link href="/lite/activation">RescueSIM Lite</Link> and{" "}
        <Link href="/xr/activation">RescueSIM XR</Link> activation screens.
      </Callout>

      <Figure
        src="/images/docs/my-licenses-empty.png"
        alt="My Licenses page before any devices are provisioned"
        caption="My Licenses — before any devices are provisioned"
      />

      <h2>Generating a new activation code</h2>
      <ol>
        <li>Open the Admin Panel and go to <strong>My Licenses</strong>.</li>
        <li>Select <strong>Generate License</strong>.</li>
        <li>
          Enter a <strong>Device Name</strong> — a name used to identify the training device,
          e.g. <code>TrainingDevice_01</code>.
        </li>
        <li>
          Set <strong>Device Type</strong> to <strong>PC</strong> (for RescueSIM Lite) or{" "}
          <strong>Quest</strong> (for RescueSIM XR).
        </li>
        <li>Select <strong>Generate License</strong> again to confirm.</li>
      </ol>
      <p>
        The system generates a unique license key, for example: <code>RSIM-310EC572-C13C</code>.
        Enter this key on the corresponding device&apos;s activation screen to activate it —
        see <Link href="/lite/activation">Lite activation</Link> or{" "}
        <Link href="/xr/activation">XR activation</Link>.
      </p>

      <FigureRow>
        <Figure
          src="/images/docs/generate-device-license-pc-quest.png"
          alt="Generate Device License dialog with PC or Quest device type options"
          caption="Generate Device License — choosing PC or Quest"
        />
        <Figure
          src="/images/docs/license-device-named-pc.png"
          alt="Device named and type set to PC, ready to generate"
          caption="Device named, type set to PC, ready to generate"
        />
      </FigureRow>
      <Figure
        src="/images/docs/license-key-generated.png"
        alt="License key generated, ready to enter on the device"
        caption="License key generated — enter this on the device to activate it"
      />

      <h2>License Status</h2>
      <ul>
        <li><strong>Available</strong> — the license has been created but is not activated.</li>
        <li><strong>Activated</strong> — the license is currently associated with a device.</li>
        <li>Other statuses can appear depending on the license lifecycle.</li>
      </ul>

      <Callout type="note">
        Generating a license consumes one <strong>Device Credit</strong> from your
        organization&apos;s plan — see{" "}
        <Link href="/admin/dashboard">Dashboard → Available Credits</Link>.
      </Callout>
    </DocArticle>
  );
}
