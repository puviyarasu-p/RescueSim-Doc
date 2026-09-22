import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function DownloadsPage() {
  return (
    <DocArticle href="/downloads" title="Software Downloads">
      <p>
        RescueSim has three separate pieces of software. Use the table below to find the
        right one and where it comes from before you start installing.
      </p>

      <table>
        <thead>
          <tr>
            <th>Software</th>
            <th>Runs on</th>
            <th>Where to get it</th>
            <th>Guide</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>RescueSim Lite Launcher</strong></td>
            <td>Windows PC</td>
            <td>Provided by your organization as an installer file (.exe)</td>
            <td><Link href="/lite/installation">Install RescueSIM Lite</Link></td>
          </tr>
          <tr>
            <td><strong>RescueSIM XR</strong></td>
            <td>Meta Quest headset</td>
            <td>Meta Quest Store / App Lab listing, or sideloaded by your organization</td>
            <td><Link href="/xr/setup">Set up the Quest headset</Link></td>
          </tr>
          <tr>
            <td><strong>RescueSim Admin Panel (Allreal)</strong></td>
            <td>Any web browser</td>
            <td>No install — sign in at the URL your organization gave you</td>
            <td><Link href="/admin/login">Logging In</Link></td>
          </tr>
        </tbody>
      </table>

      <h2>RescueSim Lite Launcher</h2>
      <p>
        The Launcher is a small installer that keeps the full RescueSim Lite application up
        to date. Download the Launcher file your organization sent you, then run it — the
        Launcher will download and install the current RescueSim Lite application
        automatically on first run, and will offer updates every time a new version is
        available.
      </p>
      <p>
        Step-by-step instructions: <Link href="/lite/installation">Install RescueSIM Lite</Link>.
      </p>

      <h2>RescueSIM XR</h2>
      <p>
        RescueSIM XR runs directly on a Meta Quest headset. Depending on how your
        organization distributes it, you&apos;ll either install it from the Meta Quest Store
        / App Lab, or have it pushed to the headset directly by your organization&apos;s IT
        team.
      </p>
      <p>
        Step-by-step instructions: <Link href="/xr/setup">Set Up the Quest Headset</Link>.
      </p>

      <h2>Admin Panel (Allreal)</h2>
      <p>
        The Admin Panel is a web-based dashboard — there is nothing to download or install.
        Open it in a browser on any PC, tablet, or phone and sign in with the organization
        email and password provided to you. This is also where you{" "}
        <Link href="/admin/licenses">generate activation / license codes</Link> for both Lite
        and XR devices.
      </p>

      <Callout type="note">
        Installer files, headset app links, and the Admin Panel URL are distributed by your
        organization&apos;s RescueSim administrator. If you don&apos;t have one of these yet,
        contact your administrator rather than searching for it online.
      </Callout>
    </DocArticle>
  );
}
