import Link from "next/link";
import { DocArticle } from "@/components/DocArticle";

export default function LiteOverviewPage() {
  return (
    <DocArticle href="/lite/overview" title="RescueSIM Lite Overview">
      <p>
        <strong>RescueSIM Lite</strong> is instructor-led CPR training with real-time
        performance monitoring, run from a Windows PC. It&apos;s designed for training
        centers, hospitals, educational institutions, and professional CPR instructors.
      </p>
      <p>
        An instructor uses a laptop or desktop to manage the training session while trainees
        practice CPR on connected manikins.
      </p>

      <h2>What instructors can do</h2>
      <ul>
        <li>Create and manage training sessions</li>
        <li>Connect and monitor multiple manikins at once</li>
        <li>Track trainee performance in real time</li>
        <li>View scores and session results</li>
        <li>Review performance and provide feedback</li>
      </ul>

      <p>
        <strong>Simple setup. Real-time feedback. Better CPR training.</strong>
      </p>

      <h2>Get started</h2>
      <ol>
        <li><Link href="/downloads">Download the RescueSim Lite Launcher</Link></li>
        <li><Link href="/lite/installation">Install RescueSIM Lite</Link></li>
        <li><Link href="/manikin-setup">Connect the manikin to Wi-Fi</Link></li>
        <li><Link href="/lite/activation">Activate with a License Key</Link></li>
        <li><Link href="/lite/trainer-quick-start">Run your first training session</Link></li>
      </ol>
    </DocArticle>
  );
}
