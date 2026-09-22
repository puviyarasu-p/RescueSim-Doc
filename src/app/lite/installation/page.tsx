import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure, FigureRow } from "@/components/Figure";

export default function LiteInstallationPage() {
  return (
    <DocArticle href="/lite/installation" title="Install RescueSIM Lite">
      <p>
        Installing RescueSIM Lite is a two-stage process: you first install the small{" "}
        <strong>Launcher</strong>, and the Launcher then downloads and installs the full
        RescueSim application for you.
      </p>

      <h2>Step 1 — Download the RescueSim Lite Launcher</h2>
      <p>
        Download the RescueSim Lite Launcher provided by your organization (see{" "}
        <Link href="/downloads">Software Downloads</Link>). Once the download completes, open
        the installer file to begin setup.
      </p>

      <h2>Step 2 — Accept the License Agreement</h2>
      <p>
        The RescueSim Lite Setup Wizard opens. Read the RescueSim Lite License Agreement,
        select <strong>&quot;I accept the agreement&quot;</strong>, then click{" "}
        <strong>Next</strong>.
      </p>
      <FigureRow>
        <Figure
          src="/images/docs/license-agreement-not-accepted.png"
          alt="License agreement screen with I do not accept selected by default"
          caption='License Agreement screen — "I do not accept" is selected by default'
        />
        <Figure
          src="/images/docs/license-agreement-accepted.png"
          alt="License agreement screen with I accept the agreement selected"
          caption='Select "I accept the agreement" to enable Next'
        />
      </FigureRow>

      <h2>Step 3 — Enter the Installation Password</h2>
      <p>If the installer asks for a password, enter the installation password provided by AllReal, then click <strong>Next</strong>.</p>
      <Figure
        src="/images/docs/installer-password-screen.png"
        alt="Installer password screen"
        caption="Password screen — passwords are case-sensitive"
      />
      <Callout type="note">
        The installation password only authorizes the software installation. It is different
        from your RescueSim <Link href="/lite/activation">license key</Link>.
      </Callout>

      <h2>Step 4 — Select Additional Tasks</h2>
      <p>
        The installer asks whether to create additional shortcuts. Keep{" "}
        <strong>&quot;Create a desktop shortcut&quot;</strong> selected, then click{" "}
        <strong>Next</strong>. A RescueSim Lite Launcher shortcut will be created on your
        desktop.
      </p>
      <Figure
        src="/images/docs/select-additional-tasks-desktop-shortcut.png"
        alt="Select Additional Tasks screen with Create a desktop shortcut checked"
        caption='Select Additional Tasks — "Create a desktop shortcut" checked'
      />

      <h2>Step 5 — Install the RescueSim Lite Launcher</h2>
      <p>
        The Setup Wizard shows the Ready to Install screen. Review the settings and click{" "}
        <strong>Install</strong>, then wait for the Launcher to finish installing.
      </p>
      <Figure
        src="/images/docs/ready-to-install-summary.png"
        alt="Ready to Install summary screen"
        caption="Ready to Install — review the summary, then click Install"
      />

      <h2>Step 6 — Finish the Launcher Installation</h2>
      <p>
        Once installation completes, keep <strong>&quot;Launch RescueSim Lite&quot;</strong>{" "}
        selected and click <strong>Finish</strong>. The RescueSim Lite Launcher opens.
      </p>
      <Figure
        src="/images/docs/setup-wizard-finish-launch.png"
        alt="Completing the Setup Wizard screen with Launch RescueSim Lite checked"
        caption='Completing the Setup Wizard — "Launch RescueSimLite" checked'
      />

      <h2>Step 7 — Download and Install the RescueSim App</h2>
      <p>
        When the Launcher opens, it checks whether the latest RescueSim application is
        available. If an update or new installation is available, click{" "}
        <strong>Download &amp; Install</strong> and wait for the download to complete.
        RescueSim Lite opens automatically once installation finishes.
      </p>
      <FigureRow>
        <Figure
          src="/images/docs/update-available-prompt.png"
          alt="Update available prompt in the Launcher"
          caption="Update available prompt"
        />
        <Figure
          src="/images/docs/download-install-progress.png"
          alt="Download and install progress in the Launcher"
          caption="Download & Install in progress"
        />
      </FigureRow>
      <Callout type="note">
        The download and installation may take a few minutes depending on your internet
        connection.
      </Callout>

      <h2>Software Updates</h2>
      <p>
        If a new version becomes available later, RescueSim Lite notifies you the next time
        you launch the application. Select <strong>Download &amp; Install</strong> to get the
        latest version — RescueSim Lite is ready to use again as soon as the update
        completes.
      </p>

      <p>
        Installation complete — you&apos;re now ready to{" "}
        <Link href="/manikin-setup">connect your manikin</Link> and{" "}
        <Link href="/lite/activation">activate RescueSIM Lite</Link>.
      </p>
    </DocArticle>
  );
}
