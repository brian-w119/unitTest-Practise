import {
   calculate,
   reversesString,
   capitalise,
   shiftString,
   analyzeArray,
} from "./code.js";

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
      expect(shiftString("a b!", 1)).toBe("b c!");
   });

   test("returns an object with properties: average, min, max, and length", () => {
      expect(analyzeArray([10, 15, 21, 3])).toStrictEqual({
         average: 12.25,
         min: 3,
         max: 21,
         length: 4,
      });
   });
});
