import assert from "node:assert/strict";
import { NextRequest } from "next/server.js";
import { proxy } from "../src/proxy.ts";

const homepage = proxy(new NextRequest("http://localhost:3000/?state=awake"));
assert.equal(
  homepage.headers.get("x-middleware-rewrite"),
  "http://localhost:3000/world-door/index.html?state=awake&__wd=1",
  "homepage must rewrite to the internal HTTP target and retain its query",
);
console.log("✓ homepage uses an internal HTTP rewrite");

const rewritten = proxy(new NextRequest(homepage.headers.get("x-middleware-rewrite")));
assert.equal(
  rewritten.headers.get("x-middleware-next"),
  "1",
  "the rewritten request must bypass the legacy URL redirect",
);
console.log("✓ internally rewritten request is allowed through");

const publicHttps = proxy(new NextRequest("https://www.youngsheep.com.cn/?state=awake"));
assert.equal(
  publicHttps.headers.get("x-middleware-rewrite"),
  "http://localhost:3000/world-door/index.html?state=awake&__wd=1",
  "the public HTTPS protocol must not be used for the internal Next.js port",
);
console.log("✓ public HTTPS request still targets internal HTTP");

const legacy = proxy(new NextRequest("https://www.youngsheep.com.cn/world-door?state=awake"));
assert.equal(legacy.status, 308);
assert.equal(legacy.headers.get("location"), "https://www.youngsheep.com.cn/?state=awake");
console.log("✓ legacy world-door URL redirects once to the clean root URL");
