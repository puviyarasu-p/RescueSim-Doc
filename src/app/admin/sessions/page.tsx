import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Figure } from "@/components/Figure";

export default function AdminSessionsPage() {
  return (
    <DocArticle href="/admin/sessions" title="Admin Panel — Sessions">
      <p>
        The <strong>My Sessions</strong> page lists the organization&apos;s recorded CPR
        training sessions, from both RescueSIM Lite and RescueSIM XR.
      </p>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Member</td>
            <td>Trainee who performed the session</td>
          </tr>
          <tr>
            <td>Mode</td>
            <td>Type of training session</td>
          </tr>
          <tr>
            <td>Device</td>
            <td>Device used for training</td>
          </tr>
          <tr>
            <td>Summary</td>
            <td>Compression count and session result</td>
          </tr>
          <tr>
            <td>Recorded</td>
            <td>Date and time the session was recorded</td>
          </tr>
        </tbody>
      </table>

      <Figure
        src="/images/docs/my-sessions-list.png"
        alt="My Sessions page listing recorded training sessions across all devices"
        caption="My Sessions — recorded training sessions across all devices"
      />

      <h2>The three-dot menu</h2>
      <ul>
        <li><strong>View</strong> — open the detailed <Link href="/admin/session-report">CPR Session Report</Link>.</li>
        <li><strong>Download PDF</strong> — export the session report.</li>
        <li><strong>Delete</strong> — remove the recorded session.</li>
      </ul>
      <Figure
        src="/images/docs/session-row-menu-actions.png"
        alt="Three-dot menu with View, Download PDF, and Delete options"
        caption="Three-dot menu — View, Download PDF, or Delete a session"
      />
    </DocArticle>
  );
}
