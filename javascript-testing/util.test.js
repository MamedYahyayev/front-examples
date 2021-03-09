const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Samir", 22);

  expect(text).toBe("Samir (22 years old)");
});

test("should generate valid test output", () => {
  const text = checkAndGenerate("Samir", 22);

  expect(text).toBe("Samir (22 years old)");
});

test("should click around", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("file:///D:/FrontExamples/javascript-testing/index.html");
  await page.click("input#name");
  await page.type("input#name", "Samir");

  await page.click("input#age");
  await page.type("input#age", "22");

  await page.click("#btnAddUser");

  const finalText = await page.$eval(".user-item", (el) => el.textContent);
  expect(finalText).toBe("Samir (22 years old)");
}, 10000);
