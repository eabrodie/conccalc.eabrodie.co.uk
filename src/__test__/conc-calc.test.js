import ConcCalc from "../conc-calc.js";
test("conc calc works", () => {
  expect(ConcCalc(1, "ml", 1, "mg", 0, 0, 0, "concentration")).toBe(
    "The concentration is 1 mg/ml"
  );
});
