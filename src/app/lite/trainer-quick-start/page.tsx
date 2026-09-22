import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure } from "@/components/Figure";

export default function LiteTrainerQuickStartPage() {
  return (
    <DocArticle href="/lite/trainer-quick-start" title="Trainer Quick Start">
      <p>
        A panel-by-panel guide for instructors running a live RescueSim session, from
        connecting manikins through to starting the session.
      </p>

      <h2>Device Setup Panel</h2>
      <p>
        When RescueSIM Lite opens, you&apos;ll see the Device Setup screen. This is where you
        prepare manikins and trainees before starting a session.
      </p>
      <ul>
        <li><strong>Power on the manikins</strong> — each available manikin appears as a device card in the application.</li>
        <li><strong>Check the device status</strong> — make sure the manikin shows <strong>ONLINE</strong> before selecting it.</li>
        <li><strong>Assign a trainee</strong> — enter either a Trainee PIN (registered trainee) or a Guest Name (guest trainee).</li>
        <li><strong>Select the manikin</strong> — once the trainee is assigned, select the device card.</li>
      </ul>
      <Figure
        src="/images/docs/device-setup-panel-manikin-online.png"
        alt="Device Setup panel showing an online manikin with a guest trainee assigned"
        caption="Device Setup panel — an online manikin (Manikin #106) with a guest trainee assigned and selected"
      />
      <Callout type="tip">
        You can run multiple manikins in the same session. Each manikin can have its own
        trainee.
      </Callout>

      <h2>Trainee Assignment</h2>
      <p>Each manikin card displays the trainee information.</p>
      <ul>
        <li>
          <strong>Registered trainee</strong> — enter the trainee&apos;s PIN. RescueSim checks
          eligibility automatically and flags it before the session starts if the trainee
          isn&apos;t eligible.
        </li>
        <li>
          <strong>Guest trainee</strong> — simply enter the guest&apos;s name; no PIN needed.
        </li>
      </ul>
      <Figure
        src="/images/docs/trainee-pin-resolved.png"
        alt="A valid trainee PIN resolving to a registered trainee name"
        caption='A valid PIN (TTV17C) resolved automatically to the registered trainee "TestUser"'
      />

      <h2>Top Navigation Bar</h2>
      <p>The top-right area provides quick access to common controls.</p>
      <ul>
        <li><strong>Language</strong> — switch the application language (English, Tamil, Hindi).</li>
        <li><strong>Settings</strong> — configure training preferences.</li>
        <li><strong>Quit</strong> — close the RescueSim application.</li>
      </ul>
      <Figure
        src="/images/docs/language-dropdown.png"
        alt="Language dropdown showing English, Tamil, and Hindi"
        caption="Language dropdown open, showing English / Tamil / Hindi"
      />
      <Callout type="important">
        Do not use Quit to stop an active training session if you need the session result to
        be recorded.
      </Callout>

      <h2>Settings Panel</h2>
      <p>Configure the training experience before starting.</p>
      <ul>
        <li>
          <strong>Training Mode</strong> — choose <strong>Civic</strong> or{" "}
          <strong>HCP</strong> depending on the type of session. See{" "}
          <Link href="/training-modes">CPR Training Modes</Link>.
        </li>
        <li>
          <strong>Training Parameters</strong> — depending on the mode, configure things like
          compression interval, breathing check duration, and audio feedback.
        </li>
      </ul>
      <p>After making changes: <strong>Save</strong> applies the new settings, <strong>Cancel</strong> discards changes, and <strong>Reset</strong> restores the defaults.</p>
      <Figure
        src="/images/docs/settings-panel-civic-hcp.png"
        alt="Settings panel with Civic and HCP mode options and sliders"
        caption="Settings panel — Civic / HCP mode with Compression Interval and Breathing Check Duration sliders"
      />
      <Callout type="tip">Recommended flow: Settings → Select Mode → Adjust Parameters → Save → Close.</Callout>

      <h2>Starting the Session</h2>
      <p>Before starting, check that:</p>
      <ul>
        <li>All required manikins are ONLINE</li>
        <li>Each manikin has a trainee assigned</li>
        <li>Trainee eligibility is confirmed</li>
        <li>The correct training mode is selected</li>
      </ul>
      <p>When everything is ready, click <strong>START</strong>.</p>
      <Figure
        src="/images/docs/training-category-dropdown-start.png"
        alt="Training category dropdown next to the START button"
        caption="Training category dropdown (Civic / HCP) next to the START button on the Device Setup screen"
      />

      <h2>Guided CPR Steps (optional)</h2>
      <p>
        If the selected mode includes guided instructional steps, RescueSim walks the trainee
        through the scenario before or during live monitoring. Each step pairs an
        illustration with instructions, and the trainer can go <strong>Back</strong>, skip
        ahead with <strong>Next</strong>, or let it auto-advance with the Skip timer.
      </p>
      <Figure
        src="/images/docs/guided-step-check-responsiveness.png"
        alt="Guided CPR step showing Check Responsiveness instructions"
        caption='Example guided step — "Check Responsiveness (5–10 secs)" with illustration and instructions'
      />
    </DocArticle>
  );
}
