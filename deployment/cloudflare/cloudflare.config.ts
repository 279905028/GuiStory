import { defineConfig } from "cf/config";

// v1.1 项目隔离：下方旧参数仅供历史参考。
throw new Error("v1.1 尚未配置独立发布目标，旧发布入口已停用。请参阅 deployment/README.md。");

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
