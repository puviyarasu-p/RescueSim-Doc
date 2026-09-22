import { DocArticle } from "@/components/DocArticle";
import { Callout } from "@/components/Callout";
import { Figure, FigureRow } from "@/components/Figure";

export default function ManikinSetupPage() {
  return (
    <DocArticle
      href="/manikin-setup"
      eyebrow="Common to RescueSIM Lite and RescueSIM XR"
      title="Connecting the Manikin to Wi-Fi"
    >
      <p>
        Before you can train, the manikin needs to be on the <strong>same Wi-Fi network</strong>{" "}
        as the PC app or the VR headset. This setup is identical for RescueSIM Lite and
        RescueSIM XR — do it once per manikin, or any time you move it to a new location or
        network.
      </p>

      <ol>
        <li>
          <strong>Power on the manikin.</strong> If it has never been set up before (or its
          saved network is no longer available), it will start broadcasting its own temporary
          Wi-Fi network for setup.
        </li>
        <li>
          <strong>Connect to that network</strong> from your phone or laptop. Look for a
          network named <code>CPR_</code> followed by the manikin&apos;s name — for example,{" "}
          <code>CPR_Manikin1</code>.
        </li>
        <li>
          A setup page should open automatically. If it doesn&apos;t, open a browser and go
          to <code>192.168.4.1</code>.
        </li>
        <li>
          Choose your training location&apos;s Wi-Fi network from the list and enter its
          password.
        </li>
        <li>
          Tap <strong>Save</strong>. The manikin reconnects using your Wi-Fi and stops
          broadcasting its own setup network.
        </li>
        <li>
          Open the PC or VR app — the manikin should appear automatically within a few
          seconds once it&apos;s connected.
        </li>
      </ol>

      <FigureRow>
        <Figure
          src="/images/docs/wifi-list-manikin-network.png"
          alt="Phone Wi-Fi list showing the manikin's temporary network"
          caption='Phone&apos;s Wi-Fi list — the manikin&apos;s temporary network "CPR_106" appears, ready to connect'
        />
        <Figure
          src="/images/docs/wifimanager-landing-configure-wifi.png"
          alt="WiFiManager landing page with Configure WiFi button"
          caption="WiFiManager landing page — tap Configure WiFi"
        />
      </FigureRow>
      <Figure
        src="/images/docs/wifi-select-network-password.png"
        alt="Selecting the training location Wi-Fi network and entering its password"
        caption="Choose your training location's Wi-Fi network, enter its password, and Save"
      />

      <Callout type="note">
        The manikin remembers your Wi-Fi network, so you only need to repeat this if you
        change networks, move to a new venue, or the manikin loses its saved settings. If a
        manikin ever drops offline mid-session, it will automatically try to reconnect to the
        last network it used.
      </Callout>
    </DocArticle>
  );
}
