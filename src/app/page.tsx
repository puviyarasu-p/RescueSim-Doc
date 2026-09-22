import Link from "next/link";
import Image from "next/image";
import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

const hero = (
  <div className="relative mb-6 overflow-hidden rounded-2xl bg-brand-dark ring-1 ring-accent/30">
    <Image
      src="/images/docs/hero-cpr-manikin-vr.jpg"
      alt="RescueSim CPR manikin paired with a Meta Quest headset"
      width={1279}
      height={720}
      priority
      className="h-auto w-full opacity-90"
    />
  </div>
);

export default function HomePage() {
  return (
    <DocArticle href="/" title="RescueSim" hero={hero}>
      <p>
        When a cardiac arrest happens, every second matters. Yet in India, only around{" "}
        <strong>1.3%–9.8%</strong> of cardiac-arrest victims receive CPR from a bystander,
        according to a 2025 communication from India&apos;s Ministry of Health &amp; Family
        Welfare. People may know CPR in theory, but practical training and confidence are
        essential to act when it matters.
      </p>
      <p>
        <strong>RescueSim</strong> closes this gap by pairing a smart CPR manikin with
        PC-based and VR-based training. The system captures key performance parameters
        during practice and gives real-time feedback, helping trainees repeatedly practice,
        understand their performance, and build confidence.
      </p>

      <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="/lite/overview"
          className="group rounded-lg border border-border p-4 no-underline transition-colors hover:border-accent"
        >
          <p className="mb-1.5 text-[15px] font-bold text-accent group-hover:text-accent-hover">
            RescueSIM Lite →
          </p>
          <p className="text-[14.5px] text-muted">
            Instructors run training sessions from a PC and monitor multiple manikins during
            group, classroom, or hospital training.
          </p>
        </Link>
        <Link
          href="/xr/overview"
          className="group rounded-lg border border-border p-4 no-underline transition-colors hover:border-accent"
        >
          <p className="mb-1.5 text-[15px] font-bold text-accent group-hover:text-accent-hover">
            RescueSIM XR →
          </p>
          <p className="text-[14.5px] text-muted">
            Trainees enter immersive emergency scenarios through a Meta Quest headset while
            performing CPR on the same physical manikin.
          </p>
        </Link>
      </div>

      <p>
        Whether training through PC or VR, RescueSim uses the same underlying performance
        system and the same manikin — turning hands-on CPR practice into a measurable,
        repeatable, and engaging training experience.
      </p>

      <p>
        Setting up a manikin for the first time? Both variants share the same{" "}
        <Link href="/manikin-setup">Manikin Wi-Fi Setup</Link> guide.
      </p>

      <Callout type="tip">
        Need installer links or the Admin Panel URL? See{" "}
        <Link href="/downloads">Software Downloads</Link>. Something not working? See{" "}
        <Link href="/troubleshooting">Troubleshooting</Link> or the{" "}
        <Link href="/faq">FAQ</Link>.
      </Callout>
    </DocArticle>
  );
}
