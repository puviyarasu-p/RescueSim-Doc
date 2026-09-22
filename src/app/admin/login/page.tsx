import { DocArticle } from "@/components/DocArticle";
import { Figure } from "@/components/Figure";

export default function AdminLoginPage() {
  return (
    <DocArticle href="/admin/login" title="Admin Panel — Logging In">
      <p>
        The RescueSim <strong>Admin Panel</strong> (&quot;Allreal&quot;) is a separate,
        web-based dashboard used to manage your organization&apos;s members, device licenses,
        and recorded CPR sessions. It works in any browser — nothing to install.
      </p>
      <p>
        Sign in with the organization email and password provided to you by your RescueSim
        administrator.
      </p>
      <Figure
        src="/images/docs/admin-login-screen.png"
        alt="Admin Panel login screen"
        caption="Admin Panel login screen"
      />
    </DocArticle>
  );
}
