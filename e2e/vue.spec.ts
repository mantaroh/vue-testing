import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test("アプリトップ表示", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#left-allow")).toHaveText(
    "←"
  );
});
