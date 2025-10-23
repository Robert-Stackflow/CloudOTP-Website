import 'dotenv/config';
import { algoliasearch } from "algoliasearch";
import { sync, DocumentRecord } from "fumadocs-core/search/algolia";
import * as fs from "node:fs";

const filePath = {
  next: ".next/server/app/static.json.body",
  "tanstack-start": ".output/public/static.json",
  "react-router": "build/client/static.json",
  waku: "dist/public/static.json",
}["next"];

const content = fs.readFileSync(filePath);
const records = JSON.parse(content.toString()) as DocumentRecord[];

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX = process.env.ALGOLIA_INDEX_NAME ?? "document";

if (!ALGOLIA_APP_ID || !ALGOLIA_API_KEY) {
  console.error(
    "❌ 缺少 Algolia 环境变量，请设置：ALGOLIA_APP_ID 和 ALGOLIA_API_KEY"
  );
  process.exit(1);
}

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

await sync(client, {
  indexName: ALGOLIA_INDEX,
  documents: records,
});

console.log(`已成功同步到 Algolia 索引：${ALGOLIA_INDEX}`);
