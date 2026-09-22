import { DocArticle } from "@/components/DocArticle";
import { Figure } from "@/components/Figure";

export default function AdminDashboardPage() {
  return (
    <DocArticle href="/admin/dashboard" title="Admin Panel — Dashboard">
      <p>
        The Dashboard is the landing page after logging into the Admin Panel. It gives a
        quick overview of your organization&apos;s training activity, usage, and available
        resources.
      </p>

      <h2>What you&apos;ll see</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Members</td>
            <td>Number of trainees registered in your organization.</td>
          </tr>
          <tr>
            <td>Total Licenses</td>
            <td>Number of device licenses provisioned for the organization.</td>
          </tr>
          <tr>
            <td>Total Sessions</td>
            <td>Number of CPR training sessions recorded.</td>
          </tr>
        </tbody>
      </table>

      <h2>Available Credits</h2>
      <table>
        <thead>
          <tr>
            <th>Credit</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Member Credits</td>
            <td>Number of additional members that can be registered.</td>
          </tr>
          <tr>
            <td>Device Credits</td>
            <td>Number of additional device licenses that can be created.</td>
          </tr>
          <tr>
            <td>Session Credits</td>
            <td>Number of training sessions remaining.</td>
          </tr>
        </tbody>
      </table>
      <p>The available credit count decreases as the corresponding resource is used.</p>

      <Figure
        src="/images/docs/admin-dashboard-empty.png"
        alt="Admin Panel dashboard on a new organization with no activity yet"
        caption="Dashboard on a brand-new organization — no members, licenses, or sessions recorded yet"
      />
    </DocArticle>
  );
}
