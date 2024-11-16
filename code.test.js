import { capitalise } from "./code";

test("capitalises first character of string", () => {
   const testString = "Cat";
   expect(capitalise("cat")).toBe("Cat");
});
