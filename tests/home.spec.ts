/* eslint-disable testing-library/prefer-screen-queries */
import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("should pass axe accessibility tests", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const results = await new AxeBuilder({ page }).analyze();

  expect(results.violations).toHaveLength(0);
});

test("should display the home page with the page title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle(
    "Full-stack JavaScript Developer - Ryan Elliott-Potter"
  );
});

test("should display the hierarchy of headings", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const primaryHeadings = await page
    .getByRole("heading", {
      level: 1,
    })
    .allTextContents();

  const secondaryHeadings = await page
    .getByRole("heading", { level: 2 })
    .allTextContents();

  const headings = [...primaryHeadings, ...secondaryHeadings];

  expect(headings).toStrictEqual([
    "Ryan Elliott-Potter",
    "About me",
    "Technology",
    "Personal projects",
    "Work experience",
    "Contact me",
  ]);
});
