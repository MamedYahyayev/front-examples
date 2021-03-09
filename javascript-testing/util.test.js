const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Samir", 22);

  expect(text).toBe("Samir (22 years old)");
});

test("should generate valid test output", () => {
  const text = checkAndGenerate("Samir", 22);

  expect(text).toBe("Samir (22 years old)");
});
