// Actual pixel dimensions of every image in /public/images/docs,
// so <Figure> can render each screenshot at its real aspect ratio
// instead of stretching everything to one fixed box.
export const imageSizes: Record<string, { width: number; height: number }> = {
  "admin-dashboard-empty.png": { width: 1898, height: 916 },
  "admin-login-screen.png": { width: 1915, height: 917 },
  "cpr-session-report-full.png": { width: 1913, height: 916 },
  "device-setup-panel-manikin-online.png": { width: 1919, height: 1079 },
  "download-install-progress.png": { width: 993, height: 622 },
  "generate-device-license-pc-quest.png": { width: 1913, height: 908 },
  "guided-step-check-responsiveness.png": { width: 1919, height: 1079 },
  "hero-cpr-manikin-vr.jpg": { width: 1279, height: 720 },
  "installer-password-screen.png": { width: 596, height: 432 },
  "language-dropdown.png": { width: 1919, height: 1079 },
  "license-agreement-accepted.png": { width: 596, height: 432 },
  "license-agreement-not-accepted.png": { width: 596, height: 432 },
  "license-device-named-pc.png": { width: 1915, height: 918 },
  "license-key-generated.png": { width: 1919, height: 916 },
  "lite-activation-screen.png": { width: 1573, height: 882 },
  "member-active-list.png": { width: 1902, height: 915 },
  "mid-session-cpm-depth.png": { width: 1919, height: 1079 },
  "my-licenses-empty.png": { width: 1902, height: 917 },
  "my-members-empty.png": { width: 1900, height: 916 },
  "my-organization-limits.png": { width: 1908, height: 871 },
  "my-sessions-list.png": { width: 1900, height: 914 },
  "new-member-form.png": { width: 1914, height: 915 },
  "ready-to-install-summary.png": { width: 596, height: 432 },
  "results-panel-score-failed.png": { width: 1919, height: 1079 },
  "select-additional-tasks-desktop-shortcut.png": { width: 596, height: 432 },
  "session-row-menu-actions.png": { width: 1574, height: 573 },
  "session-start-no-compressions.png": { width: 1919, height: 1079 },
  "settings-panel-civic-hcp.png": { width: 1918, height: 1079 },
  "setup-wizard-finish-launch.png": { width: 596, height: 432 },
  "trainee-pin-resolved.png": { width: 1919, height: 1079 },
  "training-category-dropdown-start.png": { width: 1919, height: 1079 },
  "training-pin-generated.png": { width: 1909, height: 911 },
  "update-available-prompt.png": { width: 942, height: 552 },
  "wifi-list-manikin-network.png": { width: 375, height: 479 },
  "wifi-select-network-password.png": { width: 1915, height: 616 },
  "wifimanager-landing-configure-wifi.png": { width: 390, height: 510 },
};

export function getImageSize(src: string): { width: number; height: number } {
  const filename = src.split("/").pop() ?? "";
  return imageSizes[filename] ?? { width: 960, height: 600 };
}
