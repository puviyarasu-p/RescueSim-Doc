import { DocArticle } from "@/components/DocArticle";
import { Figure } from "@/components/Figure";

export default function AdminOrganizationPage() {
  return (
    <DocArticle href="/admin/organization" title="Admin Panel — Organization & Limits">
      <p>
        The <strong>Account</strong> page shows your organization&apos;s own profile — its
        registered details and the credit limits remaining on your plan — in the same
        summary format as the Dashboard.
      </p>
      <Figure
        src="/images/docs/my-organization-limits.png"
        alt="My Organization page showing About details and Available Limits"
        caption="My Organization — About details and Available Limits (Device, User, and Session credits)"
      />
    </DocArticle>
  );
}
