import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function TroubleshootingPage() {
  return (
    <DocArticle href="/troubleshooting" title="Troubleshooting">
      <p>
        Fixes for the issues instructors and admins run into most, grouped by where they show
        up. For quick one-line answers, see the <Link href="/faq">FAQ</Link> instead.
      </p>

      <h2>Manikin & Wi-Fi</h2>

      <h3>The manikin doesn&apos;t appear, or shows as offline</h3>
      <ul>
        <li>Confirm the manikin is powered on.</li>
        <li>
          Confirm it&apos;s on the <strong>same Wi-Fi network</strong> as the PC or headset —
          walk through <Link href="/manikin-setup">Manikin Wi-Fi Setup</Link> again if
          you&apos;re not sure.
        </li>
        <li>
          If the manikin was moved to a new venue, its saved network may no longer be
          reachable — it will start broadcasting its own temporary <code>CPR_</code> network
          again, ready for setup.
        </li>
        <li>
          If it drops offline mid-session, give it a moment — it automatically tries to
          reconnect to the last network it used.
        </li>
      </ul>

      <h3>The Wi-Fi setup page doesn&apos;t open automatically</h3>
      <p>
        After connecting to the manikin&apos;s <code>CPR_</code> network, open a browser and
        go to <code>192.168.4.1</code> directly.
      </p>

      <h2>Installation & activation</h2>

      <h3>The installer is asking for a password I don&apos;t have</h3>
      <p>
        That&apos;s the <strong>installation password</strong>, provided by AllReal to
        authorize the software install — it&apos;s different from your license key. Contact
        your organization&apos;s RescueSim administrator for it.
      </p>

      <h3>The license key won&apos;t activate the app</h3>
      <ul>
        <li>
          Double-check the <strong>Device Type</strong> the key was generated for. A key
          generated for <strong>PC</strong> won&apos;t activate a <strong>Quest</strong>{" "}
          headset, and vice versa — see{" "}
          <Link href="/admin/licenses">Licenses &amp; Activation Codes</Link>.
        </li>
        <li>Make sure you&apos;re entering the license key, not the installation password.</li>
        <li>Check for extra spaces or characters when copying the key from the Admin Panel.</li>
      </ul>

      <h3>Download &amp; Install is stuck or fails</h3>
      <ul>
        <li>Check the device&apos;s internet connection and try again.</li>
        <li>Make sure there&apos;s enough free disk space for the update.</li>
        <li>Close and reopen the Launcher to retry.</li>
      </ul>

      <h2>Running a session</h2>

      <h3>A trainee&apos;s PIN isn&apos;t accepted, or shows as &quot;not eligible&quot;</h3>
      <ul>
        <li>
          Confirm the trainee was created correctly under{" "}
          <Link href="/admin/members">Admin Panel → My Members</Link>, and that the PIN was
          copied exactly.
        </li>
        <li>
          If the trainee isn&apos;t registered yet, use a <strong>Guest Name</strong> instead
          — no PIN needed for guests.
        </li>
      </ul>

      <h3>A session ended but no result was recorded</h3>
      <p>
        This usually means <strong>Quit Session</strong> was used instead of{" "}
        <strong>End Session</strong>. A forced quit may not generate a final result — use End
        Session for normal training, and reserve Quit for abandoning a session early. See{" "}
        <Link href="/lite/running-a-session">Running a Session</Link>.
      </p>

      <Callout type="important">
        Don&apos;t use Quit (or close the app) to stop a session you want recorded — always
        use End Session.
      </Callout>

      <h2>Results & Admin Panel</h2>

      <h3>A session result isn&apos;t showing up in the Admin Panel</h3>
      <p>
        If the device lost connectivity right after a session, RescueSim keeps the result in
        a pending upload queue and automatically retries it the next time the app is opened
        with an internet connection — no manual steps are usually needed. Only dig into the
        pending uploads file if your organization&apos;s support team specifically asks you
        to.
      </p>

      <h3>Generating a license fails, or the option is greyed out</h3>
      <p>
        Generating a license consumes a <strong>Device Credit</strong>. Check your
        organization&apos;s remaining credits on the{" "}
        <Link href="/admin/dashboard">Dashboard</Link> — you&apos;ll need available credit to
        create a new one.
      </p>

      <h3>I can&apos;t find the Admin Panel URL or an installer</h3>
      <p>
        These aren&apos;t publicly listed — they&apos;re distributed directly by your
        organization&apos;s RescueSim administrator. See{" "}
        <Link href="/downloads">Software Downloads</Link> for what each piece of software is,
        then contact your administrator if you still don&apos;t have it.
      </p>

      <p>
        Didn&apos;t find your issue here? Check the <Link href="/faq">FAQ</Link>, or contact
        your organization&apos;s RescueSim administrator.
      </p>
    </DocArticle>
  );
}
