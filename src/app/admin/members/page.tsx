import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure, FigureRow } from "@/components/Figure";

export default function AdminMembersPage() {
  return (
    <DocArticle href="/admin/members" title="Admin Panel — Members & Trainees">
      <p>
        The <strong>My Members</strong> page is where the organization administrator creates
        and manages trainees.
      </p>
      <Figure
        src="/images/docs/my-members-empty.png"
        alt="My Members page before any trainees are added"
        caption="My Members — before any trainees are added"
      />

      <h2>Creating a member</h2>
      <p>
        Select <strong>New Member</strong> and enter:
      </p>
      <ul>
        <li><strong>Name</strong> — trainee&apos;s name</li>
        <li><strong>Age</strong> — trainee&apos;s age</li>
        <li><strong>Email</strong> — trainee&apos;s email address</li>
        <li><strong>Phone</strong> — trainee&apos;s contact number</li>
      </ul>
      <p>
        After selecting <strong>Create</strong>, the system generates a unique{" "}
        <strong>Training PIN</strong> — for example, <code>T4AARP</code>. Share this PIN with
        the trainee; it&apos;s what they (or the trainer, on their behalf) enter on the
        training device to start a session.
      </p>

      <FigureRow>
        <Figure src="/images/docs/new-member-form.png" alt="New Member form" caption="New Member form" />
        <Figure
          src="/images/docs/training-pin-generated.png"
          alt="Training PIN generated for the new member"
          caption="Training PIN generated — share this with the trainee"
        />
      </FigureRow>
      <Figure
        src="/images/docs/member-active-list.png"
        alt="Member now appearing in the list with Active status"
        caption="Member now appears in the list, with status Active"
      />

      <Callout type="important">
        The trainee does not need to log into the Admin Panel. The PIN is used on the
        training device — RescueSIM Lite or RescueSIM XR — to start a training session.
      </Callout>

      <p>
        Ready to license a device for this trainee to train on?{" "}
        <Link href="/admin/licenses">Licenses &amp; Activation Codes</Link>.
      </p>
    </DocArticle>
  );
}
