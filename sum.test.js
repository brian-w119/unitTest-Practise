import sumNum from "./sum";

describe("sum of numbers", () => {
   test("adds to numbers ", () => {
      const result = sumNum();
      expect(result).toBe(5);
   });
});
