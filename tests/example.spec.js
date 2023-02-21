// @ts-check
const { test, expect } = require("@playwright/test");

const LOCALHOST_URL = "http://localhost:5173/";

test("app shows random fact and images", async ({ page }) => {
  await page.goto(LOCALHOST_URL);
});
