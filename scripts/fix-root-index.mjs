// Post-build fix: the static route handler at src/app/route.ts (the `/` ->
// `/en/` meta-refresh redirect) is emitted as `out/index` without a file
// extension. Static hosts expect `out/index.html`, so rename it.
import { existsSync, renameSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const src = join(outDir, "index");
const dest = join(outDir, "index.html");

if (existsSync(src)) {
  renameSync(src, dest);
  console.log("fix-root-index: renamed out/index -> out/index.html");
} else {
  console.log("fix-root-index: nothing to do");
}
