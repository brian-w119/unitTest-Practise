import { calculate, reversesString, capitalise, shiftString } from "./code.js";

describe("All tests to be carried out", () => {
   const testString = "cat";

   test("capitalises first character of string", () => {
      expect(capitalise(testString)).toBe("Cat");
   });

   test("reverses a string", () => {
      expect(reversesString(testString)).toBe("tac");
   });

   test("returns calculation of two numbers", () => {
      expect(calculate(3, 4, "*")).toBe(12);
   });

   test("shift alphanumeric characters by a shift factor", () => {
      expect(shiftString("abc", 1)).toBe("bcd");
   });
});
