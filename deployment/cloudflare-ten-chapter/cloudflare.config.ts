import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "461ba8ee70c50e430a62dfaf8d9f887e",
  worker: {
    name: "cjb-rain",
    compatibilityDate: "2026-10-20",
    workersDev: true,
    domains: ["galagame.ambd.site"],
    previewUrls: false,
    observability: {
      enabled: true
    }
  }
});
