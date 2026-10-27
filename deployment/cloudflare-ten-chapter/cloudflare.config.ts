import { defineConfig } from "cf/config";

// v1.1 项目隔离：下方旧参数仅供历史参考。
throw new Error("v1.1 尚未配置独立发布目标，旧发布入口已停用。请参阅 deployment/README.md。");

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
