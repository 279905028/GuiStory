import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "f795b8a5df414f7f42b5a8e33303ad7d",
  worker: {
    "name": "cjb-rain",
    "compatibilityDate": "2026-10-20",
    "workersDev": true,
    "domains": ["galagame.site"],
    "previewUrls": false,
    "observability": {
      "enabled": true
    }
  }
});
