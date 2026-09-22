import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";

export default function TrainingModesPage() {
  return (
    <DocArticle
      href="/training-modes"
      eyebrow="Common to RescueSIM Lite and RescueSIM XR"
      title="CPR Training Modes"
    >
      <p>
        RescueSim offers two training modes. Both are available in RescueSIM Lite and
        RescueSIM XR, and are selected on the Settings panel before starting a session.
      </p>

      <h2>CIVIC Mode</h2>
      <p>
        CIVIC = Citizen / Community CPR. Designed for the general public, students,
        employees, and non-healthcare trainees learning how to respond to a cardiac
        emergency.
      </p>
      <p>The focus is on:</p>
      <ul>
        <li>Recognizing a cardiac emergency</li>
        <li>Starting CPR quickly</li>
        <li>Maintaining an appropriate compression rate</li>
        <li>Achieving adequate compression depth</li>
        <li>Allowing full chest recoil</li>
        <li>Maintaining compressions with minimal unnecessary pauses</li>
        <li>Completing a straightforward CPR scenario</li>
      </ul>
      <Callout type="tip">
        In plain terms: CIVIC Mode develops the basic skills needed to perform effective
        chest compressions during an emergency.
      </Callout>

      <h2>HCP Mode</h2>
      <p>
        HCP = Healthcare Provider. Designed for healthcare professionals and medically
        trained users, providing a more clinical training scenario with greater emphasis on:
      </p>
      <ul>
        <li>CPR technique</li>
        <li>Compression quality</li>
        <li>Compression rate</li>
        <li>Compression depth</li>
        <li>Full chest recoil</li>
        <li>Minimizing interruptions</li>
        <li>Following the configured clinical scenario</li>
        <li>Performance assessment</li>
      </ul>
      <Callout type="tip">
        In plain terms: HCP Mode provides a more advanced CPR assessment focused on accurate
        technique, consistent compressions, and performance within the requirements of the
        configured clinical scenario.
      </Callout>
    </DocArticle>
  );
}
