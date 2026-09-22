import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";
import { FaqItem, FaqSection } from "@/components/Faq";

export default function FaqPage() {
  return (
    <DocArticle href="/faq" title="Frequently Asked Questions">
      <p>Quick answers to the questions we hear most often about RescueSim.</p>

      <FaqSection title="Lite vs. XR">
        <FaqItem question="What's the difference between RescueSIM Lite and RescueSIM XR?">
          <p>
            Both run on the same underlying performance engine and the same manikin — the
            difference is the experience. <Link href="/lite/overview">RescueSIM Lite</Link>{" "}
            is a PC app for instructor-led sessions; <Link href="/xr/overview">RescueSIM XR</Link>{" "}
            puts the trainee inside an immersive scenario through a Meta Quest headset.
          </p>
        </FaqItem>
        <FaqItem question="Can I use RescueSIM Lite and RescueSIM XR with the same manikin?">
          <p>
            Yes. The manikin doesn&apos;t care which app it&apos;s talking to — see{" "}
            <Link href="/manikin-setup">Manikin Wi-Fi Setup</Link>.
          </p>
        </FaqItem>
      </FaqSection>

      <FaqSection title="Installation & activation">
        <FaqItem question="What's the difference between the installation password and the license key?">
          <p>
            The <strong>installation password</strong> (provided by AllReal) only unlocks the
            RescueSim Lite installer. The <strong>license key</strong> is a separate code,
            generated in the{" "}
            <Link href="/admin/licenses">Admin Panel → My Licenses</Link>, that activates the
            application itself once it&apos;s installed.
          </p>
        </FaqItem>
        <FaqItem question="Which Device Type do I choose when generating a license — PC or Quest?">
          <p>
            <strong>PC</strong> for a RescueSIM Lite installation, <strong>Quest</strong> for a
            RescueSIM XR headset. Keys aren&apos;t interchangeable between the two — see{" "}
            <Link href="/admin/licenses">Licenses &amp; Activation Codes</Link>.
          </p>
        </FaqItem>
        <FaqItem question="Where do I get the installers or the Admin Panel link?">
          <p>
            From your organization&apos;s RescueSim administrator — see{" "}
            <Link href="/downloads">Software Downloads</Link> for what each piece of software
            is and where it normally comes from.
          </p>
        </FaqItem>
      </FaqSection>

      <FaqSection title="Running a session">
        <FaqItem question="Do trainees need to log into the Admin Panel?">
          <p>
            No. Trainees only need their <strong>Training PIN</strong>, entered directly on
            the training device — see{" "}
            <Link href="/admin/members">Members &amp; Trainees</Link>.
          </p>
        </FaqItem>
        <FaqItem question="Can someone train without being a registered member?">
          <p>
            Yes — enter a <strong>Guest Name</strong> instead of a PIN when assigning the
            trainee. No registration is required for guests.
          </p>
        </FaqItem>
        <FaqItem question="Can I run multiple manikins in the same session?">
          <p>Yes, each manikin can have its own trainee assigned at the same time.</p>
        </FaqItem>
        <FaqItem question="What's the difference between CIVIC and HCP mode?">
          <p>
            CIVIC is for general/community trainees; HCP is a more clinical assessment for
            healthcare professionals. See <Link href="/training-modes">CPR Training Modes</Link>.
          </p>
        </FaqItem>
        <FaqItem question="What happens if I use Quit Session instead of End Session?">
          <p>
            A forced quit means the session may not generate a final result. Always use{" "}
            <strong>End Session</strong> for normal training — Quit is only for abandoning a
            session early.
          </p>
        </FaqItem>
        <FaqItem question="What happens if the manikin loses Wi-Fi mid-session?">
          <p>
            The live assessment doesn&apos;t need continuous network communication, so a brief
            drop shouldn&apos;t interrupt training. The manikin automatically tries to
            reconnect to the last network it used.
          </p>
        </FaqItem>
        <FaqItem question="What counts as a good compression rate?">
          <p>
            The target range is <strong>100–120 CPM</strong> (compressions per minute). Below
            is too slow, above is too fast.
          </p>
        </FaqItem>
      </FaqSection>

      <FaqSection title="Results & data">
        <FaqItem question="A session ran but I can't find the result — what happened?">
          <p>
            If a result didn&apos;t upload immediately, RescueSim keeps it in a pending queue
            and retries automatically the next time the app has network access — no manual
            steps needed. See <Link href="/lite/running-a-session">Running a Session</Link>.
          </p>
        </FaqItem>
        <FaqItem question="Where can I review a trainee's full session report?">
          <p>
            In the Admin Panel, under{" "}
            <Link href="/admin/sessions">My Sessions</Link> — select <strong>View</strong> for
            the full <Link href="/admin/session-report">CPR Session Report</Link>, or{" "}
            <strong>Download PDF</strong> to export it.
          </p>
        </FaqItem>
      </FaqSection>

      <p>
        Still stuck? Check <Link href="/troubleshooting">Troubleshooting</Link> for
        step-by-step fixes.
      </p>
    </DocArticle>
  );
}
